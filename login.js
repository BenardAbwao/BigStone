function submit()

const form = document.getElementById( 'form' );
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2 =document.getElementById('password2');

var usernameBool=false;
var emailBool=false;
var passwordBool=false;
var password2Bool=false;

form.addEventListener(' submit',(e)=>{
e.preventDefault();
checkInputs();
});

function checkInputs(){
const usernamevalue=username.ariaValueMax.trim();
const emailvalue=username.ariaValueMax.trim();
const passwordvalue=username.ariaValueMax.trim();
const password2value=username.ariaValueMax.trim();

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
if (password2value === ''){
SetErrorFor(password2, 'password cannot be blank!!');
}else if(
passwordvalue !==password2value){
SetErrorFor(password2, 'passwords mismatch !');
}else{
setSuccessFor(password2);
}}


function SetErrorFor(input, message){
const formControls=input.parentElement;
const small=formControls.querySelector('small');
small.innerText=message;

formControls.className='formControls error';
}
function setSuccessFor(input){
const formControls =input.parentElement;
formControls.className='formControls success';
if
(usernameBool=== true && emailBool === true && passwordBool === true && password2Bool ===true){
alert('All Successful')
}
}
