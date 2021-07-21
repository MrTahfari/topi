const { MessageEmbed } = require("discord.js")
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports = {
  name: "hourly",
  description: "Lists all avaliable bot commands",
  async execute(client, message, args) {
    let result = await cs.hourly({
        user: message.author,
        guild: message.guild,
        amount: 100,

    });
    if (result.error) return message.channel.send(`you already have your hourly rewars, please wait ${result.time}`);
    const user = message.member;
     const embed = new MessageEmbed()
.setAuthor(`${user.user.tag}`,)
.setColor('RED')
    .setDescription(`welp you hourly rewards are here, you got **$${result.amount}**`)
            message.channel.send(embed)
}
}
