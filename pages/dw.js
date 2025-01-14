import React, { useState } from "react";
import axios from "axios";


const App = () => {
  const [url, setUrl] = useState("");
  const [formats, setFormats] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      const response = await axios.post("https://ytd.mhnazmul.com/api/getFormats", { url });
      setFormats(response.data.formats);
    } catch (err) {
      setError("Error fetching video formats.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadVideo = async () => {
    setError("");
    setDownloadUrl("");
    if (!url || !selectedQuality) {
      setError("Please select a video quality.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://ytd.mhnazmul.com/api/upload", { url, quality: selectedQuality });
      setDownloadUrl(response.data.downloadUrl);
    } catch (err) {
      setError("Error downloading video.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-xl bg-white shadow-lg rounded-md mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">YouTube Video Downloader</h1>

      <div className="mb-4">
        <label htmlFor="youtubeUrl" className="block text-gray-700 font-medium mb-2">
          YouTube Video URL
        </label>
        <input
          type="text"
          id="youtubeUrl"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube video URL"
        />
      </div>

      <button
        onClick={fetchFormats}
        className={`w-full py-2 px-4 mb-4 text-white rounded-md ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"} `}
        disabled={loading}
      >
        {loading ? "Fetching Formats..." : "Fetch Formats"}
      </button>

      {error && <div className="mb-4 p-2 text-red-700 bg-red-100 rounded-md">{error}</div>}

      {formats.length > 0 && (
        <div className="mb-4">
          <label htmlFor="videoQuality" className="block text-gray-700 font-medium mb-2">
            Select Video Quality
          </label>
          <select
            id="videoQuality"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            onChange={(e) => setSelectedQuality(e.target.value)}
          >
            <option value="">Select Quality</option>
            {formats.map((format, index) => (
              <option key={index} value={format.qualityLabel}>
                {format.qualityLabel} ({format.mimeType})
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        onClick={downloadVideo}
        className={`w-full py-2 px-4 mb-4 text-white rounded-md ${loading || !selectedQuality ? "bg-green-400" : "bg-green-600 hover:bg-green-700"}`}
        disabled={loading || !selectedQuality}
      >
        {loading ? "Downloading..." : "Download Video"}
      </button>

      {downloadUrl && (
        <div className="p-4 bg-green-100 text-green-700 rounded-md">
          <p>Download ready! Click the link below:</p>
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
