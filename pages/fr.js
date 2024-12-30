import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');
  const [selectedForm, setSelectedForm] = useState(null);
  const [scriptTag, setScriptTag] = useState('');

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    setIframeUrl(url);
  };

  // ফর্ম হাইলাইট এবং সিলেক্ট করার ফাংশন
  const handleIframeLoad = (e) => {
    const iframeDocument = e.target.contentWindow.document;

    // সব ফর্ম খুঁজে বের করা
    const forms = iframeDocument.querySelectorAll('form');

    // প্রতিটি ফর্মে হাইলাইট এবং ক্লিক ইভেন্ট লিসেনার যোগ করা
    forms.forEach((form, index) => {
      form.style.border = '2px solid red'; // হাইলাইট করার জন্য লাল বর্ডার
      form.style.cursor = 'pointer'; // ফর্মে ক্লিক করার জন্য পয়েন্টার কার্সর যোগ করা

      // ফর্মে ক্লিক ইভেন্ট লিসেনার
      form.addEventListener('click', (event) => {
        event.preventDefault(); // ডিফল্ট সাবমিট বন্ধ করা

        // আগে সিলেক্ট করা ফর্মের বর্ডার সরিয়ে ফেলা
        forms.forEach(f => f.style.border = '2px solid red');

        // সিলেক্ট করা ফর্ম হাইলাইট করা
        form.style.border = '3px solid green';

        // সিলেক্টর তৈরি করা
        const selector = `form:nth-of-type(${index + 1})`;
        setSelectedForm(selector);
        alert(`Form selected: ${selector}`);
      });
    });
  };

  // স্ক্রিপ্ট জেনারেট করার ফাংশন
  const generateScript = async () => {
    if (!selectedForm) {
      alert('Please select a form first!');
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formSelector: selectedForm, userId: 'user123' }),
    });

    const data = await response.json();
    setScriptTag(data.script);
  };

  return (
    <div>
      <h1>Form Monitoring System</h1>
      <form onSubmit={handleUrlSubmit}>
        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Load Website</button>
      </form>

      {iframeUrl && (
        <div>
          <h2>Select a form to monitor:</h2>
          <iframe
            src={iframeUrl}
            style={{ width: '100%', height: '500px', border: '1px solid black' }}
            onLoad={handleIframeLoad} // Iframe লোড হলে ফর্ম সিলেক্টের জন্য ফাংশন কল
          />
          {selectedForm && <p>Selected Form: {selectedForm}</p>}
          <button onClick={generateScript}>Generate Script</button>
        </div>
      )}

      {scriptTag && (
        <div>
          <h3>Embed this script in your website:</h3>
          <textarea value={scriptTag} readOnly style={{ width: '100%', height: '150px' }} />
        </div>
      )}
    </div>
  );
}
