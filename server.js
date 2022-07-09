const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token:"BOTUNUZUN TOKENİ",
prefix: "BOTUNUZUN PREFİXİ",
intents: ["GUILDS", "GUILD_MESSAGES"]
})


  //Command Handler
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/")
//Command Handler

//Callbacks
bot.onMessage()
//Callbacks

//Değişkenler
bot.variables({
  para:100, //Başlangıç parasıdır. Değiştirdiğiniz taktirde yeni başlayan kişilerin parası o miktar olarak ayarlanacaktır.
  hakkımda:"yazılmamış.",
  paraa:5, //Sunucularda komut kullanımında kaç para vereceğini ayarlarsınız.
  kural:"yok",
  banner:"yok/yok/yok/yok/yok/yok",
  sbanner:"https://cdn.discordapp.com/attachments/893602403025289236/995106754260111463/technoblade.jpg",
  })
//Değişkenler


//Örnek komut (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})
//Hazır Callback
bot.readyCommand({
    channel: "893602403025289236",
  //üst kısıma logun atacağı kanalın idsini yazabilirsiniz. İstemiyorsanız boş bırakın.
    code: `$userTag[$clientID] göreve hazır efendim.
  $log[$userTag[$clientID] göreve hazır efendim.]`
  
})
