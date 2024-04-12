import _ from 'lodash';
import './style.css';
import { validateForm } from "./validate"

const form = document.querySelector('form')
const email = document.getElementById('email')
const emailError = document.querySelector('#email + span.error')
const country = document.getElementById('country')
const countryError = document.querySelector('#country + span.error')
const zipCode = document.getElementById('zip-code')
const zipCodeError = document.querySelector('#zip-code + span.error')
const password = document.getElementById('password')
const passwordError = document.querySelector('#password + span.error')
const confirmPassword = document.getElementById('confirm-password')
const confirmPasswordError = document.querySelector('#confirm-password + span.error')

window.addEventListener('load', () => {
    validateForm()
})

export { form, email, emailError, country, countryError, zipCode, zipCodeError, password, passwordError, confirmPassword, confirmPasswordError }