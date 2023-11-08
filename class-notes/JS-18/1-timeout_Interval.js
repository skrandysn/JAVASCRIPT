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
// }
//}
//!
console.log("hello");
console.time("Mytimer");
//alert("buraya bakarlar");

//Wait(2000)
console.log("eypes");
console.timeEnd("Mytimer");

//**Asenkron (setTimeout) */

console.log("Timeout started");

setTimeout(() => {
	console.log("1 sec");
}, 5000);

console.log("Timeout finished");

//* Asenkron (setInterval, clearInterval)  ****//

//  console.log("Interval started");
// let counter = 0;

// const sec1 = setInterval(()=> {
//   console.log(counter++);
//   if (counter > 3) {
//     clearInterval(sec1);
//     console.log("Interval stopped");
//   }
// }, 1000);

// console.log("Interval stopped last");

//! callback Hell (nested ve birbirine baglı callback'ler)
//* Eger birbirine bağımlı asenkron kodların yazılması gerekirse nested callback yapısının kullanıması gerekebilir. Fakat bu iyi bir programlama yaklaşımı değildir.
//!Callback hell olarak adlandırılan bu yapının anlasılmsı ve sürdürülebilirliği oldukca zordur.

//setTimeout(()=> {
//console.log("jogn:Hi");
// setTimeout(()=> {
// console.log("Sarah: Hello");
//setTimeout(()=> {
//console.log("John: How Are You");
//setTimeout(()=> {
//console.log("Sarah:Fine and you?");
//}, 1000);
//}, 1000);
//},  1000);
//},    10000);

//?COZUMLER//

//** 1- XMLHttpRequest (Eski yontem, ornek: AJAX) */
//? htpps://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//** 2- Promise,
//! 3- Fetch API (Promise'in basitleştirilmis hali)
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmıs hali)
