const { Telegraf } = require('telegraf');
const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

bot.start((ctx) => {
  ctx.reply('Привет! Хочешь сыграть в пинг-понг?', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Играть', web_app: { url: 'https://your-app-url.com' } }]
      ]
    }
  });
});

bot.launch();
