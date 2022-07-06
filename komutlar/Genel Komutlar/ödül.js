module.exports = {
  name:"ödül",
  bkz:["12 saatte bir ödül alarak para kazanabilirsiniz."],
  code:`
Kutu açıldı ve \`$random[1000;5000]\` :coin: kazandın :tada:
$setUserVar[para;$sum[$getUserVar[para;$authorID];$random[10;50]];$authorID]
$cooldown[12h;\`$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$getCooldownTime[12h;user;günlük;$authorID];time];s;];hour;saat];minute;dakika];econd;saniye]\` sonra ödülünü alabilirsin.]
`
}