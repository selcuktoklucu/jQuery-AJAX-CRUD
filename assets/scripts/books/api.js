const config = require('../config.js')

const getBooks = function () {
  return $.ajax({
    //                       This part was givin error because we were accesing to server this way we reached books
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}
const getBook = function (id) {
  return $.ajax({
    //                       This part was givin error because we were accesing to server this way we reached books
    url: config.apiUrl + `/books/${id}`,
    // url: config.apiUrl + '/books/' + id,
    method: 'GET'
  })
}

const deleteBook = function (id) {
  return $.ajax({
    //                       This part was givin error because we were accesing to server this way we reached books
    url: config.apiUrl + `/books/${id}`,
    // url: config.apiUrl + '/books/' + id,
    method: 'DELETE'
  })
}

const updateBook = function (formData) {
  return $.ajax({
    //                       This part was givin error because we were accesing to server this way we reached books
    url: config.apiUrl + `/books/${formData.book.id}`,
    method: 'PATCH',
    data: formData
  })
}
const createBook = function (formData) {
  return $.ajax({
    //                       This part was givin error because we were accesing to server this way we reached books
    url: config.apiUrl + `/books`,
    method: 'POST',
    data: formData
  })
}
module.exports = {
  getBooks,
  getBook,
  deleteBook,
  updateBook,
  createBook
}
