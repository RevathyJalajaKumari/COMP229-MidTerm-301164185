// define the book model
import booksModel from '../models/books.js';

/* GET books List page. READ */
export function displayBookList(req, res, next) {
    // find all books in the books collection
    booksModel.find((err, booksCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Book List', page: 'books/list', books: booksCollection });
    });
}

//  GET the Book Details page in order to add a new Book
export function displayAddPage(req, res, next) {

    /*****************
    * ADD CODE HERE *
    *****************/
    res.render('index', {title: 'Add Contact', page: 'books/edit', books: {}
    });
}

// POST process the Book Details page and create a new Book - CREATE
export function processAddPage(req, res, next) {

    /*****************
     * ADD CODE HERE *
     *****************/

    let newBook = booksModel({
        name: req.body.name,
        author: req.body.author,       
        published: req.body.published,
        description: req.body.description,
        price: req.body.price
    });

    booksModel.create(newContact,function(error, books){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/book-list');
    })
}

// GET the Book Details page in order to edit an existing Book
export function displayEditPage(req, res, next) {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;

    booksModel.findById(id, function(error, books){
        if(error){
            console.error(error);
            res.end(error);
        }

       res.render('index', {title: 'Edit Book', page: 'books/edit', books
       })
    })   

}

// POST - process the information passed from the details form and update the document
export function processEditPage(req, res, next) {
    /*****************
    * ADD CODE HERE *
    *****************/

    let id = req.params.id


    let editBook = booksModel({
        _id: req.body.id,
        name: req.body.name,
        author: req.body.author,       
        published: req.body.published,
        description: req.body.description,
        price: req.body.price
    });

    booksModel.updateOne({_id: id}, editBook,function(error, contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/books-list');
    })
}

// GET - process the delete by user id
export function processDelete(req, res, next) {
    /*****************
  * ADD CODE HERE *
  *****************/
}