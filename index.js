const Agenda = require('agenda');

const mongoConnectionString = 'mongodb://127.0.0.1/agenda';

const agenda = new Agenda({db: {address: mongoConnectionString}});

agenda.define('example', (job, done) => {
  console.log(new Date(), 'Example job');
  done();
});

agenda.on('ready', async () => {
  await agenda.every('10 seconds', 'example');
  await agenda.start();
});
