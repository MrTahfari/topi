const { Message, MessageEmbed } = require("discord.js");

const Discord = require("discord.js");

const moment = require("moment");
const fetch = require("node-fetch");

module.exports = {
  name: 'screenshots',
  aliases: ['ss'],
  description: 'Takes a screenshot of any webpage!',
  async execute(client, message, args) {
    if (message.content.toLowerCase().includes("nothing") || message.content.toLowerCase().includes("nothing") || message.content.toLowerCase().includes("nothing") || message.content.toLowerCase().includes("nothing")) return message.channel.send("not allowed to search 18+ websites, unless your that age :smirk:")
    else {
      const user = message.author.tag
      const urls = args[0];
      if (!urls)
        return message.channel
          .send(`${user}, please provide a URL..`)

      if (urls.length < 8)
        return message
          .reply(
            "welp URL is very short, go again?"
          )
          .then(m => m.delete({ timeout: 9000 }).catch(e => { }));

      const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
      try {
        const msg = await message.channel.send('please wait, this may take up to 10 seconds')
        msg.delete({ timeout: 5000 })
        const { body } = await fetch(
          `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
        );

        return message.channel.send(
          `okay gathering a screenshots from requested website..`,
          {
            files: [{ attachment: body, name: "Screenshot.png" }]
          }
        );

      } catch (err) {
        if (err.status === 404)
          return message.channel
            .send("it seems i cant finds any results, not the right URL?")
            .then(m => m.delete({ timeout: 14000 }).catch(e => { }));
        return message
          .reply(`oops, i ran into an error - ${err.message} go again? `)

      };
    }
  }
}
