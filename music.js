const fs = require('fs');

module.exports = async function(message, args) {
	if (message.member.voiceChannel) {
		const connection = await message.member.voiceChannel.join();

		let dispatcher;

		if (args.length === 1) {
			//randomize
			const files = fs.readdirSync('./sounds/');
			const file = files[Math.floor(Math.random()*files.length)];
			dispatcher = connection.playFile(`./sounds/${file}`);
		} else {
			dispatcher = connection.playFile(`./sounds/${args[1]}.mp3`);
		}

		dispatcher.on('end', () => {
			console.log('Finished playing moosic');
			dispatcher.destroy();
			message.member.voiceChannel.leave();
		});

	} else {
		message.reply('Fortnite bad, Minecraft good. Also you need to be in a vc to use this.', {files: ["./images/good.png"]});
	}
}
