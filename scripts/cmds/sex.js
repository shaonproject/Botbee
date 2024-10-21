module.exports.config = {
  name: "sex",
  version: "11.9.7",
  role: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};

module.exports.run = async function({ api, message }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const {data} = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const video = data.api;
  var shaon = [
`${video}/video/sex`,
`${video}/video/hot`,
`${video}/video/item`,
`${video}/video/capcut`,
`${video}/video/sex2`,
`${video}/video/sex3`,
`${video}/video/horny`,
               
]
  var shaon1 = shaon[Math.floor(Math.random() * shaon.length)]
  axios.get(shaon1).then(res => {
message.stream({
url: res.data.data,
caption: `🥵𝐒𝐄𝐗 𝐕𝐈𝐃𝐄𝐎🤭\n𝚃𝙾𝚃𝙰𝙻 𝚅𝙸𝙳𝙴𝙾:${res.data.count}...🎬\n\n｢𝐒𝐇𝐀𝐎𝐍 𝐏𝐑𝐎𝐉𝐄𝐂𝐓｣`
});
      })
}
