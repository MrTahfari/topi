const Discord = require("discord.js")
require('discord-reply')
module.exports = {
  name: "showhole",
  description: 'For the memes',
  async execute(client, message, args) {
    let user = message.mentions.users.first() || message.author;
    let av = user.displayAvatarURL({ dynamic: false, format: 'png' })
    let img = `https://api.popcatdev.repl.co/uncover?image=${av}`;
    let em = new Discord.MessageEmbed()
      .setImage(img)
      .setColor("RED")
    message.lineReplyNoMention(em)
  }
}