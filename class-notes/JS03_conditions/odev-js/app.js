//! ODEV1: Kullanıcıdan 2 sayı ve 1 işlem istenerek basit bir hesap makinesi programını yazınız.

const s1 = Number(prompt("1.Sayıyı Giriniz:"));
const islem = prompt("İşlemi giriniz: +,-,*,/");
const s2 = Number(prompt("2.Sayıyı Giriniz:"));

if (islem === "+") {
	console.log(`${s1 + s2} toplama işlemi sonucu.`);
} else if (islem === "-") {
	console.log(`${s1 - s2} çıkarma işlemi sonucu.`);
} else if (islem === "*") {
	console.log(`${s1 * s2} çarpma işlemi sonucu.`);
} else if (islem === "/") {
	console.log(`${s1 / s2} bölme işlemi sonucu.`);
} else {
	console.log(
		"Hatalı İşlem. Lütfen seçili işlemlerden bir tanesini seçerek tekrar deneyiniz."
	);
}
20;

//! ODEV2:Maasi asgari ucretten az ve eşit olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

//todo ************* BİRİNCİ ÇÖZÜM ********************
const mas = Number(prompt("Lütfen Maaşınızı Giriniz:"));
const asg = 5000;

mas <= asg
	? alert(`Güncel maaşınız %50 zamdan sonra ${maas * 1.5} olacaktır.`)
	: alert(`Güncel maaşınız %10 zamdan sonra ${maas * 1.1} olacaktır.`);

//todo ************* İKİNCİ ÇÖZÜM ********************
const maas = Number(prompt("Lütfen Maaşınızı Giriniz:"));
const asgari = 5000;

if (maas <= asgari) {
	console.log(`${maas * 1.5}`);
} else if (maas > asgari) {
	console.log(`${maas * 1.1}`);
} else {
	console.log("yanlış veri girdiniz");
}
