const discord = require("discord.js")

module.exports = {
  name: "servericon",
  description: "Get avatar of the server",
  async execute(client, message, args) {

    let embed = new discord.MessageEmbed()

    embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
    embed.setColor("RED")

    message.channel.send(embed)

  }
}