const { MessageEmbed } = require("discord.js")
const CurrencySystem = require("currency-system");
    const cs = new CurrencySystem;
    module.exports = {
      name:"give",
      description: "give money",
      async execute(client, message, args) {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]);
            if (user) user = user.user;;
        } else {
            user.id = "1"
        }

        if (user.bot || user === client.user) return message.channel.send("dumbass i cant give money to a **BOT** :rofl:");
        if (!client.users.cache.get(user.id) || !user) return message.channel.send('oops, please mention somebody you wanna give..');

        let amount = args[1];
        if (!amount) return message.channel.send("please enter how muhc money you gonna give..");
        if (amount.includes("-")) return message.channel.send("you cant give negative money..")
        let money = parseInt(amount);

        let result = await cs.transferMoney({
            user: message.author,
            user2: user,
            guild: message.guild,
            amount: money
        });
        if (result.error) return message.channel.send(`you dont even have enough money..`);
     const embed = new MessageEmbed()
.setAuthor(`${user.tag}`)
.setColor('RED')
    .setDescription(`you **$${result.money}** to **${result.user2.username}**`)
            message.channel.send(embed)
   
    }
    }
