var path = require('path');
var Post = require('./models').Post;

console.log("Post : ", Post.description);

module.exports.index = function(req, res) {
    res.render(path.join(__dirname, '..', '/templates/home/index.jade'));
};

module.exports.login = function(req, res) {
    res.send('login page');
};
