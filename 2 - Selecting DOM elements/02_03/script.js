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

let menuItems = document.querySelectorAll("ul > .menu-item");
menuItems.forEach((item) => console.log(item.textContent));

let firstParagraphs = document.querySelectorAll("section > p:first-child");
firstParagraphs.forEach((paragraph) => console.log(paragraph.textContent));

let lastListItems = document.querySelectorAll("ul > li:last-child");
lastListItems.forEach((item) => console.log(item.textContent));

let emailInputs = document.querySelectorAll('input[type="email"');
emailInputs.forEach((input) => console.log(input.placeholder));

let thirdListItems = document.querySelectorAll("ul > li:nth-child(3n)");
thirdListItems.forEach((item) => console.log(item.textContent));

let paragraphsAfterHeading = document.querySelectorAll("h2 + p");
paragraphsAfterHeading.forEach((p) => console.log(p.textContent));
