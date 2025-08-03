const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const user = {
  name: "Nitika Niti",
  referralCode: "nitikaniti2025",
  amountRaised: 1500
};

const leaderboard = [
  { name: "Nitika Niti", amount: 1500 },
  { name: "Rahul Mehta", amount: 1200 },
  { name: "Priya Sharma", amount: 980 },
  { name: "Anil Kumar", amount: 850 },
  { name: "Kavita Verma", amount: 700 }
];

app.get('/api/user', (req, res) => {
  res.json(user);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
