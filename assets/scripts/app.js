'use strict'
const events = require('./books/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// ST  document ready function
$(() => {
  // console.log(config)
  // your JS code goes here
  $('#books-index').on('click', events.onGetBooks)
  $('#books-show').on('submit', events.onGetBook)
  $('#books-delete').on('submit', events.onDeleteBook)
  $('#books-update').on('submit', events.onUpdateBook)
  $('#books-create').on('submit', events.onCreateBook)
// submit is event ,  books-create is target
  // $('#books-update').on('submit', (event) => {
  //   event.preventDefault()
  //   console.log('Updating')
})
