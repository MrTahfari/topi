const Levels = require('discord-xp')
const { MessageEmbed } = require("discord.js");
require('discord-reply')

Levels.setURL("mongodb+srv://epicuser:epicuser@cluster0.h78gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


module.exports = {
  name: "rank",
  description: "Returns your current level",
  aliases: ['level', 'r'],
  async execute(client, message, args) {

    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(`<a:Ticky:863790219428888596> your rank is currently **${user.level}**`)
}
}