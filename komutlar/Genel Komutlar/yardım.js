module.exports = {
  name:"yardım",
  aliases:['help'],
  bkz:["Botun yardım menüsüne bakarsın bu sayede yardım alabilirsin."],
  $if:"v4",
  code:`
  $color[1;000046]
  $if[$message==]
  $addField[1;Genel komutlar; \`myardım\` | \`mgünlük\` | \`mpara\` | \`mçalış\` | \`mprofil\` | \`mhakkımda-değiştir\` | \`m!farm\` ;yes]
  $addField[1;Değişken komutlar; \`mpara-ayar\` | \`mkomutpara-ayar\` | ;yes]
  $addField[1;Bot sahibi komutları;\`meval\` | \`mhack\`;yes]

  $else
  $description[1;
  Aranan komut: \`m$message\`
  Bulunan komut: \`m$message\`
  
  Komut açıklaması: \`$commandInfo[$message;bkz]\`]
$thumbnail[1;$authorAvatar]
$onlyIf[$commandInfo[$message;bkz]!=;\`m$message\` adında bir komut bulunamadı. Yardım menüsüne bakmak için \`myardım\` yazabilirsiniz.]
$endif

$footer[1;Sorgulatan kişi: $userTag[$authorID];$authorAvatar]
$onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]
`
}