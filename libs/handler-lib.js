export default function handler(lambda){
    return function(event, context){
        return Promise.resolve()
        // Run the lambda
        .then( () => lambda(event, context) )
        // On success
        .then( (responseBody) => {
            return [200, responseBody];
        })
        // On failure
        .catch( (e) => {
            return [500, { error: e.message }];
        })
        // Return HTTP response
        .then( ([statusCode, body]) => {
            return {
                statusCode,
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true
                },
                body: JSON.stringify(body)
            };
        });
    };
}