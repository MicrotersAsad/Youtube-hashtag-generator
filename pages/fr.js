import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');
  const [selectedForm, setSelectedForm] = useState(null);
  const [scriptTag, setScriptTag] = useState('');

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    setIframeUrl(url); // সরাসরি URL ব্যবহার না করে Proxy API ব্যবহার করুন
  };

  const handleIframeLoad = (e) => {
    try {
      const iframeDocument = e.target.contentWindow.document;
      const forms = iframeDocument.querySelectorAll('form');

      if (forms.length === 0) {
        alert('No forms found on the loaded page.');
        return;
      }

      forms.forEach((form, index) => {
        form.style.border = '2px solid red';
        form.style.cursor = 'pointer';

        form.addEventListener('click', (event) => {
          event.preventDefault();
          forms.forEach((f) => (f.style.border = '2px solid red'));
          form.style.border = '3px solid green';
          const selector = `form:nth-of-type(${index + 1})`;
          setSelectedForm(selector);
          alert(`Form selected: ${selector}`);
        });
      });
    } catch (error) {
      console.error('Error accessing iframe content:', error);
      alert('Could not access iframe content. This might be due to cross-origin restrictions.');
    }
  };

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
            src={iframeUrl} // সরাসরি URL না দিয়ে Proxy API ব্যবহার করুন
            style={{ width: '100%', height: '500px', border: '1px solid black' }}
            onLoad={handleIframeLoad}
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
