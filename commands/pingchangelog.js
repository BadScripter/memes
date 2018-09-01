const Discord = require("discord.js");
const fs = require("fs");
var ROLED = false

module.exports.run = async(bot,message,args) => {
	message.member.roles.forEach(function(role){
		if(role.name == "changelog"){
			message.member.removeRole("476188856513986560");
			let Embed = new Discord.RichEmbed()
			.setAuthor("Eclipse Bot", bot.user.displayAvatarURL)
			.addField("Success! :white_check_mark:", "The role has been removed.")
			.setColor("#00ff00")
			.setFooter("Made by: LegoHacksAreTheBest#1423 | ID: 271495959643422731");
			ROLED = true
			return message.channel.send(Embed);
		}
	});
	if(ROLED === true){
		ROLED = false; 
		return;
	}

	message.member.addRole("476188856513986560");
	let Embed = new Discord.RichEmbed()
	.setAuthor("Eclipse Bot", bot.user.displayAvatarURL)
	.addField("Success! :white_check_mark:", "The role has been added.")
	.setColor("#00ff00")
	.setFooter("Made by: LegoHacksAreTheBest#1423 | ID: 271495959643422731");
	return message.channel.send(Embed);
}


module.exports.help = {
	name: "pingchangelog"
}