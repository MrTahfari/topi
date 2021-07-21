const Discord = require("discord.js");
const badges = require("discord-badges"); // Requiring our package.


module.exports = {
  name: "badge",
   category: "main",
   description: "",
   async execute(client, message, args) {

    const user = client.users.cache.get(message.author.id); // Define user
    badges
      .badges(user) // Send user to the package
      .then((response) => {
        // return the user badges
        let result = "";
        for (let i = 0; i < response.length; i++) {
          result += `**${response[i].name} - ** ${response[i].url}\n`;
        }
        return message.channel.send(result);
      })
      .catch((e) => {
        // if no badges return error
        console.log(e);
        return message.channel.send("you dont have no badges..");
      });
  }
}
