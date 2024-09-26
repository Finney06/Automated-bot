const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');

    const recipient = '23490256567890@c.us'; // Replace with actual number
    const message = 'Hello from the bot!';

    client.sendMessage(recipient, message).then((response) => {
        console.log('Message sent successfully:', response);
    }).catch((error) => {
        console.error('Error sending message:', error);
    });
});

client.initialize();
