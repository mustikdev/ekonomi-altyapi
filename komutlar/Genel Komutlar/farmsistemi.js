module.exports = [{
  name:"farm",
  bkz:['Farm sistemini tam olarak açıklayan yardım menüsüdür.'],
  code:`
  $color[1;000046]
  $author[1;Farm sistemi;$authorAvatar] 
  $description[1;
  **Öncelikle nedir bu farm sistemi?**
  Farm sistemi para kazandırmanızı biraz arttıracak bir sistemdir.
  3 ayrı güçlendirme bulunmaktadır.
  Farm seviyesi, işçi sayısı ve hızlandırma.
  Aldığınız ve işçi sayısı ücreti 1.1x arttırmaktadır. Hızlandırma 1.3x ve seviye ise 1.5x ücreti arttırmaktadır.
  
  **Nasıl farm sahibi olacağım?**
  Öncelikle ***m!satınal farm*** yazarak bir farm sahibi olabilirsiniz. (Ücret: 3000 TL)
  
  **Güçlendirme fiyatları nasıl?**
  İlk işçi ve seviye farm aldığınızda aktifleşir. Sonraki alacağınız her işçi sayısına +100 fark eklenecektir.
  Hızlandırma ise her aldığınızdan itibaren +250 fark eklenecektir.
  Seviye ise +500 fark eklenecektir.
  
  **Tüm Komutlar:**
  ***m!farm:*** Tüm bilgilendirmeyi atar.
  ***m!farm-market:*** Farm marketini açar.
  ***m!farmım:*** Size ait farmın bilgilerini gösterir.
  ***m!satınal <farm/işçi/hızlandırma/seviye>:*** Farm marketinden bir şeyler alabilirsiniz.
  ***m!farm-topla:*** Saatlik gelen miktarı alırsınız.
    ]
  $onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]`
},{
  name:"farm-market",
  bkz:['Farm marketini görüntülemek için kullanabilirsiniz.'],
  $if:"v4",
  code:`
  $color[1;000046]
  $author[1;Farm marketine hoş geldin $userTag[$authorID];$authorAvatar]
  $description[1;
  $if[$getUserVar[farm;$authorID]==yok]
  👷 İşçi: Her işçi sizin farmınızdan gelen ücreti 1.1x arttırmaya yarar. | Ücret: *Belirlenemedi, farm sahibi değilsiniz.*
  ⏫ Hızlandırma: Her hızlandırma sizin farmınızdan gelen ücreti 1.3x arttırmaya yarar. | Ücret: *Belirlenemedi, farm sahibi değilsiniz.*
  🔰 Seviye: Her seviye  sizin farmınızdan gelen ücreti 1.5x arttırmaya yarar. | Ücret: *Belirlenemedi, farm sahibi değilsiniz.*
  〽️ Farm: Farm başlangıçtır, bunu satın alarak güzel bir para kaynağı elde edebilirsiniz. | Ücret: *3.000*
  $else
  👷 İşçi: Her işçi sizin farmınızdan gelen ücreti 1.1x arttırmaya yarar. | Ücret: *$splitText[5]*
  ⏫ Hızlandırma: Her hızlandırma sizin farmınızdan gelen ücreti 1.3x arttırmaya yarar. | Ücret: *$splitText[6]*
  🔰 Seviye: Her seviye  sizin farmınızdan gelen ücreti 1.5x arttırmaya yarar. | Ücret: *$splitText[7]*
  
  $textSplit[$getUserVar[farm;$authorID];/]
  $endif
  *Satın almak için **m!satınal** komudunu kullanabilirsin !*]
  $footer[1;Sorgulayan: $userTag[$authorID];$authorAvatar]
  $onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]
  `
},{
  name:"farmım",
  bkz:['Sahip iseniz size ait farm bilgilerini gösterir.'],
  $if:"v4",
  code:`
  $color[1;000046]
  $author[1;$userTag[$authorID]'nin farmı;$authorAvatar]
  $description[1;
  Farm seviyesi: **$splitText[4]**
  Farmdaki işçi sayısı: **$splitText[2]**
  Farmdaki hızlandırıcı sayısı: **$splitText[3]**
  
  Saatlik gelir: **$splitText[1]**
  Sonraki toplama: **$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$getCooldownTime[1h;user;farm-topla;$authorID];time];s;];hour;saat];minute;dakika];econd;saniye]**
  ]
  
  $textSplit[$getUserVar[farm;$authorID];/]
  $onlyIf[$getUserVar[farm;$authorID]!=yok;Bir farm sahibi değilsiniz.]
    $onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]`
},{
  name:"satınal",
  bkz:['Farm malzemeleri almak için kullanabilirsiniz.'],
  $if:"v4",
  code:`
  $if[$message[1]==farm]
Farm alınıyor, işçi ve sistem aktif edildi. Günlük kazancınız: ***100*** olarak belirlendi.
  
$setUserVar[farm;100/1/0/1/100/250/500;$authorID]
$onlyIf[$getUserVar[para;$authorID]>=3000;Bunu almak için 3000 olması gerekiyor.]
$onlyIf[$getUserVar[farm;$authorID]==yok;Zaten farm sahibisiniz, başka bir farm alamazsınız!]
  $endif
  $if[$message[1]==işçi]
İşçi sayısı arttırıldı. Yeni işçi sayısı: ***$sum[$splitText[2];1]*** Yeni gelir: ***$truncate[$multi[$splitText[1];1.1]]***

$setUserVar[farm;$truncate[$multi[$splitText[1];1.1]]/$sum[$splitText[2];1]/$splitText[3]/$splitText[4]/$sum[$splitText[5];100]/$splitText[6]/$splitText[7];$authorID]
$setUserVar[para;$truncate[$sub[$getUserVar[para;$authorID];$splitText[5]]];$authorID]
$onlyIf[$getUserVar[para;$authorID]>=$splitText[5];Bunu almak için $splitText[5] olması gerekiyor.]
$endif

  $if[$message[1]==hızlandırma]
Hızlandırıcı sayısı arttırıldı. Yeni hızlandırıcı sayısı: ***$sum[$splitText[3];1]*** Yeni gelir: ***$truncate[$multi[$splitText[1];1.3]]***

$setUserVar[farm;$truncate[$multi[$splitText[1];1.3]]/$splitText[2]/$sum[$splitText[3];1]/$splitText[4]/$splitText[5]/$sum[$splitText[6];250]/$splitText[7];$authorID]
$setUserVar[para;$truncate[$sub[$getUserVar[para;$authorID];$splitText[6]]];$authorID]
$onlyIf[$getUserVar[para;$authorID]>=$splitText[6];Bunu almak için $splitText[6] olması gerekiyor.]
$endif

  $if[$message[1]==seviye]
Farm seviyesi arttırıldı. Yeni seviye: ***$sum[$splitText[4];1]*** Yeni gelir: ***$truncate[$multi[$splitText[1];1.5]]***

$setUserVar[farm;$truncate[$multi[$splitText[1];1.5]]/$splitText[2]/$splitText[3]/$sum[$splitText[4];1]/$splitText[5]/$splitText[6]/$sum[$splitText[7];500];$authorID]
$setUserVar[para;$truncate[$sub[$getUserVar[para;$authorID];$splitText[7]]];$authorID]
$onlyIf[$getUserVar[para;$authorID]>=$splitText[7];Bunu almak için $splitText[7] olması gerekiyor.]
$endif
  
  $textSplit[$getUserVar[farm;$authorID];/]
  $onlyIf[$checkCondition[$message[1]==işçi]$checkCondition[$message[1]==hızlandırma]$checkCondition[$message[1]==seviye]$checkCondition[$message[1]==farm]!=falsefalsefalsefalse;Alacağınız şey hatalıdır. ***m!satınal farm/seviye/hızlandırma/işçi*** olmalıdır.]
    $onlyIf[$getGlobalUserVar[kural;$authorID]!=yok;]`
},{
  name:"farm-topla",
  bkz:['Saatte bir farmdan gelen parayı toplamak için kullanılır.'],
  code:`
  Toplanan miktar: ***$splitText[1]***
  $setUserVar[para;$sum[$getUserVar[para;$authorID];$splitText[1]];$authorID]
  $textSplit[$getUserVar[farm;$authorID];/]
  $cooldown[1h;$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$getCooldownTime[1h;user;farm-topla;$authorID];time];s;];hour;saat];minute;dakika];econd;saniye] sonra toplayabilirsiniz.]
   $onlyIf[$getUserVar[farm;$authorID]!=yok;Bir farm sahibi değilsiniz.]`
}
                 
                 
                 ]