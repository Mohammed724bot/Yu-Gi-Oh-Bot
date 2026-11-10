// config.js
// ⚽ 『 𝑰𝑺𝑨𝑮𝑰⚽𝑩𝑶𝑻 』 — Configuration ⚽

import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

// ═══════════════════════════════════════
// 👑 المطورين
// ═══════════════════════════════════════
// حط lid بتاعك من امر lid
global.owner = [
  '78538459853052@lid',
  '212634266182',           // ← ISAGI ⚽
  '212708613251',           // ← kira ⚽
  '212722502470'            // ← TENGEN ⚽
]

global.mods = []
global.prems = []

// ═══════════════════════════════════════
// ⚽ هوية البوت
// ═══════════════════════════════════════
global.baileys = '@whiskeysockets/baileys'
global.botName = '『 𝑰𝑺𝑨𝑮𝑰⚽𝑩𝑶𝑻 』'
global.botNameShort = '𝑰𝑺𝑨𝑮𝑰'
global.watermark = '⚽ 『 𝑰𝑺𝑨𝑮𝑰⚽𝑩𝑶𝑻 』 ⚽'
global.packname = '『 𝑰𝑺𝑨𝑮𝑰⚽𝑩𝑶𝑻 』'
global.author = '𝑰𝑺𝑨𝑮𝑰 ⚽'

// ═══════════════════════════════════════
// 📚 المكتبات العامة
// ═══════════════════════════════════════
global.fetch = fetch
global.axios = axios
global.moment = moment
global.fs = fs

global.multiplier = 85

// رقم البوت (بدون + أو فواصل)
global.botNumberCode = '212712679556'

// ═══════════════════════════════════════
// 📢 القناة الوحيدة
// ═══════════════════════════════════════
global.channel = {
  name: '🅸🆂🅰︎🅶🅸 ⊰🍁⊱🆃🅴🅽🅶🅴🅽 𝑩𝑶𝑻',
  jid: '120363428928075593@newsletter',
  invite: '0029VbEBuQ27Noa0Il9ljT1T',
  link: 'https://whatsapp.com/channel/0029VbEBuQ27Noa0Il9ljT1T'
}

// للتوافق مع الكود القديم
global.ch = {
  main: global.channel.jid
}

global.soporteGB = global.channel.link

// ═══════════════════════════════════════
// ⚽ صور ISAGI
// ═══════════════════════════════════════
global.images = [
  'https://i.pinimg.com/736x/dd/3f/92/dd3f92de10e9e92e9ce733373dbd4d58.jpg',
  'https://i.pinimg.com/736x/29/ef/99/29ef997e4b743c3b545c9732a8759ae7.jpg',
  'https://i.pinimg.com/736x/57/85/22/578522baa5fab238f5d33feb629b5360.jpg',
  'https://i.pinimg.com/736x/ac/6d/97/ac6d97ee2f04b087d2957993e4832e64.jpg',
  'https://i.pinimg.com/736x/1d/88/45/1d8845af2a1cec0e813e70e966100303.jpg'
]

// صور الأخطاء (dfail) — من نفس الصور
global.dfailPool = [...global.images]

// ═══════════════════════════════════════
// 🌐 روابط السوشيال ميديا
// ═══════════════════════════════════════
global.yt = 'https://youtube.com/@youssf-f8i?si=WUZBmyryEpziKXS_'
global.ig = 'https://wa.me/212634266182'
global.md = 'https://github.com/ISAGI-BOT'
global.fb = 'https://www.facebook.com/groups/isagi'
global.tk = 'https://www.tiktok.com/@isagi_bot'
global.paypal = 'https://paypal.me/ISAGI'

// ═══════════════════════════════════════
// ❌ رسائل dfail
// ═══════════════════════════════════════
global.dfailMessages = {
  rowner:    '⚽ *هذا القرار ليس بيدك.*',
  owner:     '⚽ *المطور فقط. لا تجادل.*',
  mods:      '🏆 *القادة فقط يتحرّكون.*',
  premium:   '🎯 *البريميوم ليس للجميع.*',
  group:     '🏟️ *الملعب فقط.*',
  private:   '📱 *الحديث الجانبي فقط.*',
  admin:     '👑 *المشرف فقط.*',
  botAdmin:  '🧠 *البوت ليس له سلطة هنا.*',
  unreg:     '📝 *لست مسجّلاً في سجلاتي.*',
  restrict:  '🚫 *الأمر مُعطّل. لا تحاول.*'
}

global.dfailTitle = '『 𝑰𝑺𝑨𝑮𝑰⚽𝑩𝑶𝑻 』'
global.dfailDesc = '⧼ ISAGI ⚽ ⧽'
global.dfailUrl = 'https://wa.me/212634266182'

// ═══════════════════════════════════════
// 🔄 مراقبة الملف
// ═══════════════════════════════════════
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})