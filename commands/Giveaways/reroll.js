// require Nuggies
const Nuggies = require('nuggies');
const  { MessageButton } = require('discord-buttons');
module.exports = {
  name: "reroll",
  description: "rewrolling gw",
  
   async execute(client, message, args) {
    if (!args[0]) return message.reply('oops, you have not mentioned a channels **ID** so yea...', { allowedMentions: { repliedUser: false } });
    let win;
    try {
        win = await Nuggies.giveaways.reroll(client, args[0]);
    }
    catch (err) {
        console.log(err);
        return message.channel.send('i was unable to see a giveaways using this message **ID');
    }
    if (!win[0]) return message.channel.send('There are not enough people in the giveaway!');
    message.channel.send(`**REROLLED** <@${win}> is the new winner :wink:`, { component: new MessageButton().setLabel('GIVEAWAY').setURL(`https://discord.com/channels/${message.guild.id}/${message.channel.id}/${args[0]}`).setStyle('url') });
}
}
