
const data = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

let captcha = ""

for (let i = 0; i < 6; i++) {
    captcha = captcha + data[Math.floor(Math.random() * 62)]
}

const myH3 = document.querySelector("h3")
const myInput = document.querySelector("input")
const myButton = document.querySelector("button")

myButton.addEventListener("click", function () {
    if (myInput.value == captcha) {
        console.log("Captcha is valid");
    } else {
        console.log("Captcha is invalid");
    }
})

myH3.textContent = captcha