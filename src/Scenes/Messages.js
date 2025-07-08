class Messages extends Phaser.Scene {
    constructor() {
        super("Messages");
    }

    create() {
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        this.add.text(centerX, centerY - 100, 'Loading love message...', {
            fontSize: '32px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        fetch('https://love-letters-for-ashley.vercel.app/api/loveMessage')
            .then(res => {
                console.log("Response status:", res.status);
                return res.json();
            })
            .then(data => {
                console.log("Received message:", data.message);
                this.add.text(centerX, centerY, data.message, {
                    fontSize: '24px',
                    fill: '#FF69B4',
                    wordWrap: { width: 600, useAdvancedWrap: true }
                }).setOrigin(0.5);
            })
            .catch(err => {
                console.error("Fetch failed:", err);
                this.add.text(centerX, centerY, 'Could not load message 💔', {
                    fontSize: '24px',
                    fill: '#FF0000'
                }).setOrigin(0.5);
            });
    }

}
