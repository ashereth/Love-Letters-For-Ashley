export default async function handler(req, res) {
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
    const message = loveMessages[randomNumber];
    res.status(200).json({ message });
}
