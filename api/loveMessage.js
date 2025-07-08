export default async function handler(req, res) {
    // ✅ Allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // ✅ Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const apiKey = process.env.OPENAI_API_KEY;

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

    const data = await response.json();

    const message = data?.choices?.[0]?.message?.content?.trim() || "Love is in the air ❤️";

    res.status(200).json({ message });
}
