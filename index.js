const inputHtml = document.querySelector("[data-name='input']");
const outputHtml = document.querySelector("[data-name='output']");
const resultButton = document.querySelector("[data-name='result-button']");
const switchButton = document.querySelector("[data-name='switch-type']");
const switchSystem = document.querySelector("[data-name='switch-system']");
const spanInputType = document.querySelector("[data-name='input-type']");
const spanInputSystem = document.querySelector("[data-name='input-system']");

function defaultSet(input, text) {
	if (input == "type") {
		spanInputType.innerHTML = `<strong>${text}</strong>`;
	} else if (input == "system") {
		spanInputSystem.innerHTML = `<strong>${text}</strong>`;
	} else {
		spanInputType.innerHTML = `<strong>Text</strong>`;
		spanInputSystem.innerHTML = `<strong>Button System</strong>`;
		resultButton.addEventListener("click", buttonOutputInput)
	}
}

function liveOutputInput() {
	outputHtml.innerHTML = inputHtml.value;
}

function buttonOutputInput() {
	outputHtml.innerHTML = inputHtml.value;
}

function switchTypeInput() {
	inputHtml.value = "";
	outputHtml.innerHTML = "";
	if (switchButton.checked) {
		inputHtml.type = "number";
		defaultSet("type", "Number")
	} else {
		inputHtml.type = "text";
		defaultSet("type", "Text")
	}
}

function switchSystemInput() {
	inputHtml.value = "";
	outputHtml.innerHTML = "";
	if (switchSystem.checked) {
		defaultSet('system', "Real Time System")
		resultButton.classList.add('d-none');
		inputHtml.addEventListener("input", liveOutputInput)
		resultButton.removeEventListener("click", buttonOutputInput)
	} else {
		defaultSet('system', "Button System")
		resultButton.classList.remove('d-none');
		inputHtml.removeEventListener("input", liveOutputInput)
		resultButton.addEventListener("click", buttonOutputInput)
	}
}

defaultSet();
switchTypeInput();
switchSystemInput();

switchButton.addEventListener("change", switchTypeInput);
switchButton.addEventListener("change", switchSystemInput);

switchSystem.addEventListener("change", switchTypeInput);
switchSystem.addEventListener("change", switchSystemInput);
