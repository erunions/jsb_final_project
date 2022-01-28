"use strict";

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const errormessage = document.getElementById('errormessage');
const submit = document.getElementById('submit');
const emailregex = new RegExp('^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$');

submit.addEventListener('click', function() {
    if(firstname.value == "" || lastname.value == "" || username.value == "" || email == "" || password == "" || confirmpassword == "") {
        errormessage.innerHTML = 'All fields are required';
    } else if(!emailregex.test(email.value)) {
        errormessage.innerHTML = 'Email is invalid';
    } else if (password.value != confirmpassword.value) {
        errormessage.innerHTML = 'Passwords do not match';
    } else {
        errormessage.style.color = 'rgb(84, 255, 61)';
        errormessage.innerHTML = 'Account created successfully';
    }
});