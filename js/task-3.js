`use strict`

const listenerInput = document.querySelector("#name-input");

const listenerOutput = document.querySelector("#name-output");

listenerInput.addEventListener('input', (event) => {
    if (event.target.value.trim() !== "") {
        listenerOutput.textContent = event.target.value;
    }

    else {
        listenerOutput.textContent = "Anonymous";
    }
})