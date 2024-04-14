# Project Constraint Validation API

## HTML

The html file contains a form for all inputs. The inputs are email, country, zip code, password and confirm password. A submit button is at the button for submission.

## CSS

The CSS has an .error.active selector to display error while error message occurs either when the input field is invalid or user tries submitting the form when inputs are still not completed or still invalid.

There is also a simple animation when user hovers their mouse on the submit button.

## JavaScript

The index.js file handle DOM elements. When starts up, it calls validateForm() function that is in another js file - validate.js. This is made possible by webpack.

As of 13th of April 2024, there are dedicated showxxxxError function for each input. I am committed to change the code in the near future to have one single function that handles all incoming error message requests made by different inputs (email, country, zipCode, password, confirmPassword), which should dynamically create a variable name plus a keyword (Message). This future approach will greatly reduce duplicate codes.

## Webpack

The webpack bundle was set up from the ground up instead of taking template from my previous projects. This decision was made because I wanted to dive deeper and practice using webpack, plugins, modules, dependencies etc. wherever I get the chance.

## Special thanks

Shgysk8zer0 for useful advice and hints on single input handler callback.
