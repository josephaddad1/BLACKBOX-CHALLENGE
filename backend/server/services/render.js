const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    res.render('index');

}

exports.sign_in = (req, res) => { 
    res.render('sign_in');
}

exports.sign_up = (req, res) => {
    res.render("sign_up")
}