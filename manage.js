#!/usr/bin/env node

require('../jumper').program(
    {
        settings: require('./config/settings'),
        urls: require('./config/urls')
    }
);
