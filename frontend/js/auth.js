const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";
        toggle.textContent = "🙈";

    }else{

        password.type = "password";
        toggle.textContent = "👁";

    }

});

const form=document.getElementById("loginForm");

const email=document.getElementById("email");

const emailError=document.getElementById("emailError");

const passwordError=document.getElementById("passwordError");

const loginBtn=document.getElementById("loginBtn");

form.addEventListener("submit",(e)=>{

e.preventDefault();

emailError.textContent="";

passwordError.textContent="";

let valid=true;

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email.value.trim()===""){

emailError.textContent="Email is required.";

valid=false;

}

else if(!emailPattern.test(email.value)){

emailError.textContent="Invalid email.";

valid=false;

}

if(password.value.trim()===""){

passwordError.textContent="Password is required.";

valid=false;

}

else if(password.value.length<6){

passwordError.textContent="Minimum 6 characters.";

valid=false;

}

if(!valid) return;

loginBtn.disabled=true;

loginBtn.textContent="Logging in...";

setTimeout(()=>{

loginBtn.disabled=false;

loginBtn.textContent="Login";

alert("Frontend validation passed.");

},1500);

});