const passwordLength=document.querySelector(".passwordlength input")
generateBtn=document.querySelector(".button-password")
options=document.querySelectorAll(".option input")



const updatepasslength=()=>{
let passwordLength1=document.querySelector(".passlength span")
passwordLength1.innerText=passwordLength.value
}
let caracterData={
    Lovercase:"qwertyuiopasdfghjklzxcvbnm",
    Uppercase:"QWERTYUIOPASDFGHJKLZXCVBNM",
    number:"1234567890",
    Symbol:"()_+{}?><~`[];.,-="
}
const PasswordGenerate=()=>{
    let staticPassword=""
    randomPassword=""
    options.forEach(option => {
        if(option.checked){
            staticPassword+=caracterData[option.id]
        }
    });
    for (let i = 0; i < passwordLength.value; i++) {
        randomPassword+=staticPassword[Math.floor(Math.random()*staticPassword.length)]
    }
    console.log(randomPassword)
   
}
PasswordGenerate()
generateBtn.addEventListener("click",PasswordGenerate)
passwordLength.addEventListener("input",updatepasslength)
