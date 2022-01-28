"use strict";

const google = document.getElementById('google');
const bing = document.getElementById('bing');
const login = document.getElementById('login');
const searchbar = document.getElementById('searchbar');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const errormessage = document.getElementById('errormessage');
const form = document.getElementById('form');
const overlay = document.getElementById('overlay');

let signedin = false;

google.addEventListener('click', function() {
    if(signedin == true) {
        let input = searchbar.value;
        location.assign(`http://www.google.com/search?q=${input}`);
    }
});

bing.addEventListener('click', function() {
    if(signedin == true) {
        let input = searchbar.value;
        location.assign(`https://www.bing.com/search?q=${input}`);
    }
});

confirm.addEventListener('click', function() {
    let u = username.value;
    let p = password.value;
    if(u === "" && p === "") {
        errormessage.innerHTML = 'All fields are required';
    } else if (u === "") {
        errormessage.innerHTML = 'Username is required';
    } else if (p === "") {
        errormessage.innerHTML = 'Password is required';
    } else if (u === "admin" && p === "password123") {
        signedin = true;
        form.style.display = "none";
        overlay.style.filter = "brightness(100%)";
    } else {
        errormessage.innerHTML = 'Invalid username or password';
    }
});

login.addEventListener('click', function() {
    if(signedin == false) {
        form.style.display = "block";
        overlay.style.filter = "brightness(50%)";
    }
});