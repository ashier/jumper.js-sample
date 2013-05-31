#!/usr/bin/env node
require('../jumper').program(
    {
        settings: require('./settings'),
        urls: require('./urls')
    }
);
