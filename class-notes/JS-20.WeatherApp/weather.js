const form = document.querySelector("form");
const input = document.querySelector("form input");
const msgSpan = document.querySelector(".msg");
const list = document.querySelector(".container .cities");

localStorage.setItem(
	"apikey",
	EncryptStringAES("8f476966e75f896c4c73cf65cc1e398b")
);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log("form")
	getWeatherDataFromApi();
	form.reset();
});

const getWeatherDataFromApi = async () => {
	// console.log("data")
	const apiKey = DecryptStringAES(localStorage.getItem("apikey"));
	console.log(apiKey);
	const cityName = input.value;
	console.log(cityName);
	const units = "metric";
	const lang = "tr";

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
	console.log(url);

	try {
		const response = await fetch(url).then((res) => res.json());
		console.log(response);

		const { main, name, sys, weather } = response;
		// console.log(name)
		// console.log(response.name)
		const iconUrl = `https://openweathermap.org/img/wn${weather[0].icon}/@2x.png`;
		const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
		console.log(response);
		//? filter, map, reduce, forEach ==> array
		//? forEach => nodeList
		const cityNameSpan = list.querySelectorAll("span");
		console.log(cityNameSpan);

		const filteredArray = [...cityNameSpan].filter(
			(span) => span.innerHTML == name
		);
		if (filteredArray.length > 0) {
			msgSpan.innerText = `You alresdy know the weater for ${name}, Please search for another city 😉`;
			setTimeout(() => {
				msgSpan.innerText = "";
			}, 3000);
			return; //* cod blogunu durdurmak için kullandık
		}

		//console.log(filteredArray);

		const createdLi = document.createElement("li");
		createdLi.classList.add("city");
		createdLi.innerHTML = `
         <h2 > 
         <span>${name}</span>
         <sup>${sys.country}</sup>
         </h2>
         <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
                <img class="city-icon" src="${iconUrlAWS}">
                <figcaption>${weather[0].description}</figcaption>
          </figure>
         `;
		//! ÖNEMLİ!!! append sona ekler prepend başa ekler.
		list.prepend(createdLi); //*sona ekler

		//Capturing => parent to child
		list.addEventListener("click", (e) => {
			alert("List clicked!");
		});
		//Bubbling => child to parent
		createdLi.addEventListener("click", (e) => {
			// alert("li element clicked");
			window.location.href = `https://openweathermap.org/find?q=${name}`;
		});
	} catch (error) {
		msgSpan.innerText = "City not found";
		setTimeout(() => {
			msgSpan.innerText = "";
		}, 3000);
	}
};
