const app = require('./app');
const { ConnectMongo } = require('./db/accounts');
const { PORT = 4000 } = process.env;

ConnectMongo.then(() => {
  app.listen(PORT, function () {
    console.log(`Database connection successful`);
  });
}).catch((err) => {
  console.log(`Server not running. Error message: ${err.message}`);
  process.exit(1);
});
