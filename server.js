const app = require('./index');
const server = app.listen(3000, () => {
  console.log('Web app1 is running on port 3000');
});

module.exports = server;
