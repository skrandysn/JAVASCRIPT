//? ********** ODEV ***********

//! ODEV-1 taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.

const taban = Number(
	prompt(
		"Lütfen alanını hesaplamak istediğiniz üçgenin TABAN KENAR UZUNLUĞUNU cm değerinden giriniz."
	)
);
const yukseklik = Number(
	prompt(
		"Lütfen alanını hesaplamak istediğiniz üçgenin yüksekliğini cm değerinden giriniz."
	)
);
let alan = 1;

function alanHesaplama(taban, yukseklik) {
	return (alan = (taban * yukseklik) / 2);
}
alanHesaplama(taban, yukseklik);
console.log(`Hesapladığınız üçgenin alanı: ${alan}`);

//! ODEV-2 "kareAl" "küpAl" "üsAl"şeklinde üç adet farklı declaration veya expresssion(dec-ex ile yapıcaz) tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.

//*kareAl**
const sayı = Number(
	prompt("Lütfen KARESİNİ almak istediğiniz sayıyı giriniz.")
);

let kareAl = 0;

function kareHesaplama() {
	return (kareAl = sayi ** 2);
}

kareHesaplama();
console.log(`Hesapladığınız sayının karesi: ${kareAl}`);

//*** kupAl */
const sayi = Number(prompt("Lütfen KÜPÜNÜ almak istediğiniz sayıyı giriniz."));

let kupAl = 0;

function kupHesaplama() {
	return (kupAl = sayi ** 3);
}

kupHesaplama();
console.log(`Hesapladığınız sayının küpü: ${kupAl}`);

//*üsAl***

const sayi = Number(prompt("Lütfen  sayıyı giriniz."));
const sayiUssu = Number(prompt("Lütfen ÜSSÜNÜ  giriniz."));

let usAl = 0;

function usHesaplama() {
	return (usAl = sayi ** sayiUssu);
}

usHesaplama();
console.log(`Hesapladığınız sayının üssü: ${usAl}`);
