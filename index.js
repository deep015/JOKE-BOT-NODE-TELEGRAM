const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const axios = require('axios')
dotenv.config();

// Log the token to ensure it's loading correctly
console.log("Loaded Token:", process.env.TELEGRAM_TOKEN);

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.on('message', (option) => {
    console.log("Message received:", option);



});

bot.onText(/\/joke/, async(option) => {

    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    console.log(response.data)
    const setup = response.data.setup;
    const punchline = response.data.punchline;

    bot.sendMessage(option.chat.id, setup + " , " + punchline);
})