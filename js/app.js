document.getElementById('login-btn').addEventListener('click', function(){

    const userEmail = document.getElementById('user-email');
    const emailValue = userEmail.value;
    console.log(emailValue);

    const userPassword = document.getElementById('user-password');
    const passwordValue = userPassword.value;
    console.log(passwordValue);

    if(emailValue === 'mybank@a2z.com' && passwordValue === 'New123'){
        window.location.href = 'my-bank.html';
    }
    else{
        alert('Invalid user name or password')
    }


})