# Shopular
## Seth Brady

### Set Up
1. clone from github
2. open in server in the source directory

## Known Issues
Removing an item only removes it from the table, not localStorage

### Front End 03/29/17

### Learning Objectives

We don't build single-controller applications. We'll need to combine a lot of different pieces of code to build full applications. Let's get some practice creating a Service, a second Controller, and organizing all of this code into a proper application. By the end of this assignment you should be able to organize your code into separate files and use a Service from within a Controller.

### Your Mission

The shop owner from your previous assignments has noticed that your item inventory application resets all data when the page is refreshed! Oops. Let's persist the data to localStorage (for now). We want to separate the logic for data persistence and UI interactions into Services and Controllers. Additionally, the owner plans to expand this system. For now he's the only user, but he'd like you to display his name and the login time at the top of the page.


### Adventure Mode

### User Management

Create a Service for user management
The service should have a method for logging in which accepts a username and returns the user object, including the time the user logged in (now)
There should be another method for getting the logged in user (return null if the user is not logged in)
Add a new Controller for the information in the page header (what would be a good name?)
Show the current user's name in the <header> as well as the time they logged in using this format: "Apr 10 - 9:15 AM"

##EPIC Mode
Allow the user to input a state (two digits) and have the system calculate sales tax from that information
Where will you get the tax rate from?
What sort of Angular entity will you use?









### Front End 03/28/17

Going from the last project, we are building on what we know in ``angular`` to practice ``two-way
data binding.``


### Front End 03/27/17
This is practice with the basics of ``Angular`` building a ``web application``
for a shop's inventory. At the end of this project we should have a basic
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
table title. In addition, the user is able change the order in which the items are
displayed by clicked on the table header. The user is also able to change the quantity of items, remove any item that has a quantity of 0, and is able to add new items to the table.

### TODO
Even though the current build will only allow for 1 click event to change, Id like
make it a toggle so that it can return to the original US dollars, text, naming.


### Data Link
https://gist.github.com/jakerella/64cc09455245695585e96ce251497a60
