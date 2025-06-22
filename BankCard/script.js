const inputNumber = document.querySelector(".input-number");
const inputHolder = document.querySelector(".input-holder");
const cardNumber = document.querySelector(".card-number");

// addding card Number
inputNumber.addEventListener("input", function () {
  let rawValue = inputNumber.value.replace(/\D/g, " ").slice(0, 16);
  inputNumber.value = rawValue;

  const maskedValue = rawValue.padEnd(16, "#");
  const formatted = maskedValue.match(/.{1,4}/g).join(" ");

  cardNumber.innerHTML = formatted;
  cardNumber.classList.add("border");
  inputNumber.addEventListener("blur", function () {
    cardNumber.classList.remove("border");
  });
});
inputNumber.addEventListener("blur", function () {
  cardNumber.classList.remove("border");
});

// Adding Card Holder
const cardNameBox = document.querySelector(".card-name");
const cardName = document.querySelector(".cardName");
inputHolder.addEventListener("input", function () {
  cardName.innerHTML = inputHolder.value;
  cardNameBox.classList.add("border");
  inputHolder.addEventListener("blur", () => {
    cardNameBox.classList.remove("border");
  });
});

// Adding Month and Year on the card
const expiresBox = document.querySelector(".ex-date");
const validMonth = document.querySelector(".validMonth");
const validYear = document.querySelector(".validYear");

const selectMonth = document.getElementById("month");
const selectYear = document.getElementById("year");

selectMonth.addEventListener("change", function () {
  validMonth.innerHTML = selectMonth.value;
  expiresBox.classList.add("border");
  selectYear.addEventListener("change", function () {
    validYear.innerHTML = selectYear.value;
    expiresBox.classList.add("border");
  });
  selectMonth.addEventListener("blur", () => {
    expiresBox.classList.remove("border");
  });
});

// Adding CVV number and rotate card to other side

const inputCvv = document.getElementById("input-cvv");
const bankcardFront = document.querySelector(".bankcard-front");
const bankcardBack = document.querySelector(".bankcard-back");
const cvvBackBox = document.querySelector(".cvv-back");

inputCvv.addEventListener("focus", () => {
  inputCvv.style.border = "1px solid lightskyblue";
  bankcardFront.classList.add("rotate-front");
  bankcardBack.classList.add("rotate-back");
  cvvBackBox.classList.add("border");
});

inputCvv.addEventListener("blur", () => {
  inputCvv.style.border = "1px solid rgb(163, 173, 177)";
  bankcardFront.classList.remove("rotate-front");
  bankcardBack.classList.remove("rotate-back");
  cvvBackBox.classList.remove("border");
});

const cvvNumber = document.querySelector(".cvv-number");
inputCvv.addEventListener("input", function () {
  cvvNumber.innerHTML = inputCvv.value;
});

const submitBtn = document.getElementById("sub-btn");
const informationSide = document.querySelector(".info-side");
const cardContainer = document.querySelector(".card-container");
submitBtn.addEventListener("click", function () {
  expiresBox.classList.remove("border");
  informationSide.classList.add("hidden");
  cardContainer.classList.add("anime");
});
