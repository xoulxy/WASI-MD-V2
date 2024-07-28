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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0FKTHJWMWxid2VQVGNhNFRmY2p6Mk1uTzJySDNtNklOUnpwQW8xQ2lraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGtTYjEwYUtJbHFCSW9vaCtnU29JR1FId3hLSWZMUzJnUDNKdW5zNWpYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRHZkN20xSHFWSU41WUdhZlVuSzdQcTVQV1hCeEptNVhtdnV1MWZtRFU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Wmh1N3NIVzZxWWtTcGZlcWpJem5wNnVSOUZIOTEzNjFWc0habFBLdURnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGUjFYUUlhY0xnYUQ4REZobWdQMStwRGI2bkVLNWVVbXBiYUU4Y3JnSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRnV1BpOEVETk93NGQybUs2cjZuc2ZSOTNRNk1IcXMwL0JWZnRWcEorM2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZKUm1pczhNdlNwNHNQM29lSVFPZjlLNkkyZFo1c1p1WHFXdVZVNm9Vbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlZNYTFZUzRyM1c1OWtBaWpBM0lnNkowaGY5U3NkaUtEZ01uNGhDbkt3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Wa0hycjEvd1lWc3BUY3MwbGkvck8rTGtnMnZVMHJqSjBqdjA3dzc1SkR1YnFCbmYweC9acDA4WWw2MnM5NkhPaGNxMlo1bW8ydElNbFFCb05paWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IldHVFl4QmZRYkZMbGJXYm9oRWVSeWFYN3FXZVRJYU5HMmpRZ1pyNVgvbG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjgzUk9lVnRaUU5HaTMwdmNoN2duUVEiLCJwaG9uZUlkIjoiZTgxYTg3Y2EtODU1Mi00NjM3LTg3MjgtYTM4NDFjYWUyMmE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldsMm9UWjJFRzlFTFhqVkxmdHlRaGdKOGRSOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFaGdSdWplRFNkYTc4T2t4bW5QZ25LN0ZPYm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVNZVDhNTUUiLCJtZSI6eyJpZCI6IjkxOTYzMzYwNTY0ODo4M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG6IPCdnJ8g8J2cnSDwnZyfIPCdkYUg8J2bqiAvLy8g8J+Mqe+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG4xOWVvQ0VJbVRsTFVHR0E0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3ZvVmxzSVZ3bEFsUVhiMWIvcHkwUElxWjJRRnhBRXZGRy8xYVlrMVJIVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNU4wY3F4VlhqRkhDNm50MmM1cWFsazdNUmFZRy9oSXJMVmFPMm45aVZnSWkzaFIzeVVmQ3A2SzVrSWw5SWd1ZTB2R0JIdWVzL3R5Y3orZFhjb2NLQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Imk4bDdhUEZKQVFKd2g5OGdLS1p1Y0srSXBtbHdsSE54Y3VCaWhvVTVqZzIzdHMxY3JvMUczQTBqakhoTHNzaVVzMmZhdGJ0ODFCRVpLdG1URFdCampnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5NjMzNjA1NjQ4OjgzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVyNkZaYkNGY0pRSlVGMjlXLzZjdER5S21ka0JjUUJMeFJ2OVdtSk5VUjEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIwOTE5MjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWhRIn0="
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
