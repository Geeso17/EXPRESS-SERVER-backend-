const express = require('express');

const handleAllRequest = (requestObject, responseObject) => {
    console.log('request received');

    responseObject.write('<h2>page cannot be displayed</h2>');

    responseObject.end();

}

const handleHomeRequest = (req, res) => {
    res.send('<h2>Welcome to Home Page</h2>');

}
const handleLoginRequest = (req, res) => {
    res.send('<h2>Login Here</h2>');
}
const handleSignupRequest = (req, res) => {
    res.send('<h2>Welcome to signup page</h2>');
}
const handleProfileRequest = (req, res) => {
    res.send('<h2>Welome to Profile Page<h2>');
}


const server = express();
server.get('/Signup',handleSignupRequest);
server.get('/Login',handleLoginRequest);
server.post('/Profile',handleProfileRequest);
server.get('/',handleHomeRequest);
server.use(handleAllRequest);

server.listen(3000, 'localhost', () => {
    console.log("server is ready for request")
});