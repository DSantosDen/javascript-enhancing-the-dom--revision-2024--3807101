// Challenge 1: Select an element by ID and print it to the console
// TODO: Select the element with id 'actionButton' and print it
let actButtonSelection = document.getElementById("actionButton");
console.log(actButtonSelection);

// Challenge 2: Select all elements with a certain class and print all of them to the console
// TODO: Select all elements with class 'info' and print each one
let classInfoSelect = document.getElementsByClassName("info");
for (let i = 0; i < classInfoSelect.length; i++)
{
    console.log(classInfoSelect[i]);
}

// Challenge 3: Select elements by tag and print all of them to the console
// TODO: Select all <p> elements and print each one
let tagSelectP = document.getElementsByTagName("p");
for (let i = 0; i < tagSelectP.length; i++) {
    console.log(tagSelectP[i]);
}

// Challenge 4: Select elements with a combination of tag name and class name, and print them
// TODO: Select all elements that are <span> with class 'highlight' and print each one
let spanAndHighlightSelect = document.querySelectorAll("span.highlight");
spanAndHighlightSelect.forEach(span => console.log(span));
