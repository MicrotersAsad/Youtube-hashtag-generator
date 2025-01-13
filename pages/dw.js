import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [formats, setFormats] = useState([]);
  const [status, setStatus] = useState('');
  const [downloadUrl, setDownloadUrl] = useState(''); // To store the download URL
  const [isLoadingFormats, setIsLoadingFormats] = useState(false); // State for loading formats
  const [progress, setProgress] = useState(0); // State for progress bar during video processing
  const [isProcessing, setIsProcessing] = useState(false); // State to check if the video is being processed
  const [videoUrl, setVideoUrl] = useState(''); // To store video URL for embedding
  const [isVideoFetched, setIsVideoFetched] = useState(false); // To check if video is fetched

  // Function to fetch video formats based on URL
  const fetchFormats = async () => {
    if (!url) {
      setStatus('Please enter a valid YouTube URL');
      return;
    }

    setIsLoadingFormats(true); // Start loading
    setIsVideoFetched(false); // Reset video fetched state

    try {
      const response = await fetch('https://api.mhnazmul.com/api/youtube/getFormats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormats(result.formats); // Store formats in state
        setStatus('');
      } else {
        setStatus('Error fetching formats');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again.');
    } finally {
      setIsLoadingFormats(false); // Stop loading
    }

    // Attempt to fetch the video URL for preview
    try {
      const videoInfo = await fetchVideoUrl(url);
      setVideoUrl(videoInfo);
      setIsVideoFetched(true); // Mark video as fetched
    } catch (error) {
      console.error('Error fetching video:', error);
      setStatus('Error fetching video preview.');
    }
  };

  // Function to fetch the video URL for preview (could be a YouTube video embed link or direct video URL)
  const fetchVideoUrl = async (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`https://www.youtube.com/embed/${url.split('v=')[1]}`), 1000); // Simulate a 1-second delay for fetching
    });
  };

  // Function to handle video download based on selected format
  const handleDownload = async (quality) => {
    setIsProcessing(true); // Set processing state to true
    setProgress(0); // Reset progress bar
    setStatus('Starting download...'); // Update status to inform the user

    // Simulate a short delay to start downloading (e.g., server-side processing time)
    setTimeout(async () => {
      try {
        const response = await fetch('https://api.mhnazmul.com/api/youtube/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url, quality }),
        });
console.log(response);

        const result = await response.json();
        console.log(result);
        

        if (response.ok) {
          setDownloadUrl(result.downloadUrl); // Store the download URL
          setStatus('Downloading...'); // Update status to inform that download is in progress
          simulateProgress();  // Start simulating the progress bar
        } else {
          setStatus('Error: ' + result.error);  // If there's an error, update status
        }
      } catch (error) {
        console.error('Error:', error);
        setStatus('An error occurred. Please try again.'); // Error handling
      }
    }, 1000);  // Start after a brief delay to simulate processing start
  };

  // Simulate the progress bar (this should be replaced with real progress tracking)
  const simulateProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress >= 100) {
        clearInterval(interval);  // Stop the progress bar once it reaches 100%
        setIsProcessing(false);    // Stop processing
        setStatus('Download Complete!'); // Final status message when download completes
      } else {
        currentProgress += 10;
        setProgress(currentProgress);  // Update progress state
      }
    }, 1000);  // Update progress every second

    // Here, you would replace this with real progress tracking code from the backend if available.
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-5">
      <h1 className="text-4xl font-bold text-white mb-6">YouTube Video Downloader</h1>

      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="px-4 py-2 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchFormats}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Fetch Video
        </button>
      </div>

      {isLoadingFormats && (
        <div className="text-white text-sm mb-4">Loading formats...</div>
      )}

      {isVideoFetched && !isLoadingFormats && videoUrl && (
        <div className="mt-6 text-center">
          <h3 className="text-white text-lg mb-2">Video Preview</h3>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="Video preview"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {status && <p className="text-white text-sm mb-4">{status}</p>}

      {formats.length > 0 && !isLoadingFormats && (
        <div className="bg-gray-800 p-4 rounded-lg w-full max-w-lg">
          <h3 className="text-xl text-white font-semibold mb-3">Available Formats</h3>
          <div className="flex flex-wrap gap-2">
            {formats.map((format, index) => (
              <button
                key={index}
                onClick={() => handleDownload(format.qualityLabel)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                {format.qualityLabel}
              </button>
            ))}
          </div>
        </div>
      )}

      {isProcessing && (
        <div className="w-full max-w-lg mt-4">
          <div className="bg-gray-700 h-2 rounded-full">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white text-sm mt-2">Processing: {progress}%</p>
        </div>
      )}

      {progress === 100 && downloadUrl && (
        <div className="mt-6 text-center">
          <p className="text-white text-lg mb-2">Your video is ready! Download it here:</p>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline text-lg hover:text-blue-500"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}
