function validateForm(){
    var x =document.forms["myform"]["fname"].value;
    if (x =="") {
        alert("Email must be filled out");
        return false;
    }
}
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onsubmit);

function onSubmit(e) {
    e.preventDefault(); 

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
      msg.innerHTML = 'please enter all fields';
      
      setTimeout(() => msg.remove(), 3000);
    } else{
        console.log('Successfully Sent');
    }
}
