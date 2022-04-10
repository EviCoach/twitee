const Emitter = require('events').EventEmitter;
const listener = new Emitter();
const auth_repository = require('../app/auth/auth_repository');
const userRepository = require('../app/user/user_repository');
const { EMIT } = require("../config/constants");
const emailInterface = require('../util/mail/email_interface');

listener.on(EMIT.USER.CREATED, payload => {
    console.log("Triggered ", EMIT.USER.CREATED);
    setImmediate(async () => {
        try{
            const user = await userRepository.create(payload);
            // send verfication
            const msg = {
            to: payload.email, // Change to your recipient
            from: 'verify@twitee.com', // Change to your verified sender
            subject: 'Verify your Twitee Account',
            text: 'Welcome to Twitee. A wonderful experience',
            html: '<a href=verifyurl> click here to verify your account</a>',
        }
            emailInterface["sendgrid"].send(msg)
            console.log("User created successfully ", user);
        } catch (err) {
            console.log("Error creating user, deleting user auth");
            auth_repository.delete({ email: payload.email });
        }
        
    });
});

exports.Emitter = listener;