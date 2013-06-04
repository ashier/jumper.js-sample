var Post = function () {
};

Post.prototype = Object.create(require('jumper.js').db.Model);
module.exports.Post = new Post();
