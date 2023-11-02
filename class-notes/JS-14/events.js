//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

const h1 = document.querySelector("h1");

h1.onmouseover = function () {
	h1.style.color = "red";
};

h1.onmouseout = function () {
	h1.style.color = "black";
};

const print = () => {
	document.write("PRINT");
};

// print();

const btn = document.querySelector("#btn");

// btn.onclick = () => {
//   alert("Btn clicked");
// };

const langInput = document.getElementById("input");
const ul = document.createElement("ul");
btn.after(ul);

btn.addEventListener("click", () => {
	//! ÖDEV : space tuşuna basıldığında alert oluşturun !!!
	console.log(langInput.value);
	!langInput.value
		? alert("Please enter a value") //** boş tıklandığında verilen değer
		: (ul.innerHTML += `<li>${langInput.value}</li>`);
	langInput.value = "";
	langInput.focus();
});

//* inputa yazıp enter yaptığında kaydediyor.
langInput.addEventListener("keydown", (event) => {
	//   console.log(event);
	if (event.code === "Enter") {
		btn.click();
	}
});

// window.onload = print();
langInput.addEventListener("keydown", (event) => {
	if (event.code === "Backspace") {
		langInput.style.outlineColor = "orange";
	}
}); /**buton etrafı orange oldu**/

window.addEventListener("load", () => {
	langInput.focus();
});

//? mousedown event /**tıkladığımızda backgrond u mavi oldu */ ( kullanıcının bir fare düğmesini basılı tuttuğunda tetiklenir. Bu olay, fare düğmesine basıldığı anı yakalamak için kullanılır.)

const jsLi = document.querySelector("#js");
jsLi.addEventListener("mousedown", () => {
	jsLi.style.backgroundColor = "blue";
});

//? mouseup event /**react a tıkladığımızda yeşil oldu */ (kullanıcının bir fare düğmesini bıraktığında (basılı durumdan serbest bıraktığında) tetiklenir.)
const reactLi = document.getElementById("react");
reactLi.addEventListener("mouseup", () => {
	reactLi.style.color = "green";
});

//? scroll event ( bir web sayfasının içeriğinin kullanıcı tarafından kaydırıldığında tetiklenir. Bu olay, sayfanın yukarı, aşağı, sola veya sağa doğru kaydırıldığında gerçekleşir.)

const elementDiv = document.querySelector("div#scroll-box");

const outputP = document.querySelector("p#output");

elementDiv.addEventListener("scroll", () => {
	outputP.innerHTML = "Scroll yapılıyor";
	setTimeout(() => {
		outputP.innerHTML = "Waiting on scroll events...";
	}, 1000);
});

//? selection event ( kullanıcının bir web sayfasında metin seçimini değiştirdiğinde tetiklenir. )

function selectLog(event) {
	const log = document.querySelector("p#log");
	const selection = event.target.value.substring(
		event.target.selectionStart,
		event.target.selectionEnd
	);
	log.textContent = `You selected: ${selection}`;
}

const inputSelect = document.querySelector("input#sel");

inputSelect.addEventListener("select", selectLog);

//? double click event ( bir kullanıcının bir nesneye (örneğin bir düğme veya bir div elementi) çift tıkladığında tetiklenir.)

const h2 = document.querySelector("#sec");

h2.addEventListener("dblclick", () => {
	h2.classList.toggle("large");
});

//? blur event (tıklanıp çıktığında renk verir.)

const number = document.querySelector('input[type="number"]');
const password = document.querySelector('input[type="password"]');

number.addEventListener("focus", () => {
	//   event.target.style.backgroundColor = "pink";
	number.style.backgroundColor = "pink";
});
password.addEventListener("blur", () => {
	//   event.target.style.backgroundColor = "pink";
	password.style.backgroundColor = "red";
});
