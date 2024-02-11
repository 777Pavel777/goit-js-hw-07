`use strict`

const listenerInput = document.querySelector("#name-input");

const listenerOutput = document.querySelector("#name-output");

listenerInput.addEventListener('input', (event) => {
    const trimmedValue = event.target.value.trim();
    listenerOutput.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
});