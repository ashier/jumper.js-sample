// ========================================
// URL/ROUTES
// ========================================

(function() {

    'use strict';

    module.exports = function() {
        // ========================================
        // URL_PATTERNS
        //  Jumper parses these patterns to handle routing.
        //
        // paramaters:
        //
        // route
        //  - url routes
        // views
        //  - app . filename . method
        // method
        //  - get | post | put | delete
        // ========================================
        return {
            URL_PATTERNS: [
                // Uncomment the next line to enable the admin:
                // {route: '/admin', view:'jumper.admin.urls'}
                {route: '/', views: 'home.views.index', method: 'get'},
                {route: '/login', views: 'home.views.login', method: 'get'}
            ]
        };
    }();

}());
