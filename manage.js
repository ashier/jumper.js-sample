#!/usr/bin/env node
require('jumper.js').program(
    {
        settings: require('./settings'),
        urls: require('./urls')
    }
);
