import ytdl from 'ytdl-core';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      // Fetch video information and formats using ytdl-core with more robust options
      const info = await ytdl.getInfo(url, {
        requestOptions: {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          },
        },
      });

      // Extract the available formats
      const formats = info.formats.map(format => ({
        format_id: format.itag,
        resolution: format.height ? `${format.height}p` : 'Audio',
        size: format.filesize ? `${(format.filesize / (1024 * 1024)).toFixed(2)} MB` : 'Variable',
        url: format.url,
      }));

      // Send available formats to the client
      return res.status(200).json({ formats });
    } catch (error) {
      console.error('Error fetching video formats:', error);
      return res.status(500).json({ error: 'Failed to fetch video formats' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
