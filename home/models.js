var Model = require('jumper.js').Model,
    utils = require('jumper.js').utils;


var User = {

    attributes: {
        first_name: Model.STRING,
        last_name: Model.STRING
    }

};

var Post = {

    attributes: {
        author: User,
        title: Model.STRING,
        contents: Model.STRING,
        created: {
            type:Model.DATE,
            default:new Date()
        }
    },

    pre: {
        'save': function(err, model) {
            // handle error ok ?
            console.log('calling pre save', model);
            model.slug = utils.slugify(model.title);
        }
    }

};

// console.log('> ', utils.slugify('ashier de leon'));

module.exports.Post = Post;
