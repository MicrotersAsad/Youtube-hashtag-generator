import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Upload } from '@aws-sdk/lib-storage';
import ytdl from '@distube/ytdl-core';
import { v4 as uuidv4 } from 'uuid';

// Configure S3 Client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    try {
      // Get video information
      const videoInfo = await ytdl.getInfo(url);
      const videoTitle = videoInfo.videoDetails.title.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `${videoTitle}-${uuidv4()}.mp4`;

      // Create a readable stream for the video
      const videoStream = ytdl(url, {
        quality: 'highestvideo',
        filter: 'audioandvideo',
      });

      // Use the Upload helper for streaming upload
      const upload = new Upload({
        client: s3,
        params: {
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: fileName,
          Body: videoStream,
          ContentType: 'video/mp4', // Set the content type for video files
          ContentDisposition: `attachment; filename="${fileName}"`, // Force file download
        },
      });

      // Monitor upload progress
      upload.on('httpUploadProgress', (progress) => {
        console.log('Upload progress:', progress);
      });

      // Perform the upload
      await upload.done();

      // Generate a pre-signed URL for downloading the video
      const signedUrl = await getSignedUrl(
        s3,
        new GetObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: fileName,
          ResponseContentDisposition: `attachment; filename="${fileName}"`, // Ensure forced download
          ResponseContentType: 'video/mp4', // Set response content type explicitly
        }),
        { expiresIn: 600 } // URL valid for 10 minutes
      );

      res.status(200).json({ downloadUrl: signedUrl });
    } catch (err) {
      console.error('Error uploading to S3:', err);
      res.status(500).json({ error: 'Error uploading video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
