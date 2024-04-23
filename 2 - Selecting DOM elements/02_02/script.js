/*
  The querySelector() method is a powerful tool for selecting elements in the HTML DOM.
  Here's a breakdown of how to use it with different CSS selectors:

  - Class selector: Targets elements with a specific class name.
    Example: document.querySelector(".class-name") selects the first element with the class "class-name".

  - Tag selector: Selects elements based on their HTML tag name.
    Example: document.querySelector("div") selects the first `<div>` element.

  - ID selector: Uniquely identifies an element with a specific ID attribute.
    Example: document.querySelector("#main") selects the element with the ID "main" (the # symbol is required for IDs).

  Remember:
    - querySelector() returns the first matching element.
    - Use querySelectorAll() to get a list of all matching elements.
    - CSS selectors can be combined for more specific targeting (e.g., ".special.button").
*/

// demo 1
// Using querySelector with an ID
let header = document.querySelector("#dashboardHeader");
console.log(header.textContent); // Outputs: Business Dashboard

// Using querySelector with a tag
let firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent); // Outputs: Total Employees: 120

// Using querySelector with a class
let highlight = document.querySelector(".highlight");
console.log(highlight.textContent); // Outputs: Top Performers: 10

// demo 2
// Using querySelectorAll with a class
let highlights = document.querySelectorAll(".highlight");
highlights.forEach(function (item) {
  console.log(item.textContent);
});
// Outputs each text content of elements with class 'highlight'
