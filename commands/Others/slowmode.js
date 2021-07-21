const discord = require('discord.js')

module.exports = {
  name: "slowmode",
  description: "Adds slowmode to the current channel",
  async execute(client, message, args) {
    let time = args[0]
    if (!time) return message.channel.send("please specify how many seconds..")
    if (isNaN(time)) return message.channel.send(":( please specify what how long you want the slowmode..")

    message.channel.setRateLimitPerUser(time, 'no reason seen..')

    message.channel.send(`slowmode is now setting up ${time} seconds..`)
  }
}

