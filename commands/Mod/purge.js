const Discord = require("discord.js")
module.exports = {
        name: "purge",
        description: "Deletes messages from a channel",
     async execute(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you dont have **permissions**")
        if (isNaN(args[0]))
            return message.channel.send('please specify an ammount so i can prune :)');

        if (args[0] > 100)
            return message.channel.send("please specify a number more than 100..");

        if (args[0] < 1)
            return message.channel.send("please specify a number less than 1..");

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(``).then(msg => msg.delete({ timeout: 2000 }))).catch(() => null)
    }
}