const Discord = require("discord.js")

module.exports = {
  name: "kick",
  description: "Kicks a user",
  usage: ['-kick <@user>'],
  async execute(client, message, args) {

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("you dont have any permissions..")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!member) return message.channel.send("please specify who you wanna **KICK**");
    let reason = args.slice(1).join(' ');
    if (member.roles.highest.position > message.member.roles.highest.position) return message.channel.send("you cant ban people who is powerful than you..")
    if (!reason) { reason = 'no reason shown..' }
    member.kick(reason)
    message.channel.send(`**KICKED** ${member.user.tag}${reason}`)
  }
}