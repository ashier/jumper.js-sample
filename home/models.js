/*
 * Jumper
 * Handle your models here...
 * -> models
 */

var j = require('jumper.js'),
    Model = j.Model,
    utils = j.utils;

var User = Model.extend({

    attributes: {
        first_name: Model.STRING,
        last_name: Model.STRING
    }

});

var Post = Model.extend({

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
            console.log('calling pre save', model);
            model.slug = utils.slugify(model.title);
        }
    }

});

module.exports.User = User;
module.exports.Post = Post;
