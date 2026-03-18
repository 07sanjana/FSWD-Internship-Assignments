/*
Event Handiling
event = user interactions
examples: click, mouseover, keypress, submit, load
*/

//click event
// click event
let button = document.querySelector("#btn");
button.addEventListener("click", function () {
    alert("Button Clicked!");
    button.textContent = "Clicked!";
});

// input event
let input = document.querySelector("#nameInput");
let output = document.querySelector("#output");

input.addEventListener("input", function () {
    output.textContent = input.value;
});

// form submit
let form = document.querySelector("#myForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form Submitted!");
});
