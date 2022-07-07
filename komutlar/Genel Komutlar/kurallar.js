module.exports = [{
  name:"$alwaysExecute",
  code:`
  $color[1;000046]
  $author[1;Merhaba $userTag[$authorID];$authorAvatar]
  $description[1;Kurallardan bahsedelim hızlıca.
  
  1- 3.parti yazılımlar yasak.
  2- Botu kopyalamak yasak.
  3- Bug abuse yapmak (bugları lehine kullanmak) yasak.]
  $footer[1;Kuralları kabul etmediğini görüyorum, kabul etmen gerekiyor  yoksa asla oynayamazsın bu yüzden m!kural-kabul yazmanı rica ediyorum. Hem ödül de var.]
  $onlyIf[$message!=kural-kabul;]
  $onlyIf[$getGlobalUserVar[kural;$authorID]!=var;]
  
  `
},{
  name:"kural-kabul",
  code:`
  Kurallar kabul edildi :tada:
  $setUserVar[para;$sum[$getUserVar[para;$authorID];5000];$authorID]
  $setGlobalUserVar[kural;var;$authorID]
  $onlyIf[$getGlobalUserVar[kural;$authorID]!=var;]
  `,
  nonPrefixed: false
}]