// bot.js
const { Bot, InlineKeyboard } = require('grammy');

// Вставьте сюда ваш токен от BotFather
const { Bot, InlineKeyboard } = require('grammy');

// Создаем экземпляр бота с токеном
const bot = new Bot(process.env.BOT_TOKEN);

// Функция для установки Webhook
const setupWebhook = async () => {
  const webhookUrl = `${process.env.VERCEL_URL}/api/bot`; // URL вашего API на Vercel
  await bot.api.setWebhook(webhookUrl);
  console.log(`Webhook установлен на: ${webhookUrl}`);
};

// Вызов функции для установки Webhook при запуске приложения
setupWebhook();

// Пример обработки команды /start
bot.command('start', async (ctx) => {
  const keyboard = new InlineKeyboard()
    .text('Кнопка 1', 'callback_data_1')
    .row()
    .text('Кнопка 2', 'callback_data_2');

  await ctx.reply('Привет! Выберите одну из кнопок:', {
    reply_markup: keyboard,
  });
});

// Экспорт бота для использования в API роуте
module.exports = bot;


// Обработка нажатий на кнопки
bot.on('callback_query:data', async (ctx) => {
  const callbackData = ctx.callbackQuery.data;

  if (callbackData === 'callback_data_1') {
    await ctx.answerCallbackQuery('Вы нажали на Кнопку 1');
  } else if (callbackData === 'callback_data_2') {
    await ctx.answerCallbackQuery('Вы нажали на Кнопку 2');
  }
});

// Запуск бота
bot.start();
