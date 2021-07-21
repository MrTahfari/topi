const Discord = require("discord.js")
module.exports = {
  name: "sudo",
  description: "Makes a webhook to impersonate someone",
  usage: "sudo <@user> <message>",
  async execute(client, message, args) {
    if (!message.member.hasPermission("MANAGE_WEBHOOKS")) {
            return message.channel.send(`you dont have any permissions..`)}
    message.delete();
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("please specify somebody..");
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id
    });
    await webhook.send(args.slice(1).join(" ")).then(() => {
      webhook.delete();
    });
  }
};

