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

        fetch('https://love-letters-for-ashley.vercel.app/') // Replace with your actual URL
            .then(res => res.json())
            .then(data => {
                this.add.text(centerX, centerY, data.message, {
                    fontSize: '24px',
                    fill: '#FF69B4',
                    wordWrap: { width: 600, useAdvancedWrap: true }
                }).setOrigin(0.5);
            })
            .catch(err => {
                console.error(err);
                this.add.text(centerX, centerY, 'Could not load message 💔', {
                    fontSize: '24px',
                    fill: '#FF0000'
                }).setOrigin(0.5);
            });
    }
}
