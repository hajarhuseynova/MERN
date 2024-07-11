const Slack = require('@slack/bolt');
const winston = require('winston');
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'info.log' })
  ]
});
const files = new winston.transports.File({ filename: 'info.log' });
const console = new winston.transports.Console();
//info
logger.clear().add(console).add(files).remove(console); 
const b=logger.log('info', 'info', { message: 'infoworld' });
//error
const file = new winston.transports.File({ filename: 'error.log' });
const consol = new winston.transports.Console();
logger.clear().add(consol).add(file).remove(consol); 
const a=logger.log('error', 'error', { message: 'world' });

const token="xoxb-6533904641011-7255560087632-ERafANDkrqHHwIEe1ZMO4wiZ"
const secretKey="dbe1950486237644259c856f64236eec"
const channel="CM003"

const app= new Slack.App({
  signingSecret: secretKey,
  token:token
})

app.client.chat.postMessage({
  token:token,
  channel:channel,
  text:a
})






