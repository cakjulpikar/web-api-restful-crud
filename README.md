# Web Api RESTful CRUD
## Part of Hacktiv8 Portofolio

#### API Routes

| Route | Method | Usage | Result |
| :---: | :---: | :--- | :--- |
| / | GET | Access URL without submission | All memo created by user |
| / | POST | Submit URL form with 'creator_name' and 'content' attributes | Return created memo |
| /:id | DELETE | Input id with '_id' attribute in memo | Return 'success' message if success |
| /:id | PATCH | Submit URL form with 'content' name | Return updated memo if success |   
