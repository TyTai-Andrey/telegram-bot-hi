
const TelegramBot = require('node-telegram-bot-api')


//Посмотреть что пришло
const debug = require('./helpers')
const fs = require('fs')

const TOKEN = '1518210856:AAHt5g855-aRg6aUTBKGlDTerVXd7T2gZ7w'


console.log('___________________')
console.log('___________________')
console.log('___________________')
console.log('_____bot_started___')
console.log('___________________')
console.log('___________________')


const bot = new TelegramBot(TOKEN, {
	polling: true

	// {
	// 	interval: 300,
	// 	autoStart: true,
	// 	params: {
	// 		timeout: 10
	// 	}
	// }
})

bot.on('message', (msg) => {

	const { id } = msg.chat
	const text  = msg.text

	// bot.sendMessage(id, debug(msg))
	
	if (msg.new_chat_member != null)
    {


	const html = `Привет, <strong>${msg.new_chat_member.first_name}</strong> \n<strong>Это ссылка на Google: https://www.google.ru/</strong>`

			bot.sendMessage(id, html, {
				parse_mode: 'HTML'
			})
    }
})

