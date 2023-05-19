'use strict';

var server = require('server');
server.extend(module.superModule)

server.append('Show', function (req, res, next) {

    var isHome = true
    var viewData = {
        isHome: isHome
    }

    res.setViewData(viewData)
    next();
})

module.exports = server.exports();