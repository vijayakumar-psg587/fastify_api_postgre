# nodejs-graphql
### Steps to recreate
 SPIN UP a POSTGRE server using DOCKER
 
 If the entities need to be created, then turn on <b>Synchronize</b> in typeORM if necessary
 
 Else create tables referring to the database folder
 
 Connect to the server (modify the env variables if necessary)
 
 RUN `npm i` to install dependencies
 RUN `npm run start:nodemon:dev` to start the server
 
 By default it runs of port 3002
 
 `Refer to the routes file to see the list of registered routes`
 
 Use `http://localhost:3002/asm/v1/fake/associate-capability` to generate the fake data
 