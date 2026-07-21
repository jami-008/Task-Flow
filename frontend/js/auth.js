function showToast(message){

    const toast=document.getElementById("toast");

    const text=document.getElementById("toastMessage");

    text.textContent=message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

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

loginBtn.innerHTML='<span class="spinner"></span>';

setTimeout(()=>{

loginBtn.disabled=false;

loginBtn.innerHTML="Login";

showToast("Login successful (Frontend Demo)");

},1500);

});


document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        form.requestSubmit();

    }

});