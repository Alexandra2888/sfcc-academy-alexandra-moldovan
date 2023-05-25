var CatalogMgr = require("dw/catalog/CatalogMgr");
    var category = CatalogMgr.getCategory(req.querystring.cgid);
    if (
        category &&
        category.custom.category_background-color &&
        category.custom.category_text-color &&
        category.custom.category_text-attribute
    ) {
        var newBadge = {
            badgeBackgroundColor: category.custom.category_background-color,
            badgeTextColor: category.custom.category_text-color,
            badgeText: category.custom.category_text-attribute
        };
    }
    viewData.newBadge = newBadge;
    viewData.categoryId = category.ID;
    res.setViewData(viewData);