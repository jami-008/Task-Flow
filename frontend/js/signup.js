// ==============================
// Elements
// ==============================

const form = document.getElementById("signupForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const signupBtn = document.getElementById("signupBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const termsError = document.getElementById("termsError");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

// ==============================
// Toast
// ==============================

function showToast(message){

    const toast = document.getElementById("toast");
    const text = document.getElementById("toastMessage");

    text.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },3000);

}

// ==============================
// Password Toggle
// ==============================

togglePassword.addEventListener("click",()=>{

    password.type =
        password.type==="password"
        ? "text"
        : "password";

});

toggleConfirmPassword.addEventListener("click",()=>{

    confirmPassword.type =
        confirmPassword.type==="password"
        ? "text"
        : "password";

});

// ==============================
// Password Strength
// ==============================

password.addEventListener("input",()=>{

    let score = 0;

    if(password.value.length>=8) score++;

    if(/[A-Z]/.test(password.value)) score++;

    if(/[0-9]/.test(password.value)) score++;

    if(/[!@#$%^&*]/.test(password.value)) score++;

    switch(score){

        case 1:

            strengthBar.style.width="25%";
            strengthBar.style.background="#ef4444";
            strengthText.textContent="Weak";
            break;

        case 2:

            strengthBar.style.width="50%";
            strengthBar.style.background="#f59e0b";
            strengthText.textContent="Medium";
            break;

        case 3:

            strengthBar.style.width="75%";
            strengthBar.style.background="#3b82f6";
            strengthText.textContent="Good";
            break;

        case 4:

            strengthBar.style.width="100%";
            strengthBar.style.background="#22c55e";
            strengthText.textContent="Strong";
            break;

        default:

            strengthBar.style.width="0%";
            strengthText.textContent="Password strength";

    }

});

// ==============================
// Validation
// ==============================

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    nameError.textContent="";
    emailError.textContent="";
    passwordError.textContent="";
    confirmPasswordError.textContent="";
    termsError.textContent="";

    let valid=true;

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(fullName.value.trim()===""){

        nameError.textContent="Full name is required.";
        valid=false;

    }

    if(email.value.trim()===""){

        emailError.textContent="Email is required.";
        valid=false;

    }

    else if(!emailPattern.test(email.value)){

        emailError.textContent="Invalid email address.";
        valid=false;

    }

    if(password.value.length<8){

        passwordError.textContent="Password must be at least 8 characters.";
        valid=false;

    }

    if(password.value!==confirmPassword.value){

        confirmPasswordError.textContent="Passwords do not match.";
        valid=false;

    }

    if(!terms.checked){

        termsError.textContent="You must accept the terms.";
        valid=false;

    }

    if(!valid) return;

    signupBtn.disabled=true;

    signupBtn.innerHTML='<span class="spinner"></span>';

    setTimeout(()=>{

        signupBtn.disabled=false;

        signupBtn.innerHTML="Create Account";

        showToast("Account created successfully (Frontend Demo)");

    },1500);

});