const fs = require("fs")
const fetch = require("node-fetch")
require('discord-reply');
const express = require("express")
const Levels = require('discord-xp')
const app = express()
let prefix = (`-`)

app.get("/", (req, res) => {
  res.send("hello hell!")
})
// wait lemme check
app.listen(3000, () => {
  console.log("Whatever you want to put here")
})


const Discord = require("discord.js")
const client = new Discord.Client()
settings = {
  prefix: "-"
};

// Help command bruh what

const jsonfile = require('jsonfile');


client.commands = new Discord.Collection();

const Buttons = require("discord-buttons")
Buttons(client)

fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

  for (const file of commands) {
    const command = require(`./commands/${dirs}/${file}`);
    console.log(`Loading command ${file}`);
    client.commands.set(command.name, command); // client.commands is a map object
  };
});

/*
let CmdName = client.commands.map() // i guess



*/

client.on("ready", () => {
  console.log("topi is online");

  // Multuple Statuses
  client.user.setActivity( '-help | prefix is -', { type: 'PLAYING' })
})




//the heck is this , is this a msg event for cmds
client.on("message", async message => {

  chkLevel(message);

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

  if (cmd) cmd.execute(client, message, args, command, Discord, prefix);
})


async function chkLevel(message) {
  if (!message.guild) return;
  if (message.author.bot) return;

  const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(`congratulations, you are now rank **${user.level}** keep going! <a:Gift:864892213711339561>`);

}
}

client.login(process.env.TOKEN)


