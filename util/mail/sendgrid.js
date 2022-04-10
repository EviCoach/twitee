const sendGrid = require('@sendgrid/mail');
const config = require("../../config/devConf");
sendGrid.setApiKey(config.SENDGRID_API_KEY);
module.exports = {
    send: async (msg) => {
        // const msg = {
        //     to: 'test@example.com', // Change to your recipient
        //     from: 'test@example.com', // Change to your verified sender
        //     subject: 'Sending with SendGrid is Fun',
        //     text: 'and easy to do anywhere, even with Node.js',
        //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        // }
        await sendGrid.send(msg)
    }
}


