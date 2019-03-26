[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery AJAX CRUD

## Prerequisites

- [http-study](https://git.generalassemb.ly/ga-wdi-boston/http-study)
- [json-study](https://git.generalassemb.ly/ga-wdi-boston/json-study)
- [jquery-dom](https://git.generalassemb.ly/ga-wdi-boston/jquery-dom)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests to an API using `curl` and AJAX to:
  - (R)EAD resource collection.
  - (R)EAD specific resource.
  - (D)ELETE specific resource.
  - (U)PDATE specific resource.
  - (C)REATE new resource.
- Use response data in future requests.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.
1. Run your front-end server with `grunt serve`

## Library API

| Verb   | URI Pattern  | Result |
|:-------|:-------------|:------------------|
| GET    | `/books`     | read list of books|
| GET    | `/books/:id` | read single book  |
| POST   | `/books`     | create book       |
| PATCH  | `/books/:id` | update book       |
| DELETE | `/books/:id` | destroy book      |

We'll make requests to and receive responses from an HTTP server hosted at
`https://wdi-library-api.herokuapp.com`.

If not already installed in chrome, let's add a [JSON formatting utility](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en).

Go to `https://wdi-library-api.herokuapp.com/books` to read the list of books.

## Methodical Approach

### jQuery AJAX Checklist

- [ ] Test API in browser (if possible)
- [ ] Test API with curl script
- [ ] Test API with AJAX

To implement AJAX, complete each step below, testing your web app along the way
and using error-driven development to figure out where to go next:

1. Adding the HTML:
  - [ ] Add **html form** to `index.html`
    - [ ] Add input fields (if required) and a `submit` input to the form
    - [ ] Add appropriate name attribute to inputs

1. Creating the event listener:

  - [ ] Attach an **event listener** that listens to the form submit event in `assets/scripts/app.js`.
     - [ ] Place within the **document ready** block.

1. Creating the submit handler callback:
  - [ ] Create a **submit handler** function in `assets/scripts/books/events.js`
     - [ ] Preventing default action?
     - [ ] Getting form field values, if necessary?

1. Calling the API:
     - [ ] Calling your api function:
          - [ ] Make an **API call** using **$.ajax** in `assets/scripts/books/api.js`
          - [ ] Invoke this function within your submit handler callback.
     - [ ] Handling response from calling the AJAX function:
         - [ ] Are you using `.then()` and `.catch()` and handling the successful and failure responses within each, respectively?
            - [ ] Easily check with just having `console.log` within each function's parenthesis. Then replace with your actual success and failure callbacks.

1. Handling API response:
     - [ ] Create **success and failure handler functions** in `assets/scripts/ books/ui.js`
     - [ ] Pass submit handler as a callback to the event listener

1. Test it out!
  - [ ] Test the feature again.
  Getting any Errors?
  - [ ] Double check each step.  Use more console.logs. Notice and fix any
    errors in console.
  Not getting errors?
  - [ ] You should see success or failure handler message on your page
  Don't see your messages on the page?
  - [ ] Add a div to hold the message on the page
  - [ ] Make sure to populate this div with content in your response handler
        functions within `ui.js`

### How to use `getFormFields`

Check out the [get-form-fields](get-form-fields.md) markdown file for help
with using the `getFormFields` function.

## CRUD a Book

Wait, what is
[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
and why do you keep saying it?

CRUD is an acronym that stands for:

- Create
- Read
- Update
- Destroy

These four words describe the four basic functions of persistently storing
data. They also closely relate to the HTTP verbs that we can use to interact
with an API through requests. We'll discuss each of them as we code them out.

### Code along: (R)EAD books collection

- browser
- curl
- AJAX

### Code along: (R)EAD specific book

- browser
- curl
- AJAX

### Lab: (D)ELETE specific book

- browser(?)
- curl
- AJAX

### Code along: (U)PDATE specific book

- browser(?)
- curl
- AJAX

### Lab: (C)REATE new book

- browser(?)
- curl
- AJAX

### Demo: UX

- Input Validation: Javascript
- Input Validation: HTML5
- Clearing Forms

## Additional Resources

- [Learn jQuery AJAX](https://learn.jquery.com/ajax/jquery-ajax-methods/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
