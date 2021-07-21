// require Nuggies
const Nuggies = require('nuggies');
module.exports = {
  name: "end",
  description: "ending gw",
  
   async execute(client, message, args) {
    if (!args[0]) return message.reply('sorry, you have to mention a channel **ID** so i can ends this giveaway..', { allowedMentions: { repliedUser: false } });
    try {
        const data = await Nuggies.giveaways.getByMessageID(args[0]);
		const msg = await client.guilds.cache.get(data.guildID).channels.cache.get(data.channelID).messages.fetch(args[0]);
		await Nuggies.giveaways.end(msg, data, msg);
    }
    catch (err) {
        console.log(err);
        return message.channel.send('i was unable to looks for a giveaways...');
    }
}
}