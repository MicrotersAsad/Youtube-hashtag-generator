import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [url, setUrl] = useState("");
  const [formats, setFormats] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch formats based on YouTube URL
  const fetchFormats = async () => {
    setError("");
    setFormats([]);
    setThumbnail("");
    setEmbedUrl("");
    setVideoTitle("");

    if (!url) {
      setError("Please enter a valid YouTube URL.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://ytd.mhnazmul.com/getFormats", { url });
      setFormats(response.data.formats);
      setThumbnail(response.data.thumbnail);
      setEmbedUrl(response.data.embedUrl);
      setVideoTitle(response.data.videoTitle);
    } catch (err) {
      setError("Error fetching video formats.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Download function
  const handleDownload = (type, itag) => {
    const downloadUrl = `https://ytd.mhnazmul.com/download${type}?url=${encodeURIComponent(
      url
    )}&itag=${itag}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-md w-full max-w-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">YouTube Downloader</h1>

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
          {loading ? "Fetching Formats..." : "Get Formats"}
        </button>

        {error && <div className="mt-4 text-red-600 bg-red-100 p-2 rounded-md">{error}</div>}

        {thumbnail && (
          <div className="mt-6">
            <iframe
              width="100%"
              height="315"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {formats.length > 0 && (
          <div className="mt-6">
            <p className="text-lg font-bold text-gray-800 mb-4">{videoTitle}</p>

            {formats.map((format, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b">
                <span>
                  {format.qualityLabel} {format.type === "audio" ? "(Audio)" : ""}
                </span>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={() =>
                    handleDownload(format.type === "audio" ? "Audio" : "Video", format.itag)
                  }
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
