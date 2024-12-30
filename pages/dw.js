import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleDownload = async () => {
    setStatus('Processing...');
    setDownloadUrl('');

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Video ready for download!');
        setDownloadUrl(result.downloadUrl);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 className='text-white'>YouTube Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <button className='text-white' onClick={handleDownload} style={{ padding: '10px' }}>
        Upload & Generate Link
      </button>
      <div style={{ marginTop: '20px' }}>
        <p className='text-white'>{status}</p>
        {downloadUrl && (
          <a className='text-white' href={downloadUrl} target="_blank" rel="noopener noreferrer">
            Click here to download (valid for 10 minutes)
          </a>
        )}
      </div>
    </div>
  );
}
