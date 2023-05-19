'use strict';

var server = require('server')
server.extend(module.superModule)

server.append('Show', function(req, res, next){
    var isSearch = true
    var viewData = {
        isSearch: isSearch
    }
    res.setViewData(viewData)

    next()
})
module.exports = server.exports();