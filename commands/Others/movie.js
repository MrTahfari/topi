const discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
name: "movie",
  description: "Get the information about series and movie",
  category: "info",
  usage: "imdb <name>",
  async execute(client, message, args, color) {
    
    if(!args.length) {
      return message.channel.send("please give the movie name or series...")
    }
    
    const imob = new imdb.Client({apiKey: "5e36f0db"}) //You need to paste you imdb api
    
    let movie = await imob.get({'name': args.join(" ")})
    
    let embed = new discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("RED")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    
    
    
    message.channel.send(embed)
    
    
    
  }

}