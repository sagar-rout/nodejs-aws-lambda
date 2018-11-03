// Nodejs 6 & 8 supports callback 
exports.handler = function(event, context, callback){
    console.log(event);

    // Do your processing 

    callback(null, "Hello World");
}