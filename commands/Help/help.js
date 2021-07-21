const { MessageEmbed } = require("discord.js");
require('discord-reply')

module.exports = {
  name: "help",
  description: "Lists all avaliable bot commands",
  async execute(client, message, args) {

    const embed = new MessageEmbed()
      .setTitle(":mailbox: needs help? welp Topi prefix starts with `-`")
      .setThumbnail("https://cdn.discordapp.com/attachments/863470096851664896/863765912133304320/discord-avatar-512-54IHF.png")
      .setThumbnail('https://cdn.discordapp.com/attachments/864917364100562975/864980806983221268/spin.gif')
      .addFields(
        { name: '-showhole', value: 'why is it named showhole? just an joke' },
        { name: '-sudo', value: 'what does this do? just turns messages into person webhooks' },
        { name: '-addemojis', value: 'woah whats this do? haha adds emojis' },
        { name: '-avatar', value: 'wanna se your profile avatar? use this' },
        { name: '-help', value: 'shows Topi every commands available' },
        { name: '-slowmode', value: 'sets the slowmode for your discord server' },
        { name: '-servericon', value: 'shows icon for your server guilds' },
        { name: '-twitter', value: 'searchs any twitter accounts' },
        { name: '-screenshots', value: 'takes screenshots of any website (maybe porn :smirk:)' }
      )

      .setColor("RED")
      
    message.lineReplyNoMention(embed).then(e => {
      e.react('<a:Ticky:863790219428888596>')
    })
  }
}