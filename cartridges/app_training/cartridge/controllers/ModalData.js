var server = require("server");

server.get("ModalShow", function(_req, res, next) {
    var viewData = res.getViewData();
    viewData.inputValue = JSON.stringify(_req.querystring.data);

    res.setViewData(viewData);

    res.render("myModal", {
        viewData: viewData.inputValue
    });
    return next();
});
module.exports = server.exports();
