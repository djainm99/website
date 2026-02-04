const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/response', (req, res) => {
  let { answer } = req.body ?? {};
  if (answer === 'yes') {
    res.json({ message: '💕 You just made my heart skip a beat! I love you!' });
  } else {
    res.json({ message: '💔 Are you sure? Look at those hearts again... 🥺' });
  }
});

app.listen(port, () => {
  console.log(`💝 Valentine server running at http://localhost:${port}`);
});
