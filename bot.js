const Telegraf = require('telegraf');

const bot = new Telegraf('1175976203:AAFYTxArtWiAbbYcavwr2rBZD4fd-3svuzI');

const helpMessage = `Say something to me 
/start - start the bot
/help - help
/settings - settings`;
// Start When The Use Invoke Or Select Start
bot.start(ctx => {
	ctx.reply('Hi I am Your Bot  ');
	ctx.reply(helpMessage);
});
bot.help(ctx => {
	ctx.reply('Is there a Problem');
});
bot.settings(ctx => {
	ctx.reply('You have Entered setting Command');
});
bot.hears('hi', ctx => {
	ctx.reply('Hi ' + ctx.from.first_name);
});
bot.hears('cat', ctx => {
	ctx.reply('Meow ' + ctx.from.first_name);
});
bot.launch();
