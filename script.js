const form = document.querySelector('#form');
const Uname = document.querySelector('#Uname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const Cpassword = document.querySelector('#Cpassword');


form.addEventListener('submit',(e)=>{

    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const UnameVal = Uname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const CpasswordVal = Cpassword.value.trim();
    let success = true;

    if(UnameVal === ''){
        success = false;
        seterror(Uname,'Username is required')
    }
    else{
        setsuccess(Uname)
    }

    if(emailVal === ''){
        success = false;
        seterror(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        seterror(email,'Please enter a valid email')
    }
    else{
        setsuccess(email)
    }

    if(passwordVal === ''){
        success = false;
        seterror(password,'password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        seterror(password,'password must be atleast 8 characters')
    }
    else{
        setsuccess(password)
    }

    if(CpasswordVal === ''){
        success = false;
        seterror(Cpassword,'Confirm password is required')
    }
    else if(CpasswordVal !== passwordVal){
        success = false;
        seterror(Cpassword,'password does not match')
    }
    else{
        setsuccess(Cpassword)
    }

    return success;

}

function seterror(element,message){
    const formControl = element.parentElement;
    const errorElement = formControl.querySelector('.error')

    errorElement.innerText = message;
    formControl.classList.add('error')
    formControl.classList.remove('success')
}

function setsuccess(element){
    const formControl = element.parentElement;
    const errorElement = formControl.querySelector('.error')

    errorElement.innerText = '';
    formControl.classList.add('success')
    formControl.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function link(){
    window.location.href ="./index.html"
}