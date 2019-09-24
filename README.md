# lab-03

## Async

### Author: Antonella Gutierrez

### Links and Resources

* [submission PR](https://github.com/antonella-401-advanced-javascript/lab-03/pull/1)
* [travis](https://travis-ci.com/antonella-401-advanced-javascript/lab-03)

### Documentation
* [jsdoc](/docs/) (Server assignments)

### Modules
##### Exported Values and Methods

##### Save/Get/Get All Object To File
Implement the `save` method. Assign the object an id which is also used as the file name (plus `.json`). `save` is an asynchronous method and must return a promise. Handle any expectable errors. Implement the `get` method. See notes in starter code in `DocumentCollection`. Convert the supplied `id` and `this.folder` into correct path. `get` is an asynchronous method and must return a promise. Handle any expectable errors. Implement the `getAll` method. See notes in starter code in `DocumentCollection`. Read the file names from `this.folder`. Manage sequential and parallel workflows correctly. `getAll` is an asynchronous method and must return a promise. Handle any expectable errors.

### Setup
#### `.env` requirements
* `PORT` - Port Number

#### Running the app
* `npm start`
* Endpoint: `/`
    * Returns a boolean
* Endpoint: `/docs`
    * Returns JSDoc documentation pages

#### Tests
* Unit Tests: `npm test`
* Lint Tests: `npm run lint`

#### Whiteboard
![Whiteboard Diagram](whiteboard.png)