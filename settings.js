var path = require('path');

module.exports = {


    databases: {
        'DATABASE': 'mongoose', // mongoose
        'NAME': 'nodeblog', // MongoDB document name
        'HOST': 'localhost', // MongoDB hostname
        'PORT': '27017', // MongoDB port default = 27017
        'USER': '', // MongoDB username
        'PASSWORD': '' // MondoDB password
    },

    // jumper.js SECRET_KEY

    secretKey: 'my super secret key',

    /*
     *
     * jumper.js iterates on the installedApps
     * list to check which are the enabled apps
     * within your project.
     *
     */

    installedApps: [
        // Uncomment the next line to enable the admin:
        // 'jumper.js/admin',
        'home'
    ],

    /*
     * jumper.js.MIDDLEWARES
     *
     * Uses the configuration based on the value of
     * process.env.NODE_ENV.
     *
     * If null, it will default to 'development'
     *
     */

    middlewares: {

        development: {
            configure: function(app, express) {
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

        production: {
            configure: function(app, express) {
            }
        }
    }

};
