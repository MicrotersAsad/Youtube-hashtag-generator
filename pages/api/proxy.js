import httpProxy from 'http-proxy';

// Create proxy instance
const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false, // Disable body parsing
  },
};

export default async function handler(req, res) {
  const targetUrl = req.query.url;

  if (!targetUrl || !/^https?:\/\//i.test(targetUrl)) {
    res.status(400).json({ error: 'Invalid URL. Please include http:// or https://.' });
    return;
  }

  return new Promise((resolve, reject) => {
    // Proxy the request
    proxy.web(req, res, {
      target: targetUrl,
      changeOrigin: true,
      secure: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      },
    });

    // Handle proxy response
    proxy.on('proxyRes', (proxyRes) => {
      delete proxyRes.headers['x-frame-options'];
      delete proxyRes.headers['content-security-policy'];
      resolve(); // Mark the response as resolved
    });

    // Handle proxy error
    proxy.on('error', (err) => {
      console.error('Proxy Error:', err.message || err);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to fetch content from target URL.' }));
      }
      reject(err);
    });

    // Ensure response lifecycle is completed
    res.on('close', () => {
      resolve();
    });
  });
}
