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
  banner:"https://i.pinimg.com/originals/1c/99/90/1c9990cdbbff7b83ebe4736aade5ddc0.png",
  hakkımda:"yazılmamış.",
  paraa:5, //Sunucularda komut kullanımında kaç para vereceğini ayarlarsınız.
  kural:"yok"
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
