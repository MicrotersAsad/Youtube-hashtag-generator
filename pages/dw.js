import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [url, setUrl] = useState("");
  const [formats, setFormats] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch formats based on YouTube URL
  const fetchFormats = async () => {
    setError("");
    setFormats([]);
    setDownloadUrl("");

    if (!url) {
      setError("Please enter a valid YouTube URL.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://ytd.mhnazmul.com/getFormats", { url });
      setFormats(response.data.formats);
    } catch (err) {
      setError("Error fetching video formats.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Download video
  const downloadVideo = async () => {
    setError("");
    setDownloadUrl("");

    if (!url || !selectedQuality) {
      setError("Please select a video quality.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://ytd.mhnazmul.com/upload", { url, itag: selectedQuality });
      setDownloadUrl(response.data.downloadUrl);

      // Automatically trigger download when the download URL is ready
      const link = document.createElement('a');
      link.href = response.data.downloadUrl; // URL returned by the backend
      link.download = '';  // This will trigger the file to download
      link.click();  // Simulate clicking the link to trigger download
    } catch (err) {
      setError("Error downloading video.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-md w-full max-w-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">YouTube Video Downloader</h1>

        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring focus:ring-blue-200"
          placeholder="https://www.youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          className={`w-full py-2 text-white rounded-md ${
            loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
          onClick={fetchFormats}
          disabled={loading}
        >
          {loading ? "Fetching Formats..." : "Get Video"}
        </button>

        {error && (
          <div className="mt-4 text-red-600 bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}

        {formats.length > 0 && (
          <div className="mt-6">
            <p className="text-lg font-bold text-gray-800 mb-4">Download options:</p>

            <div className="grid grid-cols-3 gap-3">
              {formats.map((format, index) => (
                <button
                  key={index}
                  className="bg-green-100 text-green-600 p-2 rounded-md text-sm font-medium hover:bg-green-200"
                  onClick={() => setSelectedQuality(format.itag)}
                >
                  {format.qualityLabel}
                </button>
              ))}
            </div>

            <button
              className={`w-full mt-4 py-2 text-white rounded-md ${
                loading || !selectedQuality
                  ? "bg-green-400"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              onClick={downloadVideo}
              disabled={loading || !selectedQuality}
            >
              {loading ? "Downloading..." : "Download Video"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
