const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token:process.env.TOKEN,
prefix: "m!",
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