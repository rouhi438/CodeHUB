//define required elements in J-S
const colorButtons = document.querySelectorAll(".color-btn");
const bgSneakersColor = document.querySelectorAll(
  ".BGcolor-green, .BGcolor-red, .BGcolor-blue, .BGcolor-gray, .BGcolor-orange"
);
const newBtn = document.querySelector(".new");
const addToCart = document.querySelector(".add");
const cartColor = document.querySelector(".cart-shop");

// define BGcolors with color code in Array to use
const BGcolors = {
  blue: {
    bgClass: "BGcolor-blue",
    colorCode: "#2175f5",
  },
  red: {
    bgClass: "BGcolor-red",
    colorCode: "#f84848",
  },
  green: {
    bgClass: "BGcolor-green",
    colorCode: "#29b864",
  },
  orange: {
    bgClass: "BGcolor-orange",
    colorCode: "#ff5521",
  },
  gray: {
    bgClass: "BGcolor-gray",
    colorCode: "#444444",
  },
};

// define the initail color of project
let currentColor = "#444444";

// define first FUNCTION to run the project with press the colorButtons
colorButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const selectedColor = btn.classList[0];

    // Removing the active style from colorButtons

    colorButtons.forEach((element) =>
      element.classList.remove("style-color-btn")
    );

    // Adding style to colorButtons after the press
    btn.classList.add("style-color-btn");

    //
    bgSneakersColor.forEach((sneaker) =>
      sneaker.classList.remove("sneaker-active")
    );

    // activate one of the sneakers

    const activeSneaker = document.querySelector(
      `.${BGcolors[selectedColor].bgClass}`
    );
    activeSneaker.classList.add("sneaker-active");

    // activate BGcolor of 'AddToCart' & 'New' & cart btns like sneakers
    addToCart.style.backgroundColor = BGcolors[selectedColor].colorCode;
    newBtn.style.backgroundColor = BGcolors[selectedColor].colorCode;
    cartColor.style.color = BGcolors[selectedColor].colorCode;

    // define the Share icon
    const shareIcon = document.querySelectorAll(".share");

    // define the initial color for share icon
    shareIcon.forEach((icon) => (icon.style.color = "#000"));

    const aactiveButton = activeSneaker.querySelector(".share");
    aactiveButton.style.color = BGcolors[selectedColor].colorCode;

    // Update size buttons style to initial style
    const sizeButtons = document.querySelectorAll(".size-num");
    function resetSizeButtonStyle() {
      sizeButtons.forEach((btn) => {
        btn.style.backgroundColor = "#eee";
      });
    }
    // define a function to apply sizeBtn's BGcolor like other elements
    sizeButtons.forEach((sizeBtn) => {
      sizeBtn.addEventListener("click", function () {
        resetSizeButtonStyle();
        sizeBtn.style.backgroundColor = BGcolors[selectedColor].colorCode;
      });
    });
    //resetting the sizeBtn's BGcolor same time to click onother colorButtons
    resetSizeButtonStyle();
    sizeBtn.style.backgroundColor = "#eee";
  });
});
// define the textContent of buying cart with click on the addToCart
let cartCount = 0;
const buyCount = document.querySelector(".buy-count");
addToCart.addEventListener("click", function () {
  cartCount++;
  buyCount.style.display = "block";
  buyCount.textContent = cartCount;
});
