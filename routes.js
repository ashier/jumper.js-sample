/*
 * jumper.js parses these patterns to handle routing.
 */

module.exports = {

    patterns: {
        'get /': 'home.views.index',
        'get /login': 'home.views.login'
    }

};
