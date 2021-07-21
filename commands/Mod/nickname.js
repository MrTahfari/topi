const discord = require('discord.js')

module.exports = {
  name: "nickname",
  description: "Changes a users nickname",
  aliases: ['nick'],
  usage: ['-nickname <@user> newNick'],
  async execute(Client, message, args,) {

    let user = message.mentions.users.first()
    if (!user) return message.lineReplyNoMention("please mention somebody you wanna change nickname..")

    let nickname = args.slice(1).join(" ") // =nickname (user) (nickname kdjv)
    if (!nickname) return message.reply("please specify some nickname..")

    let member = message.guild.members.cache.get(user.id);
    await member.setNickname(nickname);

    const embed = new discord.MessageEmbed()
      .setTitle("✅ Done")
      .setDescription(`successfully changed ${user.tag}'s nickname to ${nickname}`)
      .setColor('RED')
   message.lineReplyNoMention(embed);
  }
}