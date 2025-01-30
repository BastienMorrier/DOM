/*
*/
// 1.
const input = document.querySelector("input");
const displayFirstname = document.querySelector("#display-firstname");

input.addEventListener("keypress", ()=>{
    displayFirstname.textContent = input.value;
});

// 2.
const inputNumber = document.querySelectorAll("input")[1];
const displayNumber = document.querySelector("#a-hard-truth");

inputNumber.addEventListener("keyup", ()=>{
    if(inputNumber.value>18){
        displayNumber.style.visibility ="visible";
    }else{
        displayNumber.style.visibility ="hidden";
    }
});

// 3.
const inputPassword = document.getElementById("pwd");
const verify = document.getElementById("pwd-confirm");

verify.addEventListener("keyup", ()=>{
    console.log(verify.value);
    if(inputPassword.value !== verify.value || inputPassword.value < 6){
        inputPassword.style.border = "2px solid red";
    }
    else{
        
        inputPassword.style.border = "2px solid black";
    }
});

// 4.

// const verify = document.getElementById("pwd-confirm");
const lightMode = document.getElementById("toggle-darkmode");
const body = document.querySelector("body");

lightMode.addEventListener("change", (event) => {
    console.log("console");
    if(event.target.value === "dark"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});