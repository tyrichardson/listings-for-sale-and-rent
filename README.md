REAL ESTATE LISTINGS

Tech to use: Angular, Node, Express & SQL

Properties are either for "rent" or for "sale".

Goal:use client side routing (`angular-route`) to display the rentals on one view and listings for purchase on another view. 

Requires two navigation links on the page allowing the user to switch between the two views.

## Project Requirements

- [x] Create a Full Stack application from the ground up using Angular, Node, Express, and SQL (SEAN stack)
      - [x] install npm packages
      - [x] create project file structure
      - [x] create project files
- [x] Work with the data set provided
      - [x] create listings table in hadar db on postgres using postico
- [x] Account for the different data properties and ensure that this is noted on the display of the information, by listing "For Rent" or "For Sale" based on which of the two properties that it has
- [x] 2 routes, each with a controller and template file. One set for "For Rent" properties and another set for "For Sale" properties
- [x] Create an interface for adding additional rental or housing properties to the collection(s). Give the user an option for either a Rent property, or a Sale property

## Importing the Provided Data File

- [x] Import the *listings.sql* file into your database. Either import the file or copy and paste all of the queries into Postico.

For future iterations:

- [ ] Ability to delete an existing listings
- [ ] Move all `$http` requests to an Angular Service
- [ ] Add an option to include an image path (absolute url) for each listing
- [ ] Ability to update an existing record using a pop up (modal).
- [ ] Display the least expensive property featured prominently at the top of the page
- [ ] Ability to search or filter by various parameters using a server side route with a query parameter
