'use strict';

var server = require('server');

server.get('Show', function (req, res, next) {
    var template='carousels';

    <iscomment>route is /default/Carousels-Show</iscomment>


    res.render(template);
    next();
});

module.exports = server.exports();