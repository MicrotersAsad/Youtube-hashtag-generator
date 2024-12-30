import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false, // Disable body parsing for proxy requests
  },
};

export default function handler(req, res) {
  const targetUrl = req.query.url;

  if (!targetUrl || !/^https?:\/\//i.test(targetUrl)) {
    res.status(400).json({ error: 'Invalid URL. Please include http:// or https://.' });
    return;
  }

  proxy.web(req, res, {
    target: targetUrl,
    changeOrigin: true, // Allow cross-origin requests
    secure: false, // Disable SSL verification for HTTPS
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    },
  });

  // Remove restrictive headers
  proxy.on('proxyRes', (proxyRes) => {
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
  });

  // Handle proxy errors
  proxy.on('error', (err) => {
    console.error(`Proxy Error for ${targetUrl}:`, err.message);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to fetch content from target URL.' }));
    }
  });
}
