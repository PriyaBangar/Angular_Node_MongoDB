const mongoose = require('mongoose');
const User = require('../models/user.model');
// const user = mongoose.model('User');


exports.test = function (req, res) {
    var text = JSON.stringify('Greetings from the Test controller!')
    res.send(text);
};

exports.createUser = function(req, res, next){
   
   var user = new User();
    //userBody = JSON.parse(req);
    //console.log(userBody);
    // var user = new User({
    //     Fullname:req.body.Fullname,
    //     Email: req.body.Email,
    //     Password: req.body.Password});
    //  user.Fullname = userBody.Fullname;
    //  user.Email = userBody.Email;
    //  user.Password = userBody.Password;
    user.Fullname = req.body.Fullname;
    user.Email = req.body.Email;
    user.Password = req.body.Password;
    user.save(function (err) {
        if(!err){
            //res.send(doc);
            res.send("user created succcessfully");
        }
        else{
            console.log("error occured while requesting server");
        }
    });
};