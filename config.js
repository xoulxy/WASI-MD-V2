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
global.email = "wasixml@gmail.com";
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
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk15N3lzYlcySk95TlBJMXNMelI4cE1pN1JyVkRHVnZDeEpxQzBFTlhHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHdvc01OY1BzN04zYXBTTy9NbzVFVTYreGl5ZEp2MTVMZFBldURNMXAxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRlFWeHMrd1Y1bGVESW9JQVhwS3M2bDRXR3ZXR1hlQzRMMFBLa3R5MEdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTEtqZktnYTJDb051WVhTb3VUZjhmYWptZzVyaElBQ055dEVnOWt6MVRjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMVTFkSnIwKytLcng2OVNOYUFCS2kxZUtEV0RESENZeFJmM1RkOStZSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRvSDdTc2JLd3QvZm16UTlQdUdFNDlnRzFGand5WXFYQjIxUlIvK3k0bm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5lTnI3alBYT2lMRi9tVS9zbjZHUWdCeHRwb3BKS3h4ZjZVWDVtd0cxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjlLd1Z0QnUzd2ZIekNEMXY3S2drMGFsdVQ2S1dWNVkvdjBRVk5qL29oQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR3b3poRTdURGhPVU1GVEdzOCtkSnNGcU9QOUplcHVlMjVxbmd3Z1E0YUhTUS9TOVcyM0l1TFRMbE5pYXpMOTh4QUVWZjZHV0N2bkNna0FtcDBtWWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6InN2Q2RHNFhDdGJ2d3RLU3ZaZnQ4WUVpdzhRbmN0a0N2bzBqU1VrS3F3ajg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNYZ0VGaV9uUVhDa3hqQVMwMTBSbGciLCJwaG9uZUlkIjoiNjA4Zjg5OWMtYTRhNy00MWQ5LWI4MDUtOGNiYzI4ZmE2NWQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtpUXJOZ24wVXhIczl5OEZ6dGd1OEZ6TjkyMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwY2RRTHdmeENNWkVwVWZJR0NEajB1ODRuUEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQk0ySzhBRkoiLCJtZSI6eyJpZCI6IjkxOTYzMzYwNTY0ODo4MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG4xOWVvQ0VPRC9rN1VHR0EwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3ZvVmxzSVZ3bEFsUVhiMWIvcHkwUElxWjJRRnhBRXZGRy8xYVlrMVJIVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUVpRcVVVTlpCSDY5Ym00bXp4YStRQXp4MFFQUCtDZDNjUmRWSHo3Slc0aGtGUUw0SUU5cWpORnk3SE5Ea3ZVcG1MZG92MUxtMysvK3hMWml3cUExRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjV5YlRkVUs5VlNKODFoS3YvZDhpZ1luVmtIcFdqTElOYXZvRXNyL1YvWFR1RS9vWmVnQk9mR2pKV2NDOStzREpsSCtkcW9sdExNdFJHZW5CTFRCbWpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5NjMzNjA1NjQ4OjgyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVyNkZaYkNGY0pRSlVGMjlXLzZjdER5S21ka0JjUUJMeFJ2OVdtSk5VUjEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIwODk0NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWhRIn0="
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
