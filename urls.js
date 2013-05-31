// ========================================
// URL/ROUTES
// ========================================

(function() {

    'use strict';

    module.exports = function() {
        return {
            URL_PATTERNS: [
                // Uncomment the next line to enable the admin:
                // {route: '/admin', view:'jumper.admin.urls'}
                {route: '/', views: 'home.views.index'}
            ]
        };
    }();

}());
