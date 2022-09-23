"use strict";
exports.__esModule = true;
var api_1 = require("./api");
var port = 4000;
var app = (0, api_1.initApp)();
app.listen(port, function () { return console.log("API available on port ".concat(port)); });
