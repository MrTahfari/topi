const { MessageEmbed } = require("discord.js");
require('discord-reply')

module.exports = {
  name: "helpgw",
  description: "Displays avaliable bot commands",
  async execute(client, message, args) {

    const embed = new MessageEmbed()
      .setTitle(":mailbox: needs help? welp Topi prefix starts with `-`")
      .setThumbnail("https://cdn.discordapp.com/attachments/863470096851664896/863765912133304320/discord-avatar-512-54IHF.png")
      .setThumbnail('https://cdn.discordapp.com/attachments/864917364100562975/864980806983221268/spin.gif')
      .addFields(
        { name: '-start', value: 'you can start some giveaways' },
        { name: '-end', value: 'end your giveaways you have made' },
        { name: '-reroll', value: 'you can reroll your giveaways' },
)

      .setColor("RED")
      
    message.lineReplyNoMention(embed).then(e => {
      e.react('<a:Ticky:863790219428888596>')
    })
  }
}