const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require("dotenv").config({ path: "./alarm.env" });
const sendAlert = require("./TelegramAlert");

// rest of your code...
// ✅ Set your manual target price here
const targetPrice = 3869;
let alertSent = false;

async function getCurrentPrice() {
  try {
    const symbol = "XAU/USD"; // Change to EUR/USD, GBP/USD, etc. as needed
    const url = `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${process.env.TWELVE_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.price) {
      return parseFloat(data.price);
    } else {
      console.error("❌ API error:", data);
      return null;
    }
  } catch (err) {
    console.error("❌ Fetch error:", err);
    return null;
  }
}

setInterval(async () => {
  const currentPrice = await getCurrentPrice();
  if (currentPrice === null) return;

  console.log("📈 Current Price:", currentPrice);

  if (!alertSent && currentPrice >= targetPrice) {
    sendAlert(`🚨 Price hit ${targetPrice}! Current: ${currentPrice}`);
    alertSent = true;
  }

  if (alertSent && currentPrice < targetPrice) {
    alertSent = false;
  }
}, 8000);
