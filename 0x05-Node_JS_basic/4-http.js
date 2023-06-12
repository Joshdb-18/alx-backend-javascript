const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Set the response body
  res.write('Hello Holberton School!\n');

  // End the response
  res.end();
});

// Set the server to listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
