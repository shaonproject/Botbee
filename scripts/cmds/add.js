const axios = require("axios");

module.exports.config = {
  name: "add",
  version: "11.9.7",
  role: 0,
  credits: "Islamick Cyber Chat",
  prefix: true,
  description: "Random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};

module.exports.run = async ({ api, event, message, args }) => {
  try {
    const fileId =
      event?.reply_to_message?.photo?.slice(-1)[0]?.file_id ||
      event?.reply_to_message?.video?.file_id;

    if (!fileId) return message.reply("Reply with a valid media file.");

    const imageUrl = await api.getFileLink(fileId);
    const videoName = args.join(" ");

    if (!videoName) return message.reply("Provide a name for the video.");

    const [{ data: imgur }, { data: apis }] = await Promise.all([
      axios.get(`http://de01-2.uniplex.xyz:1642/imgur?link=${encodeURIComponent(imageUrl)}`),
      axios.get("https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json")
    ]);

    const { data } = await axios.get(`${apis.api}/video/random`, {
      params: { name: videoName, url: imgur.link }
    });

    message.reply(`💌MESSAGE:URL ADDED SUCCESSFULLY\n🟡NAME:${data.name}\n🖇️URL:${data.url}`);
  } catch (e) {
    console.error(e);
    message.reply(`Error: ${e.message}`);
  }
};
