export const dynamic = 'force-dynamic'

export const fetchCache = 'force-no-store'

import { Bot, webhookCallback } from 'grammy'

const token = process.env.AAHy4J8q7zDY4WdMN3H3xVIwyvJ3m9qSTS4

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

const bot = new Bot(token)
bot.on('message:text', async (ctx) => {
  await ctx.reply(ctx.message.text)
})

export const POST = webhookCallback(bot, 'std/http')