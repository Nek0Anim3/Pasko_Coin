// bot.js
const { Bot, InlineKeyboard } = require('grammy');

// Вставьте сюда ваш токен от BotFather
const bot = new Bot(process.env.BOT_TOKEN);

// Обработка команды /start
bot.command('start', async (ctx) => {
  // Создаем клавиатуру с кнопками
  const keyboard = new InlineKeyboard()
    .text('Кнопка 1', 'callback_data_1')
    .row()
    .text('Кнопка 2', 'callback_data_2');
  
  // Отправляем сообщение с кнопками
  await ctx.reply('Привет! Выберите одну из кнопок:', {
    reply_markup: keyboard,
  });
});

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
