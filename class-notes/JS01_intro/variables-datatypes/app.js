
//* const(sabit-değişmez)-let(değişebilir)-var(değişebilir) var unut 
//* const-let kullanılacak



console.log("*********Data Types");


//!============= CONST
const gs ="galatasaray";
console.log(gs)
console.log("gs");
console.log("galatasaray");


const sayi = 20
console.log(sayi)
console.log(typeof sayi)
console.log(sayi,typeof sayi)


//! tırnak içinde olan her şey string(text) olarak atanır
const sayi1 = "33"
console.log(sayi1)
console.log(typeof sayi1)

// const sayi = 3

//! const ile atanan sayı değerinden başka hiçbir değer atanmaz 
//! const ile verilen değere başka değer verilemez
//!const id tc gibi özel bir defa değer verilir.

const s1 ="hello"
const s2 ="word"
console.log(s1)
console.log(s2)
console.log(s1 + s2) //?string concationation

const n1 ="5"
const n2 = 10
console.log(n1 + n2) //?string concationation

//!==============LET ===========
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil ="javascript"
console.log(dil)

dil ="java"
console.log(dil)

dil = true
console.log(dil, typeof dil)

dil= 3.14
console.log(dil,typeof dil)

let cohort;
console.log(cohort)//*undefined (tanımsız ytpe2ı yok)

cohort = 1
console.log(cohort,typeof cohort)

//! ===================  VAR ===========================
//* VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//* VAR değişkenleri global degiskenler gibidir.
//* LET ve CONST ile tanimlanan degiskenler block-scope 'dur
//* Yani sadece tanimlandigi block (alan) icerisinde gecerlidir.

var x = 11
console.log(x)

w =12 //*hiçbir şey yazmıyorsa VAR ile tanımlı sayılır. var w = 12

//* cesitli blok (scope) ornekleri
//* if(){
 //*let x =5
//* }else{
//* x
//* }

//?bir block oluşturduk. Blok denilince if-else
//? switch-case fonksiyon vb. yapıların ic alanı dusunulebilir.