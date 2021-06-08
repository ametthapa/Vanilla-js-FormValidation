const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var show =false;


function toggleP(){
    if(show === true){
        console.log('before');
        document.getElementById('password2').type='password';
        document.getElementById('icon2').className='fas fa-eye icon'
        show = false;
    } else {
        console.log('after');
        document.getElementById('password2').type='text';
        document.getElementById('icon2').className='fas fa-eye-slash icon'
        show = true;
    }

}


// SHow and hide password through icon and toggle
function toggle(){
    if(show === true){
        console.log('before1'); 
        document.getElementById('password').type='password';
        document.getElementById('icon').className='fas fa-eye icon'
        show = false;
    } else {
        console.log('after1');

        document.getElementById('password').type='text';
        document.getElementById('icon').className='fas fa-eye-slash icon'
        show = true;
    }

}

//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small= formControl.querySelector('small');
    small.innerText = message;
}

//show input success message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
} 

//Check email is valiid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else {
        showError(input,'Email is not valid');
    }
}
function checkPassword(input){
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showError(input,' contain a number, lowercase & uppercase');
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} is too small`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} is too long`);
    }else{
        showSuccess(input);
    }
}

function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords don't match");
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkEmail(email);
    checkPassword(password);
    checkPasswordMatch(password,password2);
  
})
