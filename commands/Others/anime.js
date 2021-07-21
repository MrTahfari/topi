const Discord = require("discord.js");
const Kitsu = require("kitsu.js");
const kitsu = new Kitsu();

module.exports = {
  name: "anime",
  description: "search up fav anime",

 async execute(client, message, args) {
    if (!args[0]) return message.channel.send(`**${message.author.username}**, please enter what your looking..`);

    const search = args.join(" ");

    kitsu.searchAnime(search).then(async result => {
      const anime = result[0];

      if (result.length === 0) return message.channel.send(` no results **${search}**.`);

      const info = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`**${anime.titles.romaji ? anime.titles.romaji : "Unknown"}**`)
        .setURL(anime.url)
        .setDescription(`**INFO**\n> ${anime.synopsis.replace(/<[^>]*>/g, "").split("\n")[0]}`)
        .setThumbnail(anime.posterImage.original)
        .addField("**ENGLISH**", `${anime.titles.english ? anime.titles.english : "Unknown"}`, true)
        .addField("**EPISODES**", `${anime.episodeCount ? anime.episodeCount : "Unknown"}`, true)
      return message.channel.send(info);
    })
  }
}
