
module.exports.index = function(req, res) {
    res.render('../templates/home/index', {message:"A simple message from Jumper Web Framework"});
};

module.exports.login = function(req, res) {
    res.send('login page');
};

// console.log("Post : ", Post.description);

// // Listen to db's event 'connected'
// db.connection.on('connected', function(err) {
//     if (err) throw err;
//     // DB Connected
//     console.log("Post : ", Post.description);
// });


// module.exports.index = function(req, res) {
//     res.render(path.join(__dirname, '..', '/templates/home/index.jade'));
// };


