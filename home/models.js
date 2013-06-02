var Post = function () {
};

Post.prototype = Object.create(require('../../jumper/').db.Model);
module.exports.Post = new Post();
