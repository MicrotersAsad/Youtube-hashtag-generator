import { exec } from 'child_process';

// API to fetch available video formats (resolutions) from YouTube URL
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Use yt-dlp to get the formats available for the video
    exec(`yt-dlp -F ${url}`, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: stderr || error.message });
      }

      // Parse the output to get video formats
      const formats = parseVideoFormats(stdout);
      return res.status(200).json({ formats });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// Function to parse the video formats from yt-dlp output
function parseVideoFormats(stdout) {
  const lines = stdout.split('\n');
  const formats = [];

  lines.forEach((line) => {
    const match = line.match(/(\d+)\s+(\d{3,4}p)\s+(\d+\.\d+M)/);
    if (match) {
      formats.push({
        format_id: match[1],
        resolution: match[2],
        size: match[3],
      });
    }
  });

  return formats;
}
