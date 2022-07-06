module.exports = {
  name:"para-ayar",
  bkz:["Admin yetkisi olan kişilerin bütün herkesin parasını ayarlamaya yarar.."],
  $if:"v4",
  code:`
  $setUserVar[para;$message]
Herkesin parası \`$message\` olarak ayarlanmıştır.
  $onlyIf[$isNumber[$message[1]]!=false;Başlangıç parası bir sayı olmalıdır.]
  $onlyIf[$message!=;Başlangıç parasını ayarlamak için yeni miktarı girmelisiniz.]
  $onlyIf[$hasPerms[$guildID;$authorID;admin]!=false;Bunun için \`Yönetici\` izni sağlamalısınız.]
  `
}