console.log("******** Data Types ******")

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.


//? ===================  CONST  ======================


const gs = "galatasaray";
console.log(gs);  // galatasaray
console.log("gs");  // gs
console.log("galatasaray");


const sayi = 20
console.log(sayi)
console.log(typeof sayi)
console.log(sayi,typeof sayi)

//* Tirnak icindekiler string (text) olarak atanir.
const sayi1 = "33"
console.log(sayi1)
console.log(typeof sayi1)

// sayi = 3 //!Assignment to constant variable. //! var sayi= 3 

// const pi;  //! Missing initializer in const
// pi=3.14


const s1 ="hello"
const s2 =" world"
console.log(s1)
console.log(s2)
console.log(s1 + s2) //? String Concationation
// JS default olarak + operatorunde eger degiskenlerden en az birisi string ise bunlari birine ekler. (Toplama yapmaz)

const n1 ="5 "
const n2= 10
console.log(n1 + n2) //? String Concationation

const n3=20
console.log(n2+n3)



//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.


let dil ="javascript"
console.log(dil)

// let dil = "pyhton" //* kabul etmez . aynı isim de birden fazla değişken atayamazsınız.


dil = "java"
console.log(dil)

dil = true
console.log(dil, typeof dil)

dil= 3.14
console.log(dil,typeof dil)

let cohort;
console.log(cohort) //* undefined (tanimsiz, type'ı yok)

cohort = 1
console.log(cohort,typeof cohort)


//? ===================  VAR ===========================
//* VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//* VAR değişkenleri global degiskenler gibidir.
//* LET ve CONST ile tanimlanan degiskenler block-scope 'dur
//* Yani sadece tanimlandigi block (alan) icerisinde gecerlidir.

var x = 11
console.log(x)

w =12 //* Hiçbirşey yazmıyor ise VAR ile tanımlı sayılır. var w = 12 
console.log(w)

//? Cesitli blok (scope) ornekleri

// if(){
// let x =5
// }else{
// x

// }

// for(){
//     const y=4
// }
// console.log(y)

//? Bir block oluşturduk. Blok denilince if-else,
//? switch-case, fonksiyon vb. yapilarin ic alani dusunulebilir.


{
  //! Burasi local bir alandir.
  let a = 2;
  const b = 3;
  console.log(a, b);
}
//! a ve b bu alanda tanimli degildir.
// console.log(a,b) //! error