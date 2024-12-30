import fs from 'fs';
import path from 'path';
import ytdl from '@distube/ytdl-core';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    try {
      const videoInfo = await ytdl.getInfo(url);
      const videoTitle = videoInfo.videoDetails.title.replace(/[^a-zA-Z0-9]/g, '_');
      const filePath = path.resolve('./public', `${videoTitle}.mp4`);

      const videoStream = ytdl(url, {
        quality: 'highestvideo',
        filter: 'audioandvideo',
      });

      const writeStream = fs.createWriteStream(filePath);
      videoStream.pipe(writeStream);

      writeStream.on('finish', () => {
        res.status(200).json({ message: 'Download complete', filePath: `/public/${videoTitle}.mp4` });
      });

      writeStream.on('error', (err) => {
        console.error('Error writing file:', err);
        res.status(500).json({ error: 'Error saving video' });
      });
    } catch (err) {
      console.error('Error downloading video:', err);
      res.status(500).json({ error: 'Error processing video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
