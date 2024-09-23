// pages/api/bot.js
import { bot } from '../../bot';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Передаем запрос от Telegram серверов в грамми
    await bot.handleUpdate(req.body);
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
