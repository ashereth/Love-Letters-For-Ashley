export default async function handler(req, res) {
  // Allowed origins for CORS (add your frontend URLs here)
  const allowedOrigins = ['https://ashereth.github.io', 'http://localhost:5500'];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Optionally block or set a default origin:
    res.setHeader('Access-Control-Allow-Origin', 'https://ashereth.github.io');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Missing API key" });
    return;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a romantic poet." },
          { role: "user", content: "Give me a short love message for my girlfriend Ashley." }
        ],
        max_tokens: 50
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      res.status(response.status).json({ error: errorText });
      return;
    }

    const data = await response.json();
    const message = data?.choices?.[0]?.message?.content?.trim() || "Love is in the air ❤️";
    res.status(200).json({ message });

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
