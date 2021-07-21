const { MessageEmbed } = require("discord.js")
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports = {
  name: "beg",
  description: "Lists all avaliable bot commands",
  async execute(client, message, args) {
    let result = await cs.beg({
        user: message.author,
        guild: message.guild,
        minAmount: 100,
        maxAmount: 400

    });
    if (result.error) return message.channel.send(`❌ you have alr begged recently please try again soon until ${result.time}`);
    const user = message.member;
     const embed = new MessageEmbed()
.setAuthor(`${user.user.tag}`,)
.setColor('RED')
    .setDescription(`you kept begging now you got **$${result.amount}**`)
            message.channel.send(embed)
}
}
