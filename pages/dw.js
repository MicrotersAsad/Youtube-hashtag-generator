import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [url, setUrl] = useState("");
  const [formats, setFormats] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch formats based on YouTube URL
  const fetchFormats = async () => {
    setError("");
    setFormats([]);

    if (!url) {
      setError("Please enter a valid YouTube URL.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/getFormats", { url });
      setFormats(response.data.formats);
    } catch (err) {
      setError("Error fetching video formats.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Download video
  const downloadVideo = () => {
    setError("");

    if (!url || !selectedQuality) {
      setError("Please select a video quality.");
      return;
    }

    const downloadLink = `http://localhost:5000/download?url=${encodeURIComponent(
      url
    )}&itag=${selectedQuality}`;

    // Trigger download
    const link = document.createElement("a");
    link.href = downloadLink;
    link.setAttribute("download", ""); // Optional: specify file name
    document.body.appendChild(link);
    link.click();
    link.remove();
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
                  className={`bg-green-100 text-green-600 p-2 rounded-md text-sm font-medium hover:bg-green-200 ${
                    selectedQuality === format.itag ? "bg-green-300" : ""
                  }`}
                  onClick={() => setSelectedQuality(format.itag)}
                >
                  {format.qualityLabel}
                </button>
              ))}
            </div>

            <button
              className={`w-full mt-4 py-2 text-white rounded-md ${
                !selectedQuality ? "bg-green-400" : "bg-green-600 hover:bg-green-700"
              }`}
              onClick={downloadVideo}
              disabled={!selectedQuality}
            >
              Download Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
