const { MessageEmbed } = require("discord.js");
const { Spawn } = require("pokecord");

module.exports = {
  name: "pokemon",
  description: "Guess the pokemon!",
  aliases: ['pk'],
  usage: "-pokemon",
  async execute(client, message, args) {

    const pokemon = await Spawn().catch(e => {});
    if (!pokemon) return message.channel.send("uhh something went wrong...");
    const filter = m => m.author.id === message.author.id;

    const embed = new MessageEmbed()
            .setTitle('who is this pokemon?')
        .setColor("RED")
        .setImage(pokemon.imageURL);
    console.log(`${message.author.username} from ${message.guild.name} wants to guess ${pokemon.name}`)
    await message.channel.send(embed);

    message.channel.awaitMessages(filter, {
        max: 1,
        error: ["time"],
        time: 10000
    })
    .then(collected => {
        const m = collected.first();
        if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.channel.send(`<a:Nono:864982479631155231> sorry, your answer is wrong, your guess was **${pokemon.name}**.`);
        return message.channel.send(`<a:Ticky:863790219428888596> congradulations! your answer is correct..`);
    })
    .catch(() => {
        message.channel.send(`<a:Nono:864982479631155231> you didnt answer quick enough, your guess was **${pokemon.name}**`);
    });

}
};