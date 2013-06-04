var path = require('path'),
    db = require('jumper.js').db,
    Post = require('./models').Post;


// ========================================
// Listen to db's event 'connected'
// ========================================

db.connection.on('connected', function(err) {
    if (err) throw err;
    // DB Connected
    console.log("Post : ", Post.description);
});


// ========================================

module.exports.index = function(req, res) {
    res.render(path.join(__dirname, '..', '/templates/home/index.jade'));
};

module.exports.login = function(req, res) {
    res.send('login page');
};
