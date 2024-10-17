module.exports.config = {
  name: "videomix",
  version: "11.9.7",
  role: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const {data} = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const video = data.api;
  var shaon = [`${video}/video/status`,
`${video}/video/sad`,
`${video}/video/baby`,
`${video}/video/love`,
`${video}/video/ff`,
`${video}/video/shairi`,
`${video}/video/humaiyun`,
`${video}/video/islam`,
`${video}/video/anime`,
`${video}/video/short`,
`${video}/video/event`,
`${video}/video/prefix`,
`${video}/video/cpl`,
`${video}/video/time`,
`${video}/video/lofi`,
`${video}/video/happy`,
`${video}/video/football`,               
`${video}/video/funny`              
]
  var shaon1 = shaon[Math.floor(Math.random() * shaon.length)]
  axios.get(shaon1).then(res => {
message.stream({
url: res.data.data,
caption: `𝐒𝐏𝐀𝐘𝐒𝐇𝐄𝐀𝐋 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐈𝐗\n\n｢𝐒𝐇𝐀𝐎𝐍 𝐏𝐑𝐎𝐉𝐄𝐂𝐓｣`
});
      })
}
