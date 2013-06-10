var Post = require('./models').Post;

module.exports.index = function(req, res) {
    res.render('../templates/home/index', {message:"A simple message from Jumper Web Framework"});
};

module.exports.login = function(req, res) {
    res.send('login page');
};

// var post = Post.create({title:'My Title'});
// Post.pre.save(post);
