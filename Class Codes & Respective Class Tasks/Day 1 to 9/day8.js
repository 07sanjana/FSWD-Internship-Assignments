/*
DOM - Documwent Object Model
When browser loads the html file - it converts it into a tree structure called DOM

Document -> HTML
         /   \
        head  body
              /  \
             h1   p

What can we do with DOM?
1. Used to access elements
2. Used to change content
3. To change styles
4. To create new elements
5. To delete elements

*/

// Select by ID
let heading = document.getElementById("title");
console.log(heading);

let paragraph = document.getElementsByClassName("desc");
console.log(paragraph[0]);

// // Modern method (FIXED)
let head = document.querySelector("#title");
let para = document.querySelector(".desc");
console.log(head);

// // changing the content
heading.textContent = "DOM is Powerful";
para.innerHTML = "<b>This is updated text.</b>";

// // Changing the style
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";

// // Creating new element
let newPara = document.createElement("p");
newPara.textContent = "I am a new paragraph.";
document.body.appendChild(newPara);
