module.exports = {
  name:"m", //BURAYA PREFİXİNİZ NE İSE ONU YAZINIZ!
  code:`
  $setUserVar[para;$sum[$getUserVar[para;$authorID];$getServerVar[paraa]];$authorID]
  $cooldown[5s]
  $onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]
  `,
  nonPrefixed: true
}