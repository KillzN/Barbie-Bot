let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎💋:* ${pesan}`
  let teks = `*🧝🏻‍♀ 𝙱𝙰𝚁𝙱𝙸𝙴 𝙻𝙰 𝙼𝙴𝙹𝙾𝚁 𝚈 𝙻𝙾 𝚂𝙰𝙱𝙴𝚂 𝙳𝙴  𝙼𝚄𝙹𝙴𝚁𝚂𝚂𝚂 🫦.*\n\n ${oi}\n\n➥ _*𝙱𝙰𝚁𝙱𝙸𝙴 𝙸𝙽𝚅𝙾𝙲𝙰𝙽𝙳𝙾 𝙰 𝙻𝙰𝚂 𝙼𝙰𝚂 𝙵𝙸𝙴𝙻𝙴𝚂 𝚈 𝙷𝙴𝚁𝙼𝙾𝚂𝙰𝚂*_\n`
  for (let mem of participants) {
  teks += `ʚ💗ɞ @${mem.id.split('@')[0]}\n`}
  teks += `└ *BᴀʀʙɪᴇBᴏᴛ ★ ɪɢ : @xʙᴀʀʙɪᴄɪᴛᴀ.7*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|putos|animales)$/i
  handler.admin = true
  handler.group = true
  export default handler