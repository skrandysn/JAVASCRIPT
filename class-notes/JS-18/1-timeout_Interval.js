//**********1- Senkron-Asenkron ************/

//! Javascript single-threaded ve Asenkron Progralama dilidir.
//?ASENKRON PROGRAMLAMA

//? Asenkron programlama, bir alt görevin uygulamanın asil thread'ından bağımsız olarak arka planda çalıştırılmasına izin veren paralel programlama tekniğidir.

//? Bu alt görev tamamlandığında(başarı veya başarısızlıkla) asil thread bu konuda bilgilendirilir. Asenkron programlama uygulamamaların performansının artırılmasına ve daha iyi kullanıcı deneyimine katkı sağlamaktadır.

//?Ozellikle bir API'den veye Veritabanından veri çekme, giriş/çıkış işlemleri, dosya okuma/yazma işlemleri gibi zaman tüketen kodlarda "Asyn Programlama" kullanılması ÇOK ÖNEMLİDİR.

//******Senkron */
//! DÖNGÜYE GİRİYOR
//!const wait = (waitingTime)=> {
  //!const startTime = new Date().getTime();
  //!while (new Date().getTime() < startTime + waitingTime){
    //!console.log("zaman akıyor");
  }
}
//!
console.log("hello");
console.time("Mytimer");
//alert("buraya bakarlar");


//Wait(2000)
console.log("eypes");
console.timeEnd("Mytimer");