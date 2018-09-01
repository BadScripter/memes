let Discord = require("discord.js");
let fs = require("fs");

module.exports.run = async(bot,message,args) => {
	let cmd = args[0];
	if(!cmd) return message.channel.send("You need to put `new` after ticket or `close` if you are in the ticket!");
	if(cmd === "new"){
		let meme = false
		message.guild.channels.forEach(channel => {
			if(channel.name.split("-")[0] === "ticket"){
				if(channel.name.split("-")[2] === message.member.id){ 
					meme = true
					return message.channel.send("You already have opened a ticket!");
				}
			}
		});
		if(meme === true){
			meme = false
			return;
		}
		message.guild.createChannel(`ticket-${message.member.user.username}-${message.member.id}`, 'text')
		.then(channel => {
			channel.setParent("476606380489310208");
			channel.setTopic(`${message.member.user.username} has an issue.`);
			channel.overwritePermissions(message.guild.roles.find("name", "@everyone"), {VIEW_CHANNEL: false});
			channel.overwritePermissions(message.author, {SEND_MESSAGES: true, VIEW_CHANNEL: true});
			channel.overwritePermissions(message.guild.roles.find("name", "Support"), {VIEW_CHANNEL: true, SEND_MESSAGES: true});
			setTimeout(function(){
				return channel.send("@everyone A ticket has been made.", {disableEveryone: false});
			}, 2000);
		});	
	}
	if(cmd === "close"){
		if(message.channel.name.split("-")[0] === "ticket"){
			message.channel.delete();
		}else{
			return;
		}
	}
}

module.exports.help = {
	name: "ticket"
}