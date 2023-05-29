'use strict';

var server = require("server");

server.get("ModalShow", function(_req, res, next) {
    res.render("showModal");
    return next();
});

module.exports = server.exports();
