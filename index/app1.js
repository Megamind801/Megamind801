const word = document.querySelector('input').value
const result = document.querySelector('p');
const button = document.querySelector('button');
const emp_string = '';

function ans(){
    let i;
    word = word.value;
    i = word.length - 1
for(i; i >= 0; i--){
    emp_string = emp_string + word[i];
}
if(emp_string == word){
    result.textContent = `${word} is a Palindrome`
}else{
    result.textContent = `${word} is not a Palindrome`
}
}

button.addEventlistener('click',ans);