module.exports = [{
  name:"profil",
  aliases:['durum','profile'],
  bkz:["Profilini görmek için kullanırsınız. Özelleştirilebilir."],
  code:`
$color[1;000046]
$addField[1;***Hakkında:*** $getUserVar[hakkımda;$authorID];***Bakiye:*** $getUserVar[para;$authorID]]
$description[1;**$userTag[$authorID]**]
$image[1;$getUserVar[sbanner;$authorID]]
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
},{
   name:"banner-değiştir",
  $if:"v4",
  bkz:["Profil kısmındaki banner resmini değiştirmek için kullanabilirsiniz."],
  code:`
  $onlyIf[$splitText[$message[1]]!=yok;Bu bannera sahip değilsiniz!]
  $textSplit[$getUserVar[banner;$authorID];/]
 Banner resmin değiştirilmiştir.
 
 $if[$message[1]==1]
$setUserVar[sbanner;;$authorID]
$endif
$if[$message[1]==2]
$setUserVar[sbanner;https://cdn.discordapp.com/attachments/893602403025289236/995098133291860099/jpeg2.jpg;$authorID]
$endif
$if[$message[1]==3]
$setUserVar[sbanner;https://cdn.discordapp.com/attachments/893602403025289236/995098133027635280/jpeg3.jpg;$authorID]
$endif
$if[$message[1]==4]
$setUserVar[sbanner;https://cdn.discordapp.com/attachments/893602403025289236/995114147966636142/original.gif;$authorID]
$endif
$if[$message[1]==5]
$setUserVar[sbanner;https://cdn.discordapp.com/attachments/893602403025289236/995098132251672587/gif2.gif;$authorID]
$endif
$if[$message[1]==6]
$setUserVar[sbanner;https://cdn.discordapp.com/attachments/893602403025289236/995113413950836776/4167709.gif;$authorID]
$endif
 
 
 $onlyIf[7>$message[1];1-6 arasında seçmen gerekiyor.]
  $onlyIf[$message[1]>0;1-6 arasında seçmen gerekiyor.]
  $onlyIf[$isNumber[$message[1]]!=false;Seçeceğiniz banner idsi sayı olmalıdır.]
  $onlyIf[$message!=;Satın almak için 1-6 arasında bir sayı seçmelisiniz.]
 $onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]
 `
},{
   name:"banner-market",
  bkz:["Bulunan bannerları almak için kullanabilirsiniz."],
  code:`
$color[1;000046]
$author[1;$userTag[$authorID] Banner Marketi;$authorAvatar]
$description[1;
[ 1- Vaporwave Ortam ](https://cdn.discordapp.com/attachments/893602403025289236/995098133602254929/jpeg1.jpg) - 25.000 TL
[ 2- 3D Renkli Karanlık Adam ](https://cdn.discordapp.com/attachments/893602403025289236/995098133291860099/jpeg2.jpg) - 25.000 TL
[ 3- Huzurlu bir ortam ](https://cdn.discordapp.com/attachments/893602403025289236/995098133027635280/jpeg3.jpg) - 25.000 TL
[ 4- Sarılan anime GIF ](https://cdn.discordapp.com/attachments/893602403025289236/995114147966636142/original.gif) - 50.000 TL
[ 5- Müzik dinleyen Jake GIF ](https://cdn.discordapp.com/attachments/893602403025289236/995098132251672587/gif2.gif) - 50.000 TL
[ 6- Sinirli pikachu GIF ](https://cdn.discordapp.com/attachments/893602403025289236/995113413950836776/4167709.gif) - 50.000 TL
]
$footer[1;Satın almak için m!s-al <id> yazabilirsiniz;$authorAvatar]
$title[1;Önizleme için yazıya tıklayabilirsiniz]
$onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]
`
},{
  name:"s-al",
  $if:"v4",
  bkz:['Banner almak için kullanabilirsiniz.'],
  code:`
  $if[$checkCondition[$message==1]==true]
    1 Numaralı banner satın alınmıştır.
    $setUserVar[para;$sub[$getUserVar[para;$authorID];25000];$authorID]
$setUserVar[banner;var/$splitText[2]/$splitText[3]/$splitText[4]/$splitText[5]/$splitText[6];$authorID]
    $onlyIf[$getUserVar[para;$authorID]>25000;Bunu almak için 25.000TL olması gerekiyor.]
$endif
$if[$checkCondition[$message==2]==true]
2 Numaralı banner satın alınmıştır.
   $setUserVar[para;$sub[$getUserVar[para;$authorID];25000];$authorID]
$setUserVar[banner;$splitText[1]/var/$splitText[3]/$splitText[4]/$splitText[5]/$splitText[6];$authorID]
    $onlyIf[$getUserVar[para;$authorID]>25000;Bunu almak için 25.000TL olması gerekiyor.]
$endif
$if[$checkCondition[$message==3]==true]
3 Numaralı banner satın alınmıştır.
    $setUserVar[para;$sub[$getUserVar[para;$authorID];25000];$authorID]
$setUserVar[banner;$splitText[1]/$splitText[2]/var/$splitText[4]/$splitText[5]/$splitText[6];$authorID]
    $onlyIf[$getUserVar[para;$authorID]>25000;Bunu almak için 25.000TL olması gerekiyor.]
$endif

$if[$checkCondition[$message==4]==true]
4 Numaralı banner satın alınmıştır.
    $setUserVar[para;$sub[$getUserVar[para;$authorID];50000];$authorID]
$setUserVar[banner;$splitText[1]/$splitText[2]/$splitText[3]/var/$splitText[5]/$splitText[6];$authorID]
  $onlyIf[$getUserVar[para;$authorID]>50000;Bunu almak için 50.000TL olması gerekiyor.]
  $endif
  $if[$checkCondition[$message==5]==true]
5 Numaralı banner satın alınmıştır.
    $setUserVar[para;$sub[$getUserVar[para;$authorID];50000];$authorID]
$setUserVar[banner;$splitText[1]/$splitText[2]/$splitText[3]/$splitText[4]/var/$splitText[6];$authorID]
  $onlyIf[$getUserVar[para;$authorID]>50000;Bunu almak için 50.000TL olması gerekiyor.]
  $endif
  $if[$checkCondition[$message==6]==true]
6 Numaralı banner satın alınmıştır.
    $setUserVar[para;$sub[$getUserVar[para;$authorID];50000];$authorID]
$setUserVar[banner;$splitText[1]/$splitText[2]/$splitText[3]/$splitText[4]/$splitText[5]/var;$authorID]
  $onlyIf[$getUserVar[para;$authorID]>50000;Bunu almak için 50.000TL olması gerekiyor.]
  $endif
  
  $textSplit[$getUserVar[banner;$authorID];/]
  $onlyIf[7>$message[1];1-6 arasında seçmen gerekiyor.]
  $onlyIf[$message[1]>0;1-6 arasında seçmen gerekiyor.]
  $onlyIf[$isNumber[$message[1]]!=false;Alacağınız banner idsi sayı olmalıdır.]
  $onlyIf[$message!=;Satın almak için 1-6 arasında bir sayı seçmelisiniz.]
  $onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]

  `
}
              
                 ]
              