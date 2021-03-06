const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

//Codigo trás informação do numero digitado
client.lookups.v1.phoneNumbers('000000000000')
                 .fetch({type: ['carrier']})
                 .then(phone_number => console.log(phone_number.carrier));

client.messages.create({
    to: '0000000000000',
    from: process.env.TWILIO_NUMBER,
    body: 'dudu zé ruela!',
}).then(message => console.log(message)).catch(err => console.error(err));