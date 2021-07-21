const Discord = require('discord.js')
const fetch = require("node-fetch")
module.exports = {
    name: "color",
    aliases: ["color","clr"],
    description: 'color command',
    async run (client, message, args)  {
        let color = args[0]
        if (color.includes("#")) {
            color = args[0].split("#")[1]
        }
         const url = (`https://api.popcatdev.repl.co/color/${color}`)
         let json
         try{
            json = await fetch(url).then(res => res.json())
        }
        catch(e) {
            return message.reply('i ran into an error while getting info on colors')
        }
        if (json.error) return message.reply("it seems this is a **INVALID** color..")
             const embed = new Discord.MessageEmbed()
             .setTitle("INFO")
             .addField('NAME', json.name, true)
             .addField("HEX", json.hex, true)
             .addField("RGB", json.rgb, true)
             .addField("SHADE", json.brightened, true)
             .setThumbnail(json.color_image)
             .setColor(json.hex)
             message.channel.send(embed)
      }
};