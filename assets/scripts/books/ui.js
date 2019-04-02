const getBooksSuccess = function (response) {
  // console.log(response)
  $('#message').text('')
  $('#books-display').html('')
  response.books.forEach(function (book) {
    console.log(book.author)
    $('#books-display').append(`
      <h3>${book.title}</h3>
      <p>author: ${book.author}</p>
      <p>${book.id}</p>
      <br>
      `
    )
    // $('#books-display').append('<p>' + book.author + '</p>') >>>this works as well
  })
}
const getBookSuccess = function (response) {
  // console.log(response)
  $('#message').text('')
  $('#books-display').html('')
  $('#books-show input').val('')
  $('#books-display').append(`
    <h3>${response.book.title}</h3>
    <p>author: ${response.book.author}</p>
    <p>${response.book.id}</p>
    <br>
    `
  )

  // $('#books-display').append('<p>' + book.author + '</p>') >>>this works as well
}
const onUpdateSuccess = function (apiResponse) {
  $('#books-display').html(`
    <h4>Title : ${apiResponse.book.title}</h4>
    <h4>Author : ${apiResponse.book.author}</h4>
    <br>
    `)
}
const getSuccessCreate = function (apiResponse) {
  $('#books-display').html(`
    <h4>Title : ${apiResponse.book.title}</h4>
    <p>Author : ${apiResponse.book.author}</p>
    <p>id : ${apiResponse.book.id}</p>
    <br>
    `)
}

const onUpdateFilure = function () {
  $('#message').text('Index request failed')
}

const getBooksFailure = function () {
  // console.log('it broke')
  $('#message').text('Index request failed')
}

const getBookFailure = function () {
  // console.log('it broke')
  $('#message').text('Couldn\'t find that book')
}
const getDeleteConfirmation = function () {
  $('#message').text('You have deleted a book successfully!!')
}
const getDeleteFailure = function () {
  $('#message').text('Couldn\'t Delete that book')
}
const onFailureCreate = function () {
  $('#message').text('Couldn\'t Create that book')
}

module.exports = {
  getBooksSuccess,
  getBooksFailure,
  getBookSuccess,
  getBookFailure,
  getDeleteConfirmation,
  getDeleteFailure,
  onUpdateSuccess,
  onUpdateFilure,
  getSuccessCreate,
  onFailureCreate
}
