const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require("dotenv").config({ path: "./alarm.env" });

// rest of your code...

function sendAlert(message) {
  const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: process.env.CHAT_ID,
    text: message,
  };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then(data => console.log("✅ Alert sent:", data))
    .catch(err => console.error("❌ Telegram error:", err));
}

module.exports = sendAlert;
