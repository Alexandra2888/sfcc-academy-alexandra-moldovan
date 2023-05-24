"use strict";

var server = require("server");
server.extend(module.superModule);

server.append("Show", function(req, res, next) {
    var isProduct = true;
    var viewData = {
        isProduct: isProduct
    }

    res.setViewData(viewData)

    next();
});

module.exports = server.exports();