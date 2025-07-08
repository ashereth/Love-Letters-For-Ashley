export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const generateLoveMessage = () => {
        const loveMessages = [
            "I miss you so much Ashley❤️.",
            "I love you more than anything.",
            "You are the most gorgeous girl ever and I am so lucky to be dating you.",
            "I want to give you forhead kisses till we fall asleep in eachothers arms.",
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
            I just stare at my lockscreen and think about how lucky I am and how much I miss you."
        ];
        return loveMessages[Math.floor(Math.random() * loveMessages.length)];
    }

    const message = generateLoveMessage();

    res.status(200).json({ message });
}
