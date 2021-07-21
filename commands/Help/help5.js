const { MessageEmbed } = require("discord.js");
require('discord-reply')

module.exports = {
  name: "helpeco",
  description: "Displays avaliable bot commands",
  async execute(client, message, args) {

    const embed = new MessageEmbed()
      .setTitle(":mailbox: needs help? welp Topi prefix starts with `-`")
      .setThumbnail("https://cdn.discordapp.com/attachments/863470096851664896/863765912133304320/discord-avatar-512-54IHF.png")
      .setThumbnail('https://cdn.discordapp.com/attachments/864917364100562975/864980806983221268/spin.gif')
      .addFields(
        { name: '-balance', value: 'shows users balance' },
        { name: '-beg', value: 'beg so u get money (dont be so thirsty)' },
        { name: '-give', value: 'give ppl all ur money (dont go broke)' },
)

      .setColor("RED")
      
    message.lineReplyNoMention(embed).then(e => {
      e.react('<a:Ticky:863790219428888596>')
    })
  }
}