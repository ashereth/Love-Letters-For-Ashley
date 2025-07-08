export default async function handler(req, res) {
  const loveLetter = `
    My Dearest,

    From the moment our eyes met, I knew you were someone extraordinary.
    Your presence fills my days with joy, and your smile lights up even the darkest corners of my soul.

    Forever yours, Asher.
    ❤️
  `;
  
  res.status(200).json({ message: loveLetter.trim() });
}
