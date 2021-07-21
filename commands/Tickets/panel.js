module.exports = {
  name: "panel",
  description: "open a ticket!",
  async execute(client, message, args, cmd, Discord) {
    message.delete();

    const channel = await message.guild.channels.create(`${message.author.tag}`); // Its this
    
    channel.setParent("864509910380576768");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send("please wait, support will be here soon..");

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("i ran into an error while reciving emojis");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("now deleting support panel..");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    message.channel
      .send(`please go to ${channel} so support can be with you..`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 7000);
      })
      .catch((err) => {
        throw err;
      });
  },
};
