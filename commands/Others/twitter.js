const Discord = require("discord.js")
const request = require("node-superfetch") 
const {stripIndents} = require("common-tags") 
const twitter = require("twitter-api.js") 
module.exports = {
  name: "twitter",
  description: "Gets information about a certain twitter user",
  usage: "-twitter <twitterUsername>",
  async execute(client, message, args) {
    let user = args[0]
    if(!user) return message.channel.send("please specify what twitter name i shoulds search up..")
    const yesno = {
            true: "Yes",
            false: "No"
        }
    try {
      const body = await twitter.users(user)
            const url = body.url ? `[GO](${body.url})` : "None";
      const tweet = new Discord.MessageEmbed()
      .setColor("RED")
            .setTitle(body.screen_name)
            .setURL('https://twitter.com/' + body.screen_name)
      .addField('Name', body.screen_name, true)
            .addField('FOLLOWERS', body.followers_count, true)
            .addField('FRIENDS', body.friends_count, true)
            .addField('INFO', body.description ? body.description : "no description is shown..")
      .setThumbnail(body.profile_image_url_https.replace('_normal', ''))

      message.channel.send(tweet)
    } catch (e) {
      if(e.status === 403) return message.channel.send("sorry, this is a private accounts so no things shown..")
      else if(e.status === 404) return message.channel.send("**NOT FOUND**")
      else return message.channel.send(`it seems i have ran into an error - \`${e.message}\``)
    }
  }
}