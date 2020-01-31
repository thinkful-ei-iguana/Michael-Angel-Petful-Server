# Petful-Server

This is a boilerplate project used for starting new projects!

## API EndPoints
POST/api/adopters/post - Name goes into Queue
GET/api/adopters - Retrieve adopters in line
GET/api/dogs - All the dogs in Queue
GET/api/cats - All the cats in Queue
DELETE/api/dogs - Places adopted dogs in the end of the Queue  
DELETE/api/cats - Places adopted cats in the end of the Queue

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
