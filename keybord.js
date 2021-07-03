

bot.sendMessage(msg.chat.id,'keybord',{
	reply_markup: {
		keyboard: [
		['1'],
		['2'],
		['3']
		]
	}
})

//id чата, номер сообщения
bot.sendMessage(msg.chat.id, `Номер сообщения ${msg.message_id}`)
setTimeout(() => {bot.deleteMessage(msg.chat.id, msg.message_id+1)},4000)


//Отправить фотографию
//Это всё промис
bot.sendMessage(id, `Фотография загружается`)

bot.sendPhoto(id, './debil.jpg', {
	caption: 'Дебилушка :3'
}).then( ()=> {
	bot.deleteMessage(msg.chat.id, msg.message_id+1)
})

//Отправить документ
bot.sendMessage(msg.chat.id, `Документ загружается`)

bot.sendDocument(msg.chat.id, './debil.xlsx').then( ()=> {
	bot.deleteMessage(msg.chat.id, msg.message_id+1)
})


//Отправить аудио
bot.sendAudio(msg.chat.id, './soule.mp3')











//Работа с inline клавиатурой
bot.on('callback_query', query => {
	const { chat, message_id, text } = query.message

	//Тут обрабатываем query.data через switch
});

//Переслать сообщение
//куда, откуда, что
bot.forwardMessage(chat.id, chat.id, message_id)

//Ответить на сообщение
bot.sendMessage(chat.id, 'Ответ', {
	reply_to_message_id: message_id
})

//Удалить
bot.deleteMessage(chat.id, message_id)

//Редактировать
bot.editMessageText(`${text} (Заредактированно)`,{
	chat_id: chat.id,
	message_id: message_id,
	reply_markup: { inline_keyboard }
})