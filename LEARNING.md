# Serverless 101

## First Sight

* Creates a S3 Bucket to store versions of the projects, environment variables (as lambda still doesn't have this), etc.
* Creates everything using Cloudformation
  * AWS CloudFormation gives developers and systems administrators an easy way to create and manage a collection of related AWS resources, provisioning 	and updating them in an orderly and predictable fashion.

* For credentials, you need to create a IAM at AWS for serverless, and configure using either `aws configure` or `serverless config credentials`

## Possible Code Architecture

### Nanoservices

A lambda function for each individual REST API endpoint. Good for agility, loggings of specific functions and will can work independently because each endpoint is a separate function.

### Microservices

A lambda function for each resource (e.g., Users) available via multiple endpoints for CRUD.

### The new Monolithic

GraphQL + Lambda. Example with ES6 compiled with babel: https://github.com/serverless/serverless-graphql-blog

## Resources

* [AWS Lambda Day 2015: Building with the Serverless Framework with Austin Collins](https://www.youtube.com/watch?v=BKx9vxxuZXY) - Good introduction video. Talks about the code architecture and about serverless in general (it's old, using v0.5 of serverless, but most of it is still useful).
