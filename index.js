const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN; // lo pondremos en Render
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🔥 Bot activo correctamente", {
    reply_markup: {
      keyboard: [
        ["📦 Productos", "📢 Broadcast"],
        ["👥 Usuarios"]
      ],
      resize_keyboard: true
    }
  });
});

bot.on("message", (msg) => {
  if (msg.text === "📦 Productos") {
    bot.sendMessage(msg.chat.id, "Aquí irán tus productos 📦");
  }

  if (msg.text === "📢 Broadcast") {
    bot.sendMessage(msg.chat.id, "Sistema de envío masivo 📢");
  }

  if (msg.text === "👥 Usuarios") {
    bot.sendMessage(msg.chat.id, "Lista de usuarios 👥");
  }
});