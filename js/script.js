const form = document.querySelector(".donateForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const button = document.querySelector(".formButton");
const successMessage = document.querySelector(".successMessage");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const expDate = document.querySelector("#expDate");
const expDateError = document.querySelector("#expDateError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");
const cardholderName = document.querySelector("#cardholderName");
const cardholderNameError = document.querySelector("#cardHolderNameError");


function validateForm(event) {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(name.value, 6) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }

    if(checkLength(adress.value, 6) === true) {
        adressError.style.display = "none";
    }
    else {
        adressError.style.display = "block";
    }

    if(checkLength(city.value, 3) === true) {
        cityError.style.display = "none";
    }
    else {
        cityError.style.display = "block";
    }

    if(checkLength(cardNumber.value, 16) === true) {
        cardNumberError.style.display = "none";
    }
    else {
        cardNumberError.style.display = "block";
    }

    if(checkLength(expDate.value, 5) === true) {
        expDateError.style.display = "none";
    }
    else {
        expDateError.style.display = "block";
    }

    if(checkLength(cvc.value, 3) === true) {
        cvcError.style.display = "none";
    }
    else {
        cvcError.style.display = "block";
    }

    if(checkLength(cardholderName.value, 6) === true) {
        cardholderNameError.style.display = "none";
    }
    else {
        cardholderNameError.style.display = "block";
    }

    if (validateEmail(email.value) && checkLength(name.value, 6) && checkLength(adress.value, 6)&& checkLength(city.value, 3) && checkLength(cardNumber.value, 16)&& checkLength(expDate.value, 5) && checkLength(cvc.value, 3) && checkLength(cardholderName.value, 5)) {
        successMessage.style.display = "block";
    }
        

};

form.addEventListener("submit", validateForm);


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}