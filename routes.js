/*
 * jumper.js parses these patterns to handle routing.
 */

module.exports = {

    patterns: {

        /*
         * Uncomment below to support admin page.
         * "jumper.js-admin" module is a pre-requisite
         * and must be installed.
         */

        'get /admin': {include:'jumper.js-admin/routes'},

        /* Example resource mapping...
         * -> automatic resource generations
         */

        // 'resource /post': 'api.resources.post',

        /*
         * supports
         * get, post, put, delete
         *
         */

        'get /': 'home.views.index',
        'get /login': 'home.views.login'
    }

};
