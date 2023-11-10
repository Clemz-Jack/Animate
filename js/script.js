
// adding js style 

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInput();

})

function checkInput() {

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();  
  const password2Value = password2.value.trim();
 
// validation for email
if(emailValue === '') {
  setErrorFor(email, 'Email cannot be blank');
}

else{
  setSuccessFor(email);
}

// validation for password

if(passwordValue === '') {
  setErrorFor(password, ' Insert Your Password');
}

else if(passwordValue.length < 5) {
setErrorFor(password, 'password must be at least 5 characters long')
}

else{
  setSuccessFor(password);
}

//validation for password 2


if(password2Value === '') {
  setErrorFor(password2, ' This field cannot be blank');
}



else if(passwordValue !== password2Value) {
  setErrorFor(password2, 'Password  not Match');
  }

else {
  setSuccessFor(password2);
}


// validation  for usrname
  if(usernameValue === '') {

    setErrorFor(username, 'Username cannot be blank');
    
  }

  else if(usernameValue.length < 6){
    setErrorFor(username, 'Username must be at least 6 characters long');

  }

  
  else {
    setSuccessFor(username);
  }
}


// Additional function
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');



  small.innerText = message;

  formControl.className = "form-control error "; 
}




function setSuccessFor(input) {
  const formControl = input.parentElement;


  formControl.className = "form-control success "; 
}