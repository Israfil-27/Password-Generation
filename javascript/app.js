const passwordLength = document.querySelector(".passwordlength input");
const generateBtn = document.querySelector(".button-password");
const options = document.querySelectorAll(".option input");
const lengthslider = document.querySelector(".passindigator");
const copy = document.querySelector(".passtext span");

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
let staticPassword = "";
let randomPassword = "";
const PasswordGenerate = () => {
  randomPassword = "";
  const passwordText = document.querySelector(".passtext input");
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
    lengthslider.id = "red";
  } else if (passwordLength.value < 16) {
    lengthslider.id = "yellow";
  } else {
    lengthslider.id = "green";
  }
};
const Passwordclick = () => {
  navigator.clipboard.writeText(randomPassword);
  copy.textContent = "done";
  setTimeout(() => {
    copy.textContent = "content_copy";
  }, 3000);
};

copy.addEventListener("click", Passwordclick);
generateBtn.addEventListener("click", PasswordGenerate);
passwordLength.addEventListener("input", updatepasslength);
