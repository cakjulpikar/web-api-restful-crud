# Web API restful CRUD
## Part of Hacktiv8 Portofolio
Implementation of restful CRUD pattern with simple memo application

#### Setup
1. On server folder, install all dependencies and run the server
````
npm install
npm start
````   
2. On client side, run live server to run index.html

````
live-server
````

#### API Routes

| Route | Method | Usage | Result |
| :---: | :---: | :--- | :--- |
| / | GET | Access URL without submission | All memo created by user |
| / | POST | Submit URL form with 'creator_name' and 'content' attributes | Return created memo |
| /:id | DELETE | Input id with '_id' attribute in memo | Return 'success' message if success |
| /:id | PATCH | Submit URL form with 'content' name | Return updated memo if success |  
