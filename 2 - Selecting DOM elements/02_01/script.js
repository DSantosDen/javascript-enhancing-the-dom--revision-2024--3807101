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