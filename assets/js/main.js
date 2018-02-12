//默认配置
var gitbook = gitbook || [];
gitbook.push(function() {
    gitbook.page.hasChanged({
        "page": {
        },
        "config": {
            "pluginsConfig": {
                "fontsettings":{"theme":"white","family":"sans","size":2},
                "sharing": {
                    "all": []
                },
            },
        },
        "file": {
        },
        "gitbook": {
        },
        "basePath": ".",
        "book": {}
    });
});
