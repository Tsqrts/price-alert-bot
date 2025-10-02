require("dotenv").config();
const sendAlert = require("./TelegramAlert");

const targetPrice = 3885;
let alertSent = false;

async function getCurrentPrice() {
  // Replace this with real API later
  return 3885; // Simulated price
}

setInterval(async () => {
  const currentPrice = await getCurrentPrice();
  console.log("📈 Current Price:", currentPrice);

  if (!alertSent && currentPrice >= targetPrice) {
    sendAlert(`🚨 Price hit ${targetPrice}! Current: ${currentPrice}`);
    alertSent = true;
  }
}, 5000);