var Jumper = require('jumper.js'),
    db = Jumper.db;

var Post = function () {

};

Post.prototype = Object.create(db.Model);
module.exports.Post = new Post();
