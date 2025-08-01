const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

const filePath = 'visitors.json';

app.post('/api/visitor', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  let visitors = [];
  if (fs.existsSync(filePath)) {
    visitors = JSON.parse(fs.readFileSync(filePath));
  }

  if (!visitors.includes(ip)) {
    visitors.push(ip);
    fs.writeFileSync(filePath, JSON.stringify(visitors));
  }

  res.json({ count: visitors.length });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Visitor server running on port ${PORT}`);
});
