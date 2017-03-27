# Shopular
## Seth Brady
### Front End 03/27/17



We need some practice with the basics of ``Angular``. Let's build a ``web application``
for a shop's inventory. By the end of this assignment we should have a basic
grasp of putting a couple of the pieces of ``Angular`` together to see data in
our browser.

# TODO
You have a shop with some items in its inventory. The shop owner has asked that you create an interface to edit that inventory. The data you should start with is in a ``gist``.  You must create all of the pieces of this application (HTML, Sass, JS) and should submit your ``GitHub`` repository for the project.

1. You should only need one ``Angular module`` and ``controller``
2. Be sure to ``bootstrap`` your ``module`` to the ``<html>`` tag
3. Be sure to bind your controller to an element in the HTML document (what would be appropriate?)
4. Your controller should have a tax property on its scope set to 5.75%
5. Display a table of the item data from the controller's scope
6. Place the data linked above in your controller (for now)
7. Don't forget your table header
8. Only display the name, price, quantity and color
9. Make sure the price includes tax and any discount! (Discounts are in dollars, not percent.)
10. If the item has a discount, show this icon next to the price: discount icon
11. Be sure to have all the proper HTML. Your page should have a header, footer, and main, most   likely... anything else?
12. Don't worry about the styles too much, but make sure your table is easy to read:
  with zebra striped rows; and centered in the page with 80% width.


### EPIC Mode

Internationalize your shop - have a controller property (and UI button) for US / UK. When set to "UK" your shop should:

1. Convert prices to GBP (just use 1.5 GBP to USD for now)
2. Say "colour" vs "color"
3. Replace any instances of "waste basket" with "rubbish bin"


### Data Link
https://gist.github.com/jakerella/64cc09455245695585e96ce251497a60
