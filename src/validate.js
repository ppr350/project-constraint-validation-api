import { zip } from "lodash"
import { form, email, emailError, country, countryError, zipCode, zipCodeError, password, passwordError, confirmPassword, confirmPasswordError } from "./index"

function validateForm() {

    email.addEventListener('input', (e) => {
        if (email.validity.valid) {
            emailError.textContent = ''
            emailError.className = 'error'
        } else {
            showEmailError()
        }
    })

    country.addEventListener('input', (e) => {
        if (country.validity.valid) {
            countryError.textContent = ''
            countryError.className = 'error'
        } else {
            showCountryError()
        }
    })

    zipCode.addEventListener('input', (e) => {
        if (zipCode.validity.valid) {
            zipCodeError.textContent = ''
            zipCodeError.className = 'error'
        } else {
            showZipCodeError()
        }
    })

    password.addEventListener('input', (e) => {
        if (password.validity.valid) {
            passwordError.textContent = ''
            passwordError.className = 'error'
        } else {
            showPasswordError()
        }
    })

    confirmPassword.addEventListener('input', (e) => {
        if (confirmPassword.value == password.value) {
            confirmPasswordError.textContent = ''
            confirmPasswordError.className = 'error'
        } else {
            showConfirmPasswordError()
        }
    })

    form.addEventListener('submit', (e) => {
        if (!email.validity.valid) {
            showEmailError()
        } if (!country.validity.valid) {
            showCountryError()
        } if (!zipCode.validity.valid) {
            showZipCodeError()
        } if (!password.validity.valid) {
            showPasswordError()
        } if (!confirmPassword.validity.valid) {
            showConfirmPasswordError()
        } else {
            email.value = ''
            country.value = ''
            zipCode.value = ''
            password.value = ''
            confirmPassword.value = ''
            alert('HIGH FIVE!')
        }
        e.preventDefault()
    })
}



function showEmailError() {
    console.log(email.validity)
    if (email.validity.valueMissing || email.validity.patternMismatch || email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email address.'
    } else if (email.validity.tooShort || email.validity.tooLong) {
        emailError.textContent = 'Email address should be between 3 to 64 characters long.'
    } 
    emailError.className = 'error active'
}

function showCountryError() {
    console.log(country.validity)
    if (country.validity.valueMissing || country.validity.patternMismatch || country.validity.typeMismatch) {
        countryError.textContent = 'Please enter a valid country name.'
    } else if (country.validity.tooShort || country.validity.tooLong) {
        countryError.textContent = 'Country name should be between 3 to 15 characters long.'
    }
    countryError.className = 'error active'
}

function showZipCodeError() {
    console.log(zipCode.validity)
    if (zipCode.validity.valueMissing || zipCode.validity.patternMismatch || zipCode.validity.typeMismatch) {
        zipCodeError.textContent = 'Please enter a valid zip-code.'
    } else if (zipCode.validity.tooShort || zipCode.validity.tooLong) {
        zipCodeError.textContent = 'Zip-code should be between 4 to 15 characters long.'
    }
    zipCodeError.className = 'error active'
}

function showPasswordError() {
    console.log(password.validity)
    if (password.validity.valueMissing || password.validity.patternMismatch || password.validity.typeMismatch) {
        passwordError.textContent = 'Please enter a valid password.'
    } else if (password.validity.tooShort || password.validity.tooLong) {
        passwordError.textContent = 'Password should be minimum 8 charaters long.'
    }
    passwordError.className = 'error active'
}

function showConfirmPasswordError() {
    console.log(confirmPassword.validity)
    if (confirmPassword.validity.valueMissing || confirmPassword.validity.patternMismatch || confirmPassword.validity.typeMismatch) {
        confirmPasswordError.textContent = 'Please enter a valid password.'
    } else if (confirmPassword.validity.tooShort || confirmPassword.validity.tooLong) {
        confirmPasswordError.textContent = 'Password should be minimum 8 charaters long.'
    }
    confirmPasswordError.className = 'error active'
}

export { validateForm }
