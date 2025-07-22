export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const generateLoveMessage = () => {
        // after a 1 second delay, return a random love message
        // this simulates a delay like fetching from a database or an API
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        delay(1000);
        const loveMessages = [
            "I miss you so much Ashley❤️.",
            "I love you more than anything.",
            "You are the most gorgeous girl ever and I am so lucky to be dating you.",
            "I want to give you forehead kisses till we fall asleep in eachothers arms.",
            "I can't wait to be with you for the rest of my life and spend my nights sleeping \
            with you and my mornings waking up next to you.",
            "When I am not with you all I think about is how all my problems and stress would \
            go away if you were close by❤️.",
            "I can't wait to hold you in my arms again.",
            "We need to get Fire On The Mountain ASAP when you get to Oregon. Then we can \
            get so full that we take a nap with eachother in my bed.",
            "You make me feel like all my dreams have already come true.",
            "You and I can do anything and everything together and can't wait for our future together.",
            "You are the most beautiful girl ever and you always make me so happy whenever I look at you.",
            "I always feel so happy everytime I open up my phone and get to see a picture of you. Sometimes \
            I just stare at my lockscreen and think about how lucky I am and how much I miss you.",
            "All I can think about every day is you.",
            "You make the good times amazing and the bad times good whenever you're near.",
            "Making you laugh is the best thing I can ever do (even if I have to act really weird).",
            "I love looking at pictures of you smiling they make me so happy and I'm so lucky that I am able to make you happy.",
            "I really like all the pictures you draw you are so talented and creative and you really do impress me all the time.",
            "I'm worried they'll take my skin.",
            "I'm worried they can read my thoughts.",
            "I'm worried they found her grave."
        ];
        return loveMessages[Math.floor(Math.random() * loveMessages.length)];
    }

    const message = generateLoveMessage();

    res.status(200).json({ message });
}
