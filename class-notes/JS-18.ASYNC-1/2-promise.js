//****  2- Promise */
//? Promise asenkron bir islemin basarıyla ve basarısızlıkla bittiğini gosteren ve aynı zamanda basarıyla bittiginde sonuc verilerini temsil eden bir nesne yapısıdır.

//? ----- SYTNAX ----

//* 1- ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur
//* 2- constructor'a asil islemin yapılmasını saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonları
//* 4- resolve fonksiyonu promise nin basarıyla bittiginde, reject ise basarısızlıkla bittiginde isletilirler.

//? new Promise ()
//? /* executor */
//? function(resolve, reject)  resolve ve reject kendi icerisinde bir fonksiyondur

//! siz bir söz  veriyorsunuz basarılı biterse resolve, basarısız biterse reject calısıyor. isimler degisebilir.

console.log("Promise");

//? Bir Promise asagıdaki state(durumlari) icerebilir:
//* pending: ilk state, fullfilled veya rejected olmayan: ilk istek gönderildiginde olan durum
//* fulfilled:islem basariyla tamamlandigini gösteren state
//* reject: islemin başarısızlıkla tamamlandıgını gösteren state

const myPromise = new Promise((resolve, reject) => {
	const success = Math.floor(Math.random() * 4); //? 0, 1, 2, 3
	const data = { a: 2, b: 3 };
	if (success) {
		console.log("Data Fetched");
		resolve(data);
	} else {
		reject(new Error("Something went wrong!"));
	}
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
