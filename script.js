const submit = document.querySelector(".submit");
//button
const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector(".error");
//error message
const label = document.querySelector(".valid img")
//error img


submit.addEventListener("click",validate);
form.addEventListener("submit",validate);

function validate(e) {
    e.preventDefault()
    
    const inputValue = input.value.trim();
    
    if(!isEmail(inputValue)){
        error.style.visibility= "visible";
        label.style.display = "block"
    }else{
        error.style.visibility= "hidden";
        label.style.display = "none"
    } 
}

function isEmail(input) {
    return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}