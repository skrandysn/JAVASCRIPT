//! NewGeneration Operators

const car = {
	name: "BMW",
	model: 1990,
	engine: 1.6,
	colors: ["blue", "purple"],
};

//* console.log(car.name);
//* console.log(car.model);
//* console.log(car.engine);
//* console.log(car.colors);

const { name, model, engine, colors } = car; //? destructure

//! Değiştirme
//! 1-key de değişiklik
const { name: ad, model, engine, colors: renkler } = car;
//* name ve colors değiştirdiğimiz için clg de değişitirilen keyle çağırmak lazım(ad,renkler)

console.log(ad);
console.log(renkler);

//! 2- valu de değişiklik

const { name, model, engine: motor, colors } = car;

car.engine = 4.0;
console.log(motor, car);

//!NESTED

const cars = {
	car1: {
		name: "BMW",
		model: 1990,
		engine: 1.6,
	},
	car1: {
		name: "Mercedes",
		model: 2022,
		engine: 2.0,
	},
};

console.log(cars);
console.log(cars.car1);
console.log(cars.car1.name);

const { car1, car2 } = cars; //*destructure ettik
console.log(car1);

//! Nested Yapıda Destructure
const {
	car1: { name, engine },
	car2: { model },
} = cars;

console.log(cars);
console.log(cars.car1);
console.log(cars.car1.name);
console.log(name);
console.log(engine);
console.log(cars.car1.model);

//!Array de Destructure (köşeli parantezle yazılır)

const names = ["sezer", "mehmer", "ayse", "fatma", "yeliz"];
const a = names[1]

const [p1, p2,  , p4] //*1. 2. ve 4. elemen aldı boşluk bırakarak üçüncü elemanı almadı 
console.log(p1, p2, p4);

//! rest(...) geriye kalanları alan

const autos = ["anadol", "reno", "bmw","mercedes", "ferrari"]
const [x,y, ...z] = autos //* ...z (geriye kalanları alır)
console.log(x,y,z);

// todo ÖRNEK

const personel = [
  pName: "john",
  surname:"smith",
  job: "developer",
  age:30,
]
 const { age, ...fullName } = personel
 console.log(age);
 console.log(fullName);


 //! Spread (yaymak-açmak)(...) iki Arrayı toplayarak tek bir array haline getirdi extra istediklerinide ekleyebildi
 //*Array Concatination

 const flyingVehicles = ['aircraft', 'helicopter', 'drone']
 const automobile = ['truck', 'suv', 'car']

const a = [flyingVehicles, automobile, 123, sezer] //*iki Arrayı toplayarak tek bir array haline getirdi extra istediklerinide ekledi

console.log(a);

const a = [...automobile, ...flyingVehicles]  //*... ile automobile-flyingVehicles içerisinde yazan elemanları açmış olduk 

//! Max
console.log(Math.max(1,3,6,3,2,98));

const numbers = [3,1,23,49,52,44]
console.log(Math.max(...numbers)); //*number içerisinde ki enbüyük sayıyı verdi

//! Array copy

const a =[3,5,7,9,24]
const b =[-5,-4, ...a -22]

console.log(a);
console.log(b);

const c = [...b]
c.push(-55) //*c ye -55 ekledik

c[5][1] = 88 //* nested olan değerler de deep copy OLMAZ!!!
console.log(c);

//!Object copy

const myObj = { a: 1, b: 2, c: 4}
const herObj = { a: 2, z: 4, c: 3}

const copyObj = {...myObj}

console.log(copyObj);
copyObj.c = 44
console.log(myObj);
console.log(copyObj);

const combinedObjs = {...myObj, ...herObj}
console.log(combinedObjs);