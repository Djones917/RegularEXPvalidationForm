// Form blur event listeners

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


// validate name function
function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,20}$/;
    
    if(!re.test(name.value)) {
      name.classList.add('is-invalid');
    } else {
      name.classList.remove('is-invalid');
    }
}



// validate zip function
function validateZip() {
  const zip = document.getElementById('zip');
      const re = /^[a-zA-Z]{2,20}$/;
      
      if(!re.test(name.value)) {
        name.classList.add('is-invalid');
      } else {
        name.classList.remove('is-invalid');
      } 
  }



// validate email function
function validateEmail() {
    console.log('email connected!');
}



// validate phone function
function validatePhone() {
    console.log('phone connected!');
}



