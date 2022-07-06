module.exports = {
  name:"eval",
  bkz:["Bot sahibinin komut denemesi için dosyalara gitmeden kod deneyebileceği bir komuttur."],
  code:`
  $eval[$message]
  $onlyForIDs[$botOwnerID;ok]
  `
}