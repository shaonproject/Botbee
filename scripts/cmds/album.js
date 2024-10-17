const axios = require("axios");

module.exports.config = {
  name: "album",
  aliases: ["Album", "albam" ],
  version: "2.0.2",
  role: 0,
  author: "♡ Nazrul ♡",
  category: "Album Video",
  description: "Get Video From Album list",
  countDowns: 2,
  guide: {
    en: "{p}{n} or type [album]"
  }
};

run = async ({ api, massage, args, Reply }) => {
  if (!args[0]) {
    const albumMsg = "«------•I|[💫ミ★  𝐀𝐥𝐛𝐮𝐦 𝐕𝐢𝐝𝐞𝐨 𝐋𝐢𝐬𝐭  ★彡💫]|I{•------»\n⊰᯽⊱┈──╌❊🔰𝐍𝐚𝐳𝐫𝐮𝐥🔰❊╌──┈⊰᯽⊱\n𝐍𝐨.𝟎 ♡ 𝐀𝐭𝐭𝐢𝐭𝐮d𝐞 𝗩𝗶𝗱𝗲𝗼'𝘀 😎💫 \n𝐍𝐨.𝟏 ♡ 𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗶𝗱𝗲𝗼'𝘀 🥰💫 \n𝐍𝐨.𝟐 ♡ 𝗡𝗮𝘁𝘂𝗿𝗮𝗹 𝘃𝗶𝗱𝗲𝗼'𝘀 😽💫 \n𝐍𝐨.𝟑 ♡ 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼'𝘀 🕋💫 \n𝐍𝐨.𝟒 ♡ 𝗟𝗼𝘃𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 ❤💫\n𝐍𝐨.𝟓  ♡ 𝗦𝘂𝗿𝗮 𝗩𝗶𝗱𝗲𝗼'𝘀 😊 💫\n𝐍𝐨.𝟔 ♡ 𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗶𝗱𝗲𝗼'𝘀 🤔💫\n𝐍𝐨.𝟕 ♡ 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 😈💫\n𝐍𝐨.𝟖 ♡ 𝗦𝗮𝗱 𝗩𝗶𝗱𝗲𝗼'𝘀 🥹💫\n𝐍𝐨.𝟗 ♡ 𝗔𝗻𝗶𝗺𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🤠💫\n𝐍𝐨.𝟏𝟎 ♡ 𝗦𝗵𝗼𝗿𝘁 𝗠𝗶𝘅 𝗩𝗶𝗱𝗲𝗼'𝘀 🥳💫 \n𝐍𝐨.𝟏𝟏 ♡ 𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🧡💫 \n𝐍𝐨.𝟏𝟐 ♡ 𝗖𝘂𝘁𝗲 𝗕𝗮𝗯𝘆 𝗩𝗶𝗱𝗲𝗼'𝘀 🤫💫 \n𝐍𝐨.𝟏𝟑 ♡ 𝗧𝗿𝘂𝗲 𝗟𝗶𝗻𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🙂💫\n\n«------•}I| 〚 𝐇𝐨𝐭 & 𝐒𝐞𝐱𝐮𝐚𝐥 & 𝐎𝐭𝐡𝐞𝐫 𝐕𝐢𝐝𝐞𝐨𝐬 〛 |I{•------»\n⊰᯽⊱┈──╌❊「 𝟏𝟖+ 」❊╌──┈⊰᯽⊱\n𝐍𝐨.𝟏𝟒 ♡ 𝑯𝒐𝒕 𝑽𝒊𝒅𝒆𝒐'𝒔 😐💫 \n𝐍𝐨.𝟏𝟓 ♡ 𝑺𝟑𝑿 𝑽𝒊𝒅𝒆𝒐𝒔 🥵💫 \n𝐍𝐨.𝟏𝟔 ♡ 𝑯𝒐𝒓𝒏𝒚 𝑽𝒊𝒅𝒆𝒐'𝒔 😶💫\n𝐍𝐨.𝟏𝟕 ♡ 𝑰𝒕𝒆𝒎 𝒗𝒊𝒅𝒆𝒐 😷💫\n\n✶⊶⊷⊶⊷❍ ❣︵𝑨𝒍𝒍 𝑽𝒊𝒅𝒆𝒐𝒔 𝑯𝒆𝒓𝒆︵❣❍⊶⊷⊶⊷✶\n\n𝑹𝒆𝒑𝒍𝒚 𝑻𝒉𝒊𝒔 𝑴𝒆𝒔𝒔𝒔𝒂𝒈𝒆 𝑾𝒊𝒕𝒉 𝒋𝒖𝒔𝒕 𝑵𝒖𝒎𝒃𝒆𝒓 𝒐𝒇 𝒗𝒊𝒅𝒆𝒐⛱ ";
    api.sendMessage(albumMsg, massage.threadID, (error, info) => {
      if (error) return console.error(error);
      global.bot.onReply.set(info.messageID, {
        commandName: module.exports.config.name,
        type: "reply",
        messageID: info.messageID,
        author: massage.senderID,
        msg: albumMsg,
      });
    }, massage.messageID);
  }
};

onReply = async ({ api, massage, Reply }) => {
  try {
  api.unsendMessage(Reply.messageID);
    if (massage.type === "message_reply") {
      const reply = massage.body.trim();
      let nazrulUrl;
      switch (reply) {
        case '0':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/attitude";
          break;
        case '1':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/status2";
          break;
        case '2':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/natural";
          break;
        case '3':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/islam";
          break;
        case '4':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/love";
         break;
        case '5':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/sura";
          break;
        case '6':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/status";
          break;
        case '7':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/ff";
          break;
        case '8':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/sad";
          break;
        case '9':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/anime";
          break;
        case '10':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/short";
          break;
        case '11':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/cpl";
          break;
        case '12':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/baby";
          break;
        case '13':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/shairi";
          break;
        case '14':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/hot";
          break;
        case '15':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/sex";
          break;
        case '16':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/horny";
          break;
        case '17':
          nazrulUrl = "https://x9-apis-2.onrender.com/video/item";
          break;
        default:
          return api.sendMessage("𝒊𝒏𝒗𝒂𝒊𝒍𝒅 𝒄𝒉𝒐𝒊𝒄𝒆. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒓𝒆𝒑𝒍𝒚 𝒘𝒊𝒕𝒉 𝒂 𝒏𝒖𝒎𝒃𝒆𝒓 𝒃𝒆𝒕𝒘𝒆𝒆𝒏 𝟏 𝒂𝒏𝒅 𝟏𝟕.", event.threadID, event.messageID);
      }

      const res = await axios.get(nazrulUrl);
      const dataUrl = res.data.data;
      const n4zr9l = (await axios.get(dataUrl, { responseType: 'stream' })).data;

      api.sendMessage({
        body: "-`彡🔰𝐇𝐞𝐫𝐞'𝐬 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨 𝐓𝐡𝐚𝐭 𝐘𝐨𝐮 𝐖𝐚𝐧𝐭♡⛱",
        attachment: n4zr9l
      }, massage.threadID, massage.messageID);
    }
  } catch (error) {
    api.sendMessage("error: " + error.message, massage.threadID, massage.messageID);
  }
};
