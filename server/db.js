"use strict";
exports.__esModule = true;
exports.addComment = exports.getComments = exports.getPost = exports.getPosts = exports.db = exports.commentsTable = exports.postsTable = void 0;
var mysql2_1 = require("mysql2");
exports.postsTable = "posts";
exports.commentsTable = "comments";
exports.db = mysql2_1["default"].createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "demo"
});
exports.db.connect(function (error) {
    if (error)
        throw error;
    console.log("DB Connected");
});
function getPosts(callback) {
    return exports.db.query("SELECT * FROM ".concat(exports.postsTable), function (err, result) {
        if (err)
            throw err;
        callback(result);
    });
}
exports.getPosts = getPosts;
function getPost(id, callback) {
    var query = "SELECT * FROM ".concat(exports.postsTable, " WHERE id=\"").concat(id, "\"");
    return exports.db.query(query, function (err, result) {
        if (err)
            throw err;
        callback(result);
    });
}
exports.getPost = getPost;
function getComments(postId, callback) {
    return exports.db.query("SELECT * FROM ".concat(exports.commentsTable, " WHERE postId = ").concat(postId), function (err, result) {
        if (err)
            throw err;
        callback(result);
    });
}
exports.getComments = getComments;
function addComment(postId, content, name, callback) {
    return exports.db.query("INSERT INTO ".concat(exports.commentsTable, " (postId, content, name) VALUES (\"").concat(postId, "\", \"").concat(content, "\", \"").concat(name, "\")"), function (err, result) {
        if (err)
            throw err;
        callback(result);
    });
}
exports.addComment = addComment;
