# Shopular
### Seth Brady

### Set Up
1. clone from github
2. open in server in the source directory

##HOMEWORK
Go back to our Shopular project and let's add some tests.

1. Set up testing using our Grunt build with Karma and Mocha
2. Write tests for all controllers and services
3. You need must have code coverage being reported in the grunt build
  You do NOT have to have 100% coverage, you must have at least 50% coverage of all branches.

## EPIC Mode

Get 100% code coverage.



### Current Build
The current build displays data in the form of a table on the view. Currently the data
is an array of objects held inside localStorage, accessed from inventory.services.
Each object contains id, name, price, quantity, color, and discount properties. On the page is a button
that when clicked will change the price to British Pounds, the item "waste basket"
to "rubbish bin", and the word color to "colour", which is located in the
table title. In addition, the user is able change the order in which the items are
displayed by clicking on the table header. The user is also able to change the quantity of items, remove any item that has a quantity of 0, and is able to add new items to the table. The user is also able to input
a user name and password to 'login' to the system.

### Technology Used
bootstrap, sass, angular, git, javascript, html, css, grunt, jshint, karm, mocha,
chai, babel, contrib-concat

### TODO
1. Even though the current build will only allow for 1 click event to change, Id like
make it a toggle so that it can return to the original US dollars, text, naming.
3. Fix sortType on the index.html- remove the anchor tag-add to <th>
4. Fix the error handling on the addItem function on the inventory.controller

### Known Issues 04/01/17
Clicking the "United Kingdom" button does not change the price of the
"rubbsih bin"- which was previously the "waste basket".


## 03/29/17
Building further on the same assignment using ``services(factory)`` , ``localStorage``,
and multiple ``controllers.``

## 03/28/17
Going from the last project, we are building on what we know in ``angular`` to practice ``two-way
data binding.``

## 03/27/17
This is practice with the basics of ``Angular`` building a ``web application``
for a shop's inventory. At the end of this project we should have a basic
grasp of putting a couple of the pieces of ``Angular`` together to see data in
our browser.


## Links
https://github.com/gruntjs/grunt-contrib-concat
