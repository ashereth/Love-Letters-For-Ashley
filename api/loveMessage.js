export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const loveLetter = `
    My Dearest,

    Your presence fills my heart in ways words can scarcely describe.

    Forever yours,
    ❤️
  `;

  res.status(200).json({ message: loveLetter.trim() });
}
