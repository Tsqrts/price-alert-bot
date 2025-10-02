const axios = require("axios");

const Bot_Token = process.env.BOT_TOKEN;
const chat_id = process.env.CHAT_ID;

function sendAlert(message) {
  axios.post(`https://api.telegram.org/bot${Bot_Token}/sendMessage`, {
    chat_id,
    text: message
  })
  .then(response => {
    console.log("✅ Message sent:", response.data);
  })
  .catch(error => {
    console.error("❌ Error sending message:", error.response?.data || error.message);
  });
}

module.exports = sendAlert;
