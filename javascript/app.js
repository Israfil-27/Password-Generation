const passwordLength = document.querySelector(".passwordlength input");
const generateBtn = document.querySelector(".button-password");
const options = document.querySelectorAll(".option input");
const lengthslider = document.querySelector(".passindigator");

const updatepasslength = () => {
  let passwordLength1 = document.querySelector(".passlength span");
  passwordLength1.innerText = passwordLength.value;
};
let caracterData = {
  Lovercase: "qwertyuiopasdfghjklzxcvbnm",
  Uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
  number: "1234567890",
  Symbol: "()_+{}?><~`[];.,-=",
};
const PasswordGenerate = () => {
  const passwordText = document.querySelector(".passtext input");
  let staticPassword = "";
  randomPassword = "";
  options.forEach((option) => {
    if (option.checked) {
      staticPassword += caracterData[option.id];
    }
  });
  for (let i = 0; i < passwordLength.value; i++) {
    randomPassword +=
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
  }
  passwordText.value = randomPassword;
  passindigatorlength();
};
const passindigatorlength = () => {
  if (passwordLength.value < 8) {
    // lengthslider.id = "red";
    lengthslider.style.background = "red";
    lengthslider.style.width = "33%";
  } else if (passwordLength.value < 16) {
    // lengthslider.id = "yellow";
    lengthslider.style.background = "yellow";
  } else {
    // lengthslider.id = "green";
    lengthslider.style.background = "green";
  }
};

generateBtn.addEventListener("click", PasswordGenerate);
passwordLength.addEventListener("input", updatepasslength);
