var Admin = require('../../jumper/lib/admin'),
    Model = require('../../jumper/lib/model');

var Post = Object.create(Model);

PostSchema = new Post.Schema({
    title: String,
    author: {
        first: String,
        last: String
    },
    contents: String,
    html: String,
    slug: String,
    tags: [{type: Post.ObjectId, ref: 'Tag'}],
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now}
});

Post.useSchema('Post', PostSchema);
Admin.register(Post);
