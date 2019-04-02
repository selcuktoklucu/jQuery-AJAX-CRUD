const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetBooks = function () {
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}

const onGetBook = function (event) {
  event.preventDefault()
  // console.log('form submitted')
  // console.log(event.target)
  const data = getFormFields(event.target)

  console.log(data.id)
  api.getBook(data.id)
    .then(ui.getBookSuccess)
    .catch(ui.getBookFailure)
}
const onDeleteBook = function (event) {
  event.preventDefault()
  console.log('Success you got the onDeleteBook at the eventsJS file. passed event is ' + event)
  const data = getFormFields(event.target)

  console.log('Deleting Book ' + data + 'dataid is: ' + data.id)
  api.deleteBook(data.id)
    .then(ui.getDeleteConfirmation)
    .catch(ui.getDeleteFailure)
}

const onUpdateBook = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateBook(formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFilure)
}
const onCreateBook = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createBook(formData)
    .then(ui.getSuccessCreate)
    .catch(ui.onFailureCreate)
}

module.exports = {
  onGetBooks,
  onGetBook,
  onDeleteBook,
  onUpdateBook,
  onCreateBook
}
