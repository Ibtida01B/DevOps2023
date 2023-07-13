const app = require('./index');
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Web app is running on port ${port}`);
});

module.exports = server;
