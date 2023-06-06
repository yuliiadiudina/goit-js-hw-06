const inputSizeEl = document.querySelector("#font-size-control");     
const text = document.querySelector("#text");

inputSizeEl.addEventListener('input', onNewSize);
text.style.fontSize = `${inputSizeEl.value}px`;

function onNewSize(event) {
    const size = event.currentTarget.value;
    text.style.fontSize = `${size}px`;
}











