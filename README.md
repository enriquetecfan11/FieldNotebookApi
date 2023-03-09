# Field Notebook Api

Made with:
- nodejs
- express
- postgreSQL
- sequelize

## Project Structure

```bash
.
├── package.json
└── src
    ├── app.jsz
    ├── controllers
    │   ├── deleteControllers.js
    │   ├── getControllers.js
    │   └── postControllers.js
    │
    ├── database
    │   └── database.js
    ├── index.js
    ├── models
    │   └── models.js
    │
    └── routes
        ├── deleteRoutes.js
        ├── getRoutes.js
        └── postRoutes.js

```

## Use with Docker

1 - You new to create a docker image called cuardenodecampoapi
```
docker build -t cuardenodecampoapi .
```
2 - Now start the dockerfile
```
docker-compose up
```
3 - Test with postman
