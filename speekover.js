module.exports = {
	shutUserUp: function(member, speaking) {
		if (speaking) {
			member.send('Hi im annoying', {files: ['./images/frog.png']});
		}
	},
	putotherstuffherelater: 'please',
}
