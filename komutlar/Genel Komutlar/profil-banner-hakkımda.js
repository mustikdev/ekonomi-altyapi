module.exports = [{
  name:"profil",
  aliases:['durum','profile'],
  bkz:["Profilini görmek için kullanırsınız. Özelleştirilebilir."],
  code:`
$color[1;000046]
$addField[1;***Hakkında:*** $getUserVar[hakkımda;$authorID];***Bakiye:*** $getUserVar[para;$authorID]]
$description[1;**$userTag[$authorID]**]
$image[1;$getUserVar[banner;$authorID]]
$thumbnail[1;$authorAvatar]
$onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]
  `
},{
   name:"hakkımda-değiştir",
  bkz:["Profil kısmındaki hakkımda yazısını değiştirmek için kullanabilirsiniz."],
  code:`
 Hakkında yazın değiştirilmiştir.
 $setUserVar[hakkımda;$message;$authorID]
 $onlyIf[$message[1]!=;Değiştirmek için bir yazı yazmalısınız.]
 $onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]
 `
}                ]
              