// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****");

//! ORNEK Silindir Hacim

//? hacim = Pi * r * r * h

const r = +prompt("r:");
const h = +prompt("h:");

const volume = (r, h) => Math.PI * r * r * h;

console.log(volume(r, h));
console.log(`${r},${h} = volume : ${volume(r, h).toFixed(4)}`);
//*noktadan sonra 4 karakter

console.log(`${r},${h} = volume : ${volume(r, h).toPrecision(4)}`);

//? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
// //? kisimlarinin ne kadarini gosterilecegini belirlemek icin
// //? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.

const volumeLong = (r, h) => {
	const result = Math.PI * r * r * h;
	return result;
};
// //! Alternatif olarak:
console.log(`${r},${h} = Volume : ${volumeLong(r, h).toFixed(4)}`);

// //* ORNEK: Yas hesapla
// //************************************************/
