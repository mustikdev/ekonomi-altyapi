module.exports = {
  name:"çalış",
  bkz:["Çalışarak para kazanabilirsiniz."],
  code:`
$randomText[Amelelik yaptın;Su satmaya başladın;Dilendin;Bir hırsızı kovaladın] ve \`$get[miktar]\` kazandın.
$setUserVar[para;$sum[$getUserVar[para;$authorID];$get[miktar]];$authorID]
$let[miktar;$random[10;50]]
$cooldown[10s;\`$replaceText[$replaceText[$parseDate[$getCooldownTime[10s;user;çalış;$authorID];time];s;];econd;saniye]\` sonra tekrar çalışabilirsin o yüzden biraz dinlenmene bak.]
 



 `
}