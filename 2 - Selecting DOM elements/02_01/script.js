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
// Selecting the header element using its ID
let headerElement = document.getElementById("mainHeader");
console.log(headerElement.textContent); // Outputs: Company Dashboard

// demo 2
// Selecting all elements with the class 'product-info'
let productInfoElements = document.getElementsByClassName("product-info");
console.log(productInfoElements); // <-This syntax returns an HTML Collection
console.log(productInfoElements[0].textContent); // <- This syntax returns the values in the class

// Accessing the first element of the collection
let firstProductInfo = productInfoElements[0];
console.log(firstProductInfo.textContent); // Outputs: Top Product: Gadget XYZ Units Sold: 500

//demo 3
// Selecting all paragraph tags
let paragraphElements = document.getElementsByTagName("p");

// Displaying the text of each paragraph
for (let i = 0; i < paragraphElements.length; i++) {
  console.log(paragraphElements[i].textContent);
}