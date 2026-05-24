const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Sir! This application is running inside a Docker container and built via GitHub Actions.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});