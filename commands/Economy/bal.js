const { MessageEmbed } = require("discord.js")
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports = {
  name: "balance",
  description: "Lists all avaliable bot commands",
  async execute(client, message, args) {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]);
      if (user) user = user.user;
    } else if (!args[0]) {
      user = message.author;
    }

    let result = await cs.balance({
      user: user,
      guild: message.guild
    });
    const embed = new MessageEmbed()
.setAuthor(`${user.tag}`)
.setColor('RED')
 .setDescription(`
you have **$${result.wallet}** inside your bag and **$${result.bank}** inside your storage`)
            message.channel.send(embed)
  }
    }
  