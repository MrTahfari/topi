const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "hack",
    description: "hack a user",
    async execute(client, message, args, Discord) {

        function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

        const taggedUser = message.mentions.users.first();
        if (!taggedUser) {
            return message.channel.send('please mention somebody to  start hacking..');
        }
        message.channel.send(`Hacking  ${taggedUser}...`);
        message.channel.send('Status: ■□□□□□□□□□□ 0%')
        .then(msg => {
            wait(93);
            msg.edit('progress ■■□□□□□□□□□ 7%');
            wait(100);
            msg.edit('progress ■■■□□□□□□□□ 8%');
            wait(20)
            msg.edit('progress ■■□□□□□□□□□ 9%');
            wait(90);
            msg.edit('progress ■■■□□□□□□□□ 12%');
            wait(60);
            msg.edit('progress ■■■■□□□□□□ 14%');
            wait(60);
            msg.edit('progress ■■■□□□□□□□□ 17%');
            wait(40);
            msg.edit('progress ■■□□□□□□□□□ 20%');
            wait(10);
            msg.edit('progress ■■■□□□□□□□□ 21%');
            wait(12);
            msg.edit('progress ■■■■□□□□□□□ 22%');
            wait(13);
            msg.edit('progress ■■■■■□□□□□□ 24%');
            wait(80);
            msg.edit('progress ■■■■□□□□□□ 29%');
            wait(80);
            msg.edit('progress ■■■□□□□□□□□ 31%');
            wait(80);
            msg.edit('progress ■■■■□□□□□□□ 36%');
            wait(40);
            msg.edit('progress ■■■■■□□□□□□ 41%');
            wait(60);
            msg.edit('progress ■■■■□□□□□□□ 47%');
            wait(50);
            msg.edit('progress ■■■■■■□□□□□ 53%');
            wait(35);
            msg.edit('progress ■■■■■■■□□□□ 58%');
            wait(80);
            msg.edit('progress ■■■■■■□□□□□ 66%');
            wait(60);
            msg.edit('progress ■■■■■□□□□□□ 74%');
            wait(20);
            msg.edit('progress ■■■■■□□□□□□ 79%');
            wait(83);
            msg.edit('progress ■■■■■■□□□□ 80%');
            wait(50);
            msg.edit('progress ■■■■■■■□□□ 85%');
            wait(14);
            msg.edit('progress ■■■■■■■■■□□ 93%');
            wait(70);
            msg.edit('progress ■■■■■■■■■■□ 97%');
            wait(90);
            msg.edit('progress ■■■■■■■■■■■ 100%').then(() => {
                message.channel.send(`successfully **HACKED** ${taggedUser}..`)
            })
        })
    }
}