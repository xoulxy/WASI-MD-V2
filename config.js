//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "xoulser@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "919633605648@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Ln6PUAjwZhiBvcEKLG6KQl";
global.website = process.env.GURL || "https://chat.whatsapp.com/Ln6PUAjwZhiBvcEKLG6KQl";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/CoAcgTb.jpeg";
global.devs = "919633605648";
global.sudo = process.env.SUDO || "919633605648";
global.owner = process.env.OWNER_NUMBER || "919633605648";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VGU3VWK0hnQWE1VE9QRGJvNEdMa09nR01tSklZU0xsa09rOGdjQU1Vdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1hxNjdDSkN4UERXaFErRUl0WGF4alg1SmV5ZjRYVUs1L0hOM0lvSUtpVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUElJVnFQNmNFODZSVzFrVHlGWWRBQnliSHBJSVFzeVZDTkQrelpOWVZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvNWZnOWxzWWRtbFRIeVgwSmdtUGtEY1RlQ3M2NGVVcXZBS0s1Zi8reWh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBeWRkQVQzS3FnM0QxZUZsZlJ5WTlHbHc1NE8rTUNnbWRlZ0h3MXVBVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims2VDRtYmpGekRyUldOZVlnNW10SEFWTDVUazdsMktaUXdrTFVQb2hSMzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5pVThKSE5yK1o2bU5ZUFBTTEY2TnAwRFlxVnVmb25rOTQvdVpnZDZWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9lOFVuc0FxY29JSnZWTEpMaUZzTXNEd0hvUjdCWFBMaUtCNFJXQjgyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVUVDJuWGQ1ZDArbDgrUEpWY2tMWXkwR2F6MlVoaDNncU92UTkvT1VTclN1QWgxdGVmQ0pHM2NManBrYkJOL2NvZUJPanlvR2xKZDREZ1lKRXpmNURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IjJBUVQwK2hsaUpBMEhxZGROSkZLZWhnS2ZlSXo2WWtLUkMzMDJaemhwQzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpBYmY5YzZSUjZ5YlZ0a1kxWUZNZGciLCJwaG9uZUlkIjoiM2QxYTllNjEtODIwNS00OWEzLWI3ZjgtZjIxMjhkMTZmODkxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVVNzZYMUVsMzNkbFY4TyszRHNVb0Z6Q2hNYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1OUI4V3dWbjR6MUdvclhMZ3l3S0NiWEI5bjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlczWUNTREgiLCJtZSI6eyJpZCI6IjkxOTYzMzYwNTY0ODo4NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHIxOWVvQ0VLalpsclVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3ZvVmxzSVZ3bEFsUVhiMWIvcHkwUElxWjJRRnhBRXZGRy8xYVlrMVJIVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieEJhZzFxQjgzaVVMUTFXUTZ2STk1MCtTMVNQK2hSQ3dJVm5IYklja0UyL3dnTUgreGMwNExJanN0RUZmNm5CanJTbkEvZ0JMbGw3dzljM0FQOTlEQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Imdvay9TSXhPZFZlcERCdlpSZWkzOHZ6aEpzVnBuZkFHYTVxN2FYcmUxNDFhaFdZRFBJYklHbzRMRlU0VHNaV21aTUF4SkErZXYvRkJUT2EzVm5QOENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5NjMzNjA1NjQ4Ojg1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVyNkZaYkNGY0pRSlVGMjlXLzZjdER5S21ka0JjUUJMeFJ2OVdtSk5VUjEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxMzM2ODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWhZIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🩵",
  author: process.env.PACK_AUTHER || "𝑺 𝜟 𝜝 𝜟 𝑅 𝛪 /// 🌩️",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "𝐗ᴏᴜʟ 𝐌ᴅ",
  ownername: process.env.OWNER_NAME || "𝑺 𝜟 𝜝 𝜟 𝑅 𝛪 /// 🌩️",
  errorChat: process.env.ERROR_CHAT || "919633605648",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
