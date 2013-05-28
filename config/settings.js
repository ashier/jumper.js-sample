
/*
* Configuration
*/

(function() {

    'use strict';

    var path = require('path');

    module.exports = function() {

        return {

            // ========================================
            // *** might be removed
            // ========================================

            PROJECT_DIR: path.join(__dirname, '..'),

            // ========================================
            // Jumper sets this environment then apply
            // it to be the mode used when the application
            // is launched
            // ========================================

            ENV: 'development',

            // ========================================
            // Jumper will crawl on these apps to check which apps
            // are currently enabled in your project.
            // ========================================

            DATABASES: {
                'default' : {
                    'NAME': 'nodeblog',     // MongoDB document name
                    'HOST': 'localhost',    // MongoDB hostname
                    'PORT': '27017',        // Default 27017
                    'USER': '',             // MongoDB username
                    'PASSWORD': ''          // MondoDB password
                }
            },

            // ========================================
            // Jumper will crawl on these apps to check which apps
            // are currently enabled in your project.
            // ========================================

            INSTALLED_APPS: [
                // Uncomment the next line to enable the admin:
                // 'jumper/admin',
                'post'
            ],

            // ========================================
            // Jumper's express.use() will follow the sequence of the
            // MIDDLEWARES list respectively...
            // ========================================
            // NOTE: Templating Engine Supports:
            // Jade and HTML for now
            // ========================================

            MIDDLEWARES: [
                // {name:'view options', value:{layout: false}} ,
                // {name:'view engine', value:'html'},
                {name:'express:bodyParser'},
                {name:'express:methodOverride'},
                {name:'express:router'},
                {name:'express:cookieParser', params:['some secret key']},
                {name:'express.static:/static,' + path.join(__dirname, '..', 'public')},
                {name:'express.static:,' + path.join(__dirname, '..', 'views')},
                {name:'express:logger'}
            ]
        };

    }();
}());
