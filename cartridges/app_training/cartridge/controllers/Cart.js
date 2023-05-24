"use strict";

var server = require("server");
server.extend(module.superModule);

server.append("Show", function(req, res, next) {
    var isCart = true;
    var viewData = {
        isCart: isCart
    }

    res.setViewData(viewData)

    next();
});

module.exports = server.exports();