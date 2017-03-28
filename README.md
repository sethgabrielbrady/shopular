# Shopular
## Seth Brady
### Front End 03/28/17
### Set Up

1. clone from github
2. open in server





## Learning Objective

Angular has two-way data binding - which means it will automatically marshal data from the UI to the controller and back. This works even with multiple uses of the data in the UI! Let's get some practice with this concept. By the end of this assignment you should understand how to bind form inputs to data on a controller's scope and then see any changes in the view. We'll also see how Angular allows us to validate form data and use directives to initiate actions.

Your Mission

Start with our Item Shop from the previous assignment. We want to allow the owner to add new items to the inventory and sort items in the table.

1. Create a form to add a new item
The owner must provide the name, price, quantity, color, and discount
2. Use Angular directives to bind the data to the controller (use a newItem object on the scope)
3. Validate the data using angular, highlight any invalid fields in red. On form submission, add the item to the data (and hence UI) if all fields are valid
4. Allow sorting of the items in the display: default to sorting by price (lowest at the top)
  allow a user to click on a table header and sort by: name, quantity, or price

## Adventure Mode

1. Clicking on a header multiple times alternates between ascending and descending sort

## EPIC Mode

1. Allow the owner to change the quantity of an item up or down in the table.
2. Allow an owner to remove an item from the inventory, but not if there is any quantity remaining.



### Front End 03/27/17


### Set Up

1. clone from github
2. open in server


This is practice with the basics of ``Angular`` building a ``web application``
for a shop's inventory. At the end of this project I should have a basic
grasp of putting a couple of the pieces of ``Angular`` together to see data in
our browser.


### Technology Used
bootstrap, sass, angular, git,

### Current Build
The current build displays data in the form of a table on the view. Currently the data
is an array of objects held inside the controller.js file. Each object contains
id, name, price, quantity, color, and discount properties. On the page is a button
that when clicked will change the price to British Pounds, the item "waste basket"
to "rubbish bin", and the word color to "colour", which is located in the
table title.

### TODO
Even though the current build will only allow for 1 click event to change, Id like
make it a toggle so that it can return to the original US dollars, text, naming.


### Data Link
https://gist.github.com/jakerella/64cc09455245695585e96ce251497a60
