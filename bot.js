const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const music = require('./music.js');
const speakover = require('./speekover.js');

const prefix = 'VC';

client.on('message', async message => {
	if (!message.guild) return;

	//if (!message.content.startsWith(prefix) || message.author.bot) return;

	if(message.content == 'green'){
		message.channel.sendCode('css', 'I am a green thing')
	}

	const args = message.content.slice(prefix.length).split(' ');

	console.log(args);

	if (args[0] === 'play') {
		music(message, args);
	}
});

client.on('guildMemberSpeaking', speakover.shutUserUp);

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);
