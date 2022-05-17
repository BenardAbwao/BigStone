const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const verify =document.getElementById('verify');

var usernameBool=false;
var emailBool=false;
var passwordBool=false;
var verifyBool=false;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernamevalue=username.ariaValueMax.trim();
    const emailvalue=username.ariaValueMax.trim();
    const passwordvalue=username.ariaValueMax.trim();
    const verifyvalue=username.ariaValueMax.trim();

    if (usernamevalue === ''){
         SetErrorFor(username, 'username cannot be empty');
    }else{
        usernameBool=true;
        setSuccessFor(username);
    }

    if (emailvalue === ''){
        SetErrorFor(email, 'email cannot be blank');
   }else{
       emailBool=true;
       setSuccessFor(email);
   }
   if (passwordvalue === ''){
    SetErrorFor(password, ' cannot be blank!');
}else{
    passwordBool=true;
   setSuccessFor(password);
}
if (verifyvalue === ''){
    SetErrorFor(verify, 'password acnnot be blank!!');
}else if(
    passwordvalue !==verifyvalue){
        SetErrorFor(verify, 'passwords mismatch !');
    }else{
        setSuccessFor(verify);
    }

}
function SetErrorFor(input, message){}