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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUowRk5KMzNYOEhsUFpEMGZPaGlydW1udWQ1Nk0zaVlPbW0vdEZTSnpFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGxHeFNqZ1BQUkhjSmJlYkU3L3I3eFYwSm0zUVZYNFpjV3BhbkpZVHhIbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSlNsQ29UR01SZDJEWDJyeHFDTEJzTWFpcTJLb0NvRCtZemVDNDFYTGtBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ZENCV1craUJ6MGRuempab0RCQVlpY205Y25vWXF6RXQ1MVBXQ09kRFIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNTXBIQUc4bkJtemVwa1VBOU9VYmZVcWdPNUhRS0NFbkNmcWVCaHRCV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im54eldzcXVEdWVRR25NTnBST1U5K21MQWt2TDZOVEpyeDAzU0psdkNBaEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVYMGMvczZvY0VKS3UyeFZuTDBaWUUwMm5yc3pWU0xMYzFWL0c2SG1tWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDdBUm5wblJ0bktwNWVpdTZsMlRVdlZucDNra0JrdWdPMXZyZDk0TVlpdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino5NG1PeUpSZzVOZ1pENXZSYWIvSHlpYVpyUU9UdFlrR3dYMEkyR3BxSUVheHhza1NGOWdTV2d4d0hHdXoxL3daQlJ4S2xtc3BHTjBIa0wyYUV5WEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJYY01XYkFUNU5nSlk0VWduZkdvaFFlSllJdmxrK3RzQkFiSzh2aEl3RDRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5ZWQzT08zLVNtQ3BIM0x0M0RMSnV3IiwicGhvbmVJZCI6ImE3ZmFmMDYzLTE1N2UtNDg1My04OWUxLWE5NmM3M2RlODZiYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZmpPZ0plME5vN05NQU50Ui9GNGJXMWoybm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam5QUjBLdHBSSEJ3VGtHbU5TTlpneVJSTm4wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJOU1NWWENGIiwibWUiOnsiaWQiOiI5MTk2MzM2MDU2NDg6ODhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xyMTllb0NFSVRWbnJVR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlN2b1Zsc0lWd2xBbFFYYjFiL3B5MFBJcVoyUUZ4QUV2RkcvMWFZazFSSFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJxQW1zZXZHUEJJSG0xSmdqdDhnS3lHYUYzUDQwOC9ORmxwVU0raUNnWVZSY2dGMmZSN0hlNDRJNzc1Rnc3c2c4WjFDai83WitPelFzUzY0YURBUUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKb045MVd1SXFMakhUQUJ6dDlrak1qbmVXZ2JBOHp3TFI1aDI0WWNacmkwUm1WUXQ3aFNOaURNUHZ2M3djZEFkUDdNb1hGb1BrSC81NllsZDVVdDFEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTYzMzYwNTY0ODo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVcjZGWmJDRmNKUUpVRjI5Vy82Y3REeUttZGtCY1FCTHhSdjlXbUpOVVIxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjY0MjA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1oWSJ9"
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
