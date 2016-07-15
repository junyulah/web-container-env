'use strict';

let ssbox = require('./ssbox');

let windowManager = require('./window/manager');

let bridge = require('./bridge');

module.exports = {
    ssbox,
    windowManager,
    front: bridge.front,
    back: bridge.back
};