/* --------------------------------------------------------------------------------------------------------------------
<copyright file="expressroute.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 Express routes service :  Server side routes
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/

var express = require('express');
var routerExpress = express.Router();
routerExpress.all('/about', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});
routerExpress.all('/login', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});
routerExpress.all('/signup', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});
routerExpress.all('/profile', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode 
    res.sendFile('index.html', { root: __dirname });
});
routerExpress.all('/setting', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode   
    res.sendFile('index.html', { root: __dirname });
});
routerExpress.all('/setting/font', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode 
    res.sendFile('index.html', { root: __dirname });
});

module.exports = routerExpress;