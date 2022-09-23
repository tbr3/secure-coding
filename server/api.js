"use strict";
exports.__esModule = true;
exports.initApp = void 0;
var express_1 = require("express");
var db_1 = require("./db");
function initApp() {
    var app = (0, express_1["default"])();
    var router = (0, express_1.Router)();
    router.get('/posts', function (request, response) {
        (0, db_1.getPosts)(function (result) {
            response.send(result);
        });
    });
    router.get('/posts/:id', function (request, response) {
        (0, db_1.getPost)(request.params.id, function (result) {
            response.send(result);
        });
    });
    router.get('/posts/:id/comments', function (request, response) {
        (0, db_1.getComments)(request.params.id, function (result) {
            response.send(result);
        });
    });
    router.post('/posts/:id/comments', function (request, response) {
        var body = request.body;
        (0, db_1.addComment)(request.params.id, body.content, body.name, function (result) {
            response.send(result);
        });
    });
    app.use(express_1["default"].json());
    app.use('/api', router);
    return app;
}
exports.initApp = initApp;
