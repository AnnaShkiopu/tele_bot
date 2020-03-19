process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');

const token = '1005625750:AAH9VYFZ-HqxYD9MHf6s25twUiqzZagLWCY';

const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/start/, (msg, match) => {
    var message = 'Привет ' + msg.chat.last_name + ' ' + msg.chat.first_name;
    bot.sendMessage(msg.chat.id, message);
});

var options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '😁👍🏻', callback_data: 'Так держать!' },
            { text: '😔👎🏻', callback_data: 'Все равно Улыбнись!' }]
          ]
        })
    };

bot.on('callback_query', query => {
    bot.sendMessage(query.message.chat.id, query.data)
});    

bot.onText(/\/start/, function (msg, match) {
bot.sendMessage(msg.chat.id, 'Как настроение?', options);});

bot.on('message', (message) => {
    const chatId = message.chat.id;
  
    bot.sendMessage(chatId, 'Cообщение получил! Спасибо!');
  });




