// ========================================
// CONFIGURATION
// ========================================

(function() {

    'use strict';

    var path = require('path');

    module.exports = function() {

        return {

            // ========================================
            // *** might be removed
            // ========================================

            PROJECT_DIR: path.join(__dirname),

            // ========================================
            // JUMPER.DATABASES
            // ========================================

            DATABASES: {
                'default': {
                    'NAME': '',             // MongoDB document name
                    'HOST': '',             // MongoDB hostname
                    'PORT': '',             // MongoDB port default = 27017
                    'USER': '',             // MongoDB username
                    'PASSWORD': ''          // MondoDB password
                }
            },

            // ========================================
            // JUMPER.INSTALLED_APPS
            //
            // Jumper iterates on the INSTALLED_APPS
            // list to check which are the enabled apps
            // within your project.
            // ========================================

            INSTALLED_APPS: [
                // Uncomment the next line to enable the admin:
                // 'jumper/admin',
                'home'
            ],

            // ========================================
            // JUMPER.MIDDLEWARES
            //
            // Uses the configuration based on the value of
            // process.env.NODE_ENV.
            //
            // If null, it will default to 'development'
            //
            // ========================================

            MIDDLEWARES: {

                development: {configure:
                    function(app, express) {
                        app.set('view engine', 'jade');
                        app.use(express.favicon());
                        app.use(express.logger('dev'));
                        app.use(express.bodyParser());
                        app.use(express.methodOverride());
                        app.use(app.router);
                        app.use('/static', express.static(path.join(__dirname, 'static')));
                        app.use('/templates', express.static(path.join(__dirname, 'templates')));
                    }
                },

                production: {configure:
                    function(app, express) {

                    }
                }
            }

        };

    }();
}());
