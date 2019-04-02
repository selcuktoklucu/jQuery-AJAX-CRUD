'use strict'

let apiUrl
const apiUrls = {
  production: 'https://wdi-library-api.herokuapp.com',
  development: 'https://wdi-library-api.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

console.log('API URL is: ', apiUrl)
module.exports = {
  apiUrl
}
