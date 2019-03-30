

			                     	[Kinder Dog Pound]

				                    Project 2.0

**Function**

Kinder Dog Pound is a full stack application that comprises all the vital functionalities to maintain an ecommerce website a Dog Shelter. 

**Technologies used**

-   Node.Js
-   JQuery
-   Express
-   CSS
-   Bootstrap
-   HTML
-   Heroku

**How it works -**

**Front end >** The app has the following frontend HTML Adapt / Dogapedia / Find my pet / Contact us. With the Use of Handlebars these pages are injected with data from the back end as well as external API’s.

**Adapt**

This page displays the current inventory of dogs that we currently posess.

**Dogapedia**

This page pulls in data from an external API which allows a user to lookup over 100 breeds of dogs. The user can either search for the dog breed by simply typing in the name or search from the drop down menu. Upon selection the data will appear on the bottom with a picture of the dog.

**Find me a dog**

This page assists the user to select a dog of choice by taking a very descritive survey. This survey contains a very complex set of filters and data set that will help a user easily identify the best pet that they will need in their household

**Contact Us**

This page contains a form to contact the Dog Shelter if they have any questions or concerns

**ADMIN page**

This page allows the dog shelter to add new dogs to their database

**Backend>**

This app utilizes a MYSQL database with a Model View Controller (MVC). The Data insertion to the database done using an ORM called Sequelize which makes the data insertion more efficient.

Node is utilized as the server to communicate with the database.

-   Two routes are created for HTML and the API. The HTML routes will respond to the front end HTML requests based on which URL the user picks (Home page or Survey page). The API routes stores inputed information in the database subsequent to calculating the logic in the app. It then displays to the user the result from its calculation.
-   The server is side of the app is deployed

**Deployed>**

The entire app is deployed on Heroku so that any user can access online and use the full functionality of the app.



**NPM packages utilized**

-   Express
-   Path
-   body-parser
-   Sequelize
