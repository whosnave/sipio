const fs = require('fs');
const path = require('path');

const filePath = path.resolve(process.cwd(), 'visitors.json');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  let visitors = [];

  if (fs.existsSync(filePath)) {
    visitors = JSON.parse(fs.readFileSync(filePath));
  }

  if (!visitors.includes(ip)) {
    visitors.push(ip);
    fs.writeFileSync(filePath, JSON.stringify(visitors));
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ count: visitors.length });
};
