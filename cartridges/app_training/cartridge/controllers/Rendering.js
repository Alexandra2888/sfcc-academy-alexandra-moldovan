'use strict';

var server = require('server');

server.get('Show', function (req, res, next) {
    var template='rendering';
  
    <iscomment>route is /default/Rendering-Show</iscomment>


    res.render(template);
    next();
});

module.exports = server.exports();