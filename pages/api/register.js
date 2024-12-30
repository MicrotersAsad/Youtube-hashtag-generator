export default function handler(req, res) {
    if (req.method === 'POST') {
      const { formSelector, userId } = req.body;
      const script = `
        <script>
          (function() {
            const form = document.querySelector('${formSelector}');
            if (!form) return;
  
            form.addEventListener('submit', () => {
              fetch('${process.env.NEXT_PUBLIC_API_URL}/api/log', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'submit', formId: '${formSelector}' })
              });
            });
  
            form.addEventListener('input', () => {
              fetch('${process.env.NEXT_PUBLIC_API_URL}/api/log', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'typing', formId: '${formSelector}' })
              });
            });
  
            window.addEventListener('beforeunload', () => {
              fetch('${process.env.NEXT_PUBLIC_API_URL}/api/log', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'abandoned', formId: '${formSelector}' })
              });
            });
          })();
        </script>
      `;
      res.json({ script });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  