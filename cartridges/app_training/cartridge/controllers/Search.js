"use strict";

var server = require("server");
var controller = require("/app_storefront_base/cartridge/controllers/Search");

server.extend(controller);

server.append("Show", function(req, res, next) {
    var CatalogMgr = require("dw/catalog/CatalogMgr");
    var category = CatalogMgr.getCategory(req.querystring.cgid);

    var badge_text = category.custom.badge_text;
    var badge_background = category.custom.badge_background;
    var badge_text_color = category.custom.badge_text_color;

    var viewData = res.getViewData();

    viewData.displayName = category.displayName;
    viewData.badge_text = badge_text;
    viewData.badge_background = badge_background;
    viewData.badge_text_color = badge_text_color;

    res.setViewData(viewData);

    return next();
});

module.exports = server.exports();
