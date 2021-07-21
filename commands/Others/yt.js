const Discord = require("discord.js");
const together = require("discord-together")

module.exports = {
  name: "youtube",
  description: "do yt together",

  async execute(client, message, args) {

    if (message.member.voice.channel) {
      dt.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
        return message.channel.send(`${invite.code}`);
      })
}
  }
}