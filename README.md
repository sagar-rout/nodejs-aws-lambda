# Nodejs AWS Lambda

1. https://docs.aws.amazon.com/lambda/latest/dg/welcome.html 

## How to test

1. Install lambda-local https://www.npmjs.com/package/lambda-local
```npm install -g lambda-local```
2. Run this command to test 
```lambda-local -l index.js -h handler -e examples/s3-put.js // or you can also pass json. ```