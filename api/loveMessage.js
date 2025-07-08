export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const generateLoveMessage = () => {
        // generate random number between 0 and 10
        const randomNumber = Math.floor(Math.random() * 10);
        const loveMessages = [
            "You are the love of my life.",
            "Every moment with you is a treasure.",
            "Your smile lights up my world.",
            "I am so grateful to have you in my life.",
            "You make every day better just by being you.",
            "My heart belongs to you forever.",
            "You are my greatest adventure.",
            "With you, I am home.",
            "You complete me in every way.",
            "I love you more than words can say."
        ];
        return loveMessages[randomNumber];
    }
    const message = generateLoveMessage();
    res.status(200).json({ message });
}
