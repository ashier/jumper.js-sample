/*
 * Jumper
 * Handle your models here...
 * -> models
 */

// var Model = require('jumper.js').Model,
//     utils = require('jumper.js').utils;

var Model = require('../../jumper.js/lib').Model,
    utils = require('../../jumper.js/lib').utils;


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
