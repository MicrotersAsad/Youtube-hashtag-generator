let logs = []; // Temporary storage. Use a database in production.

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { type, formId } = req.body;
    logs.push({ type, formId, timestamp: new Date() });
    res.status(200).json({ success: true });
  } else if (req.method === 'GET') {
    res.status(200).json(logs); // Return all logs for dashboard
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
