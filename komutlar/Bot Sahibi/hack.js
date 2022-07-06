module.exports = {
  name:"hack",
  bkz:["Bot sahibinin olan sunucuda parasına 50000 TL eklemesine sağlar."],
  code:`
  $setUserVar[para;$sum[$getUservar[para;$authorID];50000];$authorID]
  The hack is successful.
  $onlyForIDs[$botOwnerID;]
  `
}