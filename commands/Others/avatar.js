const Discord = require('discord.js');


module.exports = {
  name: "avatar",
  aliases: ['a'],
  description: "Returns authors/mentioned user's avatar",
  usage: "-avatar [@user]",
  async execute(bot, message, args) {

    let user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;
    let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.lineReplyNoMention(embed);
  }

}
