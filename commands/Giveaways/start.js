// require Nuggies
const Nuggies = require('nuggies');
const ms = require('ms')
module.exports = {
  name: "start",
  description: "",
  
async execute(client, message, args) {
	let requirements;
	let prize;
	if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply('you dont have permissions..');
	if (!args[1]) return message.reply('provide the options, example **{time} {winners} {req | optional} {prize}**');
	if (isNaN(parseInt((args[1])))) return message.reply(' provide some number of winners..', { allowedMentions: { repliedUser: false } });
	if (!args[1]) return message.reply('provide some time for this giveaway..', { allowedMentions: { repliedUser: false } });
	if (!ms(args[0])) return message.reply('provide how long, - example **1m 1w**', { allowedMentions: { repliedUser: false } });
	if (!args.slice(2).join(' ')) return message.reply('provide the prize', { allowedMentions: { repliedUser: false } });
	const host = message.author.id;
	const winners = parseInt(args[1]);
	if (args[2].endsWith('[role]')) {
		const role = args[2].replace('[role]', '');
		const check = message.guild.roles.cache.get(role);
		if (!check) return message.channel.send('please provide some roles..');
		requirements = { enabled: true, roles: [role] };
		prize = args.slice(3).join(' ');
	}
	else {
		prize = args.slice(2).join(' ');
		requirements = { enabled: false };
	}

	Nuggies.giveaways.create({
		message: message,
		prize: prize,
		host: host,
		winners: winners,
		endAfter: args[0],
		requirements: requirements,
		channel: message.channel.id,
	});
}
}
