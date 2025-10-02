// telegramAlert.js
const axios = require("axios");

const Bot_Token = "8363677284:AAFo_7USrdr_2jPxPhzD_7QYIZvP_GFTohI";
const chat_id = "5339604158";

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