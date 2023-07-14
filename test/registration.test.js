const request = require('supertest');
const app = require('../index');

// Close the server function
const closeServer = (server) => {
  server.close();
};

// Legacy tests
test('registers a user', async () => {
  const response = await request(app)
    .post('/register')
    .send({ name: 'John Doe', address: '123 Main St', nationID: 'ABC123' });

  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe('User registered successfully!');
});

test('displays the registration form', async () => {
  const response = await request(app).get('/register');
  expect(response.statusCode).toBe(200);
  // Add more assertions to verify the form elements
});

test('validates required fields', async () => {
  const response = await request(app)
    .post('/register')
    .send({ name: '', address: '', nationID: '' });
  expect(response.statusCode).toBe(400);
  // Add more assertions to verify the error response
});

test('validates input formats', async () => {
  const response = await request(app)
    .post('/register')
    .send({ name: 'John Doe', address: '123 Main St', nationID: 'invalid' });
  expect(response.statusCode).toBe(400);
  // Add more assertions to verify the error response
});

test('prevents duplicate registration', async () => {
  // Perform a registration request with a specific nationID
  // Perform another registration request with the same nationID
  // Verify the second request returns an appropriate error response
});

// New tests

// Test case for generating a vaccination date
test('generates a vaccination date', async () => {
  const response = await request(app)
    .post('/register')
    .send({ name: 'John Doe', address: '123 Main St', nationID: 'ABC123' });

  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe('User registered successfully!');
  expect(response.body).toHaveProperty('vaccinationDate');
  // Add more assertions to verify the format and validity of the vaccination date
});

// Add more new tests as needed

// Close the server after the tests are completed
let server;

beforeAll((done) => {
  server = app.listen(done);
});

afterAll((done) => {
  closeServer(server);
  done();
});
