const request = require('supertest');
const server = require('../server');

test('registers a user', async () => {
  const response = await request(server)
    .post('/register')
    .send({ name: 'John Doe', address: '123 Main St', nationID: 'ABC123' });

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('User registered successfully!');
});

// Add more test cases as needed
