# Development 4: Opdracht Werkstuk - Maxime Engels

## Functional Analysis
Podiumaanhuis.be has a couple of functions that are mandatory for the site to work which are the filter function and a search bar function using a query to live search and display cards.
When clicking multiple tags the site filters both out of the possible items they could be shown. Typing a query that can't be found in the data shows a message which says:"Geen resultaten voor + (typed query)".

## Planning
- Starting to make the app requires making a document ready function as well as making a basic HTML and CSS template looking like the site. (hardcoded first)
- After this I try to fetch the data from the JSON file and asign the array to a variable which can be used in a function that shows the cards in a container.
- Making the search bar using a query that gets checked using a regular expression to negate case sensitivity as well as search for the name starting with the query instead of searching for a random letter in the name.
- Next trying to figure out how to use the .filter() function in JS to filter the data array according to all the tags the are currently active.
 
 ## Tests
I wrote 3 tests (1 as dummy test and 2 real functions) in the test.js file.
To run the test, use following instructions:
- npm install
- npm run test

## Resources

Slides Functional Programming:
https://docs.google.com/presentation/d/1tlhfJPTmw0MP4kfKSdszo4bUSKwG9xRcuSmzhbkiNaw/edit#slide=id.g71ba0d11e2_1_192

Filtering Arrays:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Adding Cards to DOM:
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

Search Query RegEx:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Matching Query to Item Name:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

Async Functions:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

 
