const inputNumber = document.querySelector(".input_number");
const inputHolder = document.querySelector(".input_holder");
const cardNumber = document.querySelector(".card-number");

// addding card Number
inputNumber.addEventListener("input", function () {
  let rawValue = inputNumber.value.replace(/\D/g, " ").slice(0, 16);
  inputNumber.value = rawValue;

  const maskedValue = rawValue.padEnd(16, "#");
  const formatted = maskedValue.match(/.{1,4}/g).join(" ");

  cardNumber.innerHTML = formatted;
});

// Adding Card Holder
const cardName = document.querySelector(".cardName");
inputHolder.addEventListener("input", function () {
  cardName.innerHTML = inputHolder.value;
});

// Adding Month and Year on the card
const validMonth = document.querySelector(".validMonth");
const validYear = document.querySelector(".validYear");

const selectMonth = document.getElementById("month");
const selectYear = document.getElementById("year");

selectMonth.addEventListener("change", function () {
  validMonth.innerHTML = selectMonth.value;
});

selectYear.addEventListener("change", function () {
  validYear.innerHTML = selectYear.value;
});

// Adding CVV number and rotate card to other side

const inputCvv = document.getElementById("input_cvv");
const bankcardFront = document.querySelector(".bankcard-front");
const bankcardBack = document.querySelector(".bankcard-back");

inputCvv.addEventListener("focus", () => {
  inputCvv.style.border = "1px solid lightskyblue";
  bankcardFront.classList.add("rotate-front");
  bankcardBack.classList.add("rotate-back");
});

inputCvv.addEventListener("blur", () => {
  inputCvv.style.border = "1px solid rgb(163, 173, 177)";
  bankcardFront.classList.remove("rotate-front");
  bankcardBack.classList.remove("rotate-back");
});

const cvvNumber = document.querySelector(".cvv-number");
inputCvv.addEventListener("input", function () {
  cvvNumber.innerHTML = inputCvv.value;
});
