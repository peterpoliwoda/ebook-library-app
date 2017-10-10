const books = require('./books.json');

var ebookCtrl = {
    getAllEbooks: function() {
        return books;
    }
}

module.exports = ebookCtrl;