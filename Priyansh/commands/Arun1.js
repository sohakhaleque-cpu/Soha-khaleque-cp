 const fs = require("fs");
module.exports.config = {
	name: "Arun",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Khanzadi") ||
     react.includes("Khanzadi") || 
react.includes("arun")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝐀𝐫𝐮𝐧 𝐊𝐮𝐦𝐚𝐫✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ https://youtube.com/@MirryKal ✦ \n𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗚𝗿𝗼𝘂𝗽 \n 𝗞𝗮𝗮𝗹 𝗟𝗼𝗸 😋https://www.facebook.com/groups/207371140648761/?ref=share_group_link`",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
