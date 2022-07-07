module.exports = [{
  name:"para-ayar",
  bkz:["Admin yetkisi olan kişilerin bütün herkesin parasını ayarlamaya yarar."],
  $if:"v4",
  code:`
  $setUserVar[para;$message]
Herkesin parası \`$message\` olarak ayarlanmıştır.
  $onlyIf[$isNumber[$message[1]]!=false;Başlangıç parası bir sayı olmalıdır.]
  $onlyIf[$message!=;Başlangıç parasını ayarlamak için yeni miktarı girmelisiniz.]
  $onlyIf[$hasPerms[$guildID;$authorID;admin]!=false;Bunun için \`Yönetici\` izni sağlamalısınız.]
  `
},{
  name:"komutpara-ayar",
  bkz:["Komut kullanımında vereceği parayı ayarlar.."],
  $if:"v4",
  code:`
  $setServerVar[paraa;$message]
Komut kullanım parası \`$message\` olarak ayarlanmıştır.
  $onlyIf[$isNumber[$message[1]]!=false;Ayarlanan para bir sayı olmalıdır.]
  $onlyIf[$message!=;Para ayarlamak için yeni miktarı girmelisiniz.]
  $onlyIf[$hasPerms[$guildID;$authorID;admin]!=false;Bunun için \`Yönetici\` izni sağlamalısınız.]
  `
}]