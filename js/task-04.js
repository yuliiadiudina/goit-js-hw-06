let counterValue = 0;
const decrementBtn = document.querySelector("[data-action = 'decrement']");
const incrementBtn = document.querySelector("[data-action = 'increment']");
const valueEl = document.querySelector("#value");

const DecrementClick = () => {

  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const IncrementClick = () => {
 
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", DecrementClick);
incrementBtn.addEventListener("click", IncrementClick);