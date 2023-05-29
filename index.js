const inputHtml = document.querySelector("[data-name='input']");
const outputHtml = document.querySelector("[data-name='output']");
const resultButton = document.querySelector("[data-name='result-button']");
const switchButton = document.querySelector("[data-name='switch-type']");
const switchSystem = document.querySelector("[data-name='switch-system']");
const spanInputType = document.querySelector("[data-name='input-type']");
const spanInputSystem = document.querySelector("[data-name='input-system']");

let consoleCheck = [
	inputHtml,
	outputHtml,
	resultButton,
	switchButton,
	switchSystem,
	spanInputType,
	spanInputSystem,
];
console.log(consoleCheck);

function defaultSet() {
	spanInputType.innerHTML = "<strong>Text</strong>";
	spanInputSystem.innerHTML = "<strong>Button System</strong>";
}

function liveOutputInput() {
	if (resultButton.classList.contains("d-none")) {
		return;
	} else {
		resultButton.classList.add("d-none");
	}

	inputHtml.addEventListener("input", () => {
		let inputValues = inputHtml.value;
		outputHtml.innerHTML = inputValues;
	});
}

function buttonOutputInput() {
	if (resultButton.classList.contains("d-none")) {
		resultButton.classList.remove("d-none");
	}

	resultButton.addEventListener("click", () => {
		outputHtml.innerHTML = inputHtml.value;
	});
}

function switchTypeInput() {
	switchButton.addEventListener("input", () => {
		if (switchButton.checked) {
			inputHtml.type = "number";
			inputHtml.value = "";
			outputHtml.innerHTML = "";
			spanInputType.innerHTML = "<strong>Number</strong>";
		} else {
			inputHtml.type = "text";
			inputHtml.value = "";
			outputHtml.innerHTML = "";
			spanInputType.innerHTML = "<strong>Text</strong>";
		}
	});
}

function switchSystemInput() {
	switchSystem.addEventListener("input", () => {
		if (switchSystem.checked) {
			inputHtml.value = "";
			outputHtml.innerHTML = "";
			spanInputSystem.innerHTML = "<strong>Real Time System</strong>";
			liveOutputInput();
		} else {
			inputHtml.value = "";
			outputHtml.innerHTML = "";
			spanInputSystem.innerHTML = "<strong>Button System</strong>";
			buttonOutputInput();
		}
	});
}

defaultSet();
switchTypeInput();
switchSystemInput();
