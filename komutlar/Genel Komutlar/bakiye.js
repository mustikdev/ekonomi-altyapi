module.exports = {
  name:"para",
  aliases:['param','bakiye','cüzdan'],
  bkz:["Etiketlenen kişinin para miktarını ya da kendi para miktarınızı görmek içindir."],
  code:`
$color[1;000046]  
  $title[1;$userTag[$mentioned[1;yes]] Kişisinin Cüzdanı :coin:]
  $thumbnail[1;$userAvatar[$mentioned[1;yes]]]
  $description[1;
  Kişinin cüzdanındaki para miktarı: \`$getUserVar[para;$mentioned[1;yes]]\`
  ]
  $footer[1;Kontrol sağlayan kişi: $userTag[$authorID];$authorAvatar]
$onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]
  `
}