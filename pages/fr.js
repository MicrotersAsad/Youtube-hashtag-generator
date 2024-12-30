import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [iframeContent, setIframeContent] = useState('');
  const [selectedForm, setSelectedForm] = useState(null);
  const [scriptTag, setScriptTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUrlSubmit = async (e) => {
    e.preventDefault();

    if (!/^https?:\/\//i.test(url)) {
      alert('Please enter a valid URL with http:// or https://');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch website content');
      }
      const html = await response.text();
      setIframeContent(html);
    } catch (error) {
      console.error('Failed to load the URL:', error);
      alert('Failed to load the website. Please ensure the URL is correct and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleIframeLoad = (iframeDocument) => {
    try {
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
      alert('An error occurred while accessing the iframe content. Please try again.');
    }
  };

  const generateScript = () => {
    if (!selectedForm) {
      alert('Please select a form first!');
      return;
    }

    const script = `
      <script>
        (function() {
          const form = document.querySelector('${selectedForm}');
          if (!form) return;

          form.addEventListener('submit', () => {
            fetch('https://your-api-url.com/api/log', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ type: 'submit', formId: '${selectedForm}' })
            });
          });

          window.addEventListener('beforeunload', () => {
            fetch('https://your-api-url.com/api/log', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ type: 'abandoned', formId: '${selectedForm}' })
            });
          });
        })();
      </script>
    `;
    setScriptTag(script);
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
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load Website'}
        </button>
      </form>

      {iframeContent && (
        <div>
          <h2>Select a form to monitor:</h2>
          <iframe
            sandbox="allow-same-origin allow-scripts"
            srcDoc={iframeContent}
            style={{ width: '100%', height: '500px', border: '1px solid black' }}
            onLoad={(e) => handleIframeLoad(e.target.contentDocument)}
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
