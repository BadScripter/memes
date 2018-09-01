const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot,message,args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have permissions to use this command!");
	let role = message.guild.roles.get('476188856513986560')
	if(role.mentionable === true){
		role.mentionable = false;
		return message.channel.send("off");
	}
	if(role.mentionable === false){
		role.mentionable = true;
		return message.channel.send("on");
	}
}

module.exports.help = {
	name: "mention"
}