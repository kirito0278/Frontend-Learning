let form = document.querySelector("form");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");

form.addEventListener("submit",function(params) {
    params.preventDefault();
    document.querySelector("#emailError").textContent=""
    document.querySelector("#passwordError").textContent=""
    document.querySelector("#result").textContent=""

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{8,}$/;

    let isValid = true;
    if(!(emailRegex.test(email.value))){
        if(email.value===""){
            document.querySelector("#emailError").textContent="Input your Email"
        }else{
            document.querySelector("#emailError").textContent="Wrong Email"
        }
        isValid = false;
    }
    if(!(passwordRegex.test(pass.value))){
        if(pass.value===""){
            document.querySelector("#passwordError").textContent="Input your Password"
        }else{
            document.querySelector("#passwordError").textContent="Wrong Password"
        }
        isValid = false;
    }

    if(isValid){
        document.querySelector("#result").textContent="Correct!!!"
    }
})