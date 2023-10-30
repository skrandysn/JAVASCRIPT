/* ======================================================
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
    ? alert("Please enter a value")
    : (ul.innerHTML += `<li>${langInput.value}</li>`);
  langInput.value = "";
  langInput.focus();
});

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
});

window.addEventListener("load", () => {
  langInput.focus();
});

//? mousedown event

const jsLi = document.querySelector("#js");
jsLi.addEventListener("mousedown", () => {
  jsLi.style.backgroundColor = "blue";
});

//? mouseup event
const reactLi = document.getElementById("react");
reactLi.addEventListener("mouseup", () => {
  reactLi.style.color = "green";
});

//? scroll event

const elementDiv = document.querySelector("div#scroll-box");

const outputP = document.querySelector("p#output");

elementDiv.addEventListener("scroll", () => {
  outputP.innerHTML = "Scroll yapılıyor";
  setTimeout(() => {
    outputP.innerHTML = "Waiting on scroll events...";
  }, 1000);
});

//? selection event

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

//? double click event

const h2 = document.querySelector("#sec");

h2.addEventListener("dblclick", () => {
  h2.classList.toggle("large");
});

//? blur event

const number = document.querySelector('input[type="number"]');
const password = document.querySelector('input[type="password"]');

number.addEventListener("focus", () => {
//event.target.style.backgroundColor = "pink";
  number.style.backgroundColor = "pink";
});
password.addEventListener("blur", () => {
  //   event.target.style.backgroundColor = "pink";
  password.style.backgroundColor = "red";
});
11:05
//? input event
function updateValue(e) {
  log.textContent = e.target.value;
}

const lastInput = document.querySelector("#lastInput");
const log = document.getElementById("values");

lastInput.addEventListener("input", updateValue);

//? input event
function updateValue(e) {
  log.textContent = e.target.value;
}

const lastInput = document.querySelector("#lastInput");
const log = document.getElementById("values");

lastInput.addEventListener("input", updateValue);





