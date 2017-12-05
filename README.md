Circle CI Status: [![CircleCI](https://circleci.com/gh/5356-ct/lit.svg?style=svg)](https://circleci.com/gh/5356-ct/lit)

# Documentation

#### Dependencies

* MySQL (you can install this with `brew install mysql`
* Create database called `lit_development`
* A good UI tool to administrate mysql is called Sequel Pro. I highly recommend it.
* To run the app locally, open up `dbconnection.js` in the project root folder
* Change the credentials to something like this:

    ```
    host:'localhost',
    user:'root',
    password:'',
    database:'lit_development'
    ```

* Import the seed data via Sequel Pro. The seed file is  `seed/lit_development_2017-12-01.sql`

#### Run app with

In app root directory, run
```javascript
npm install -d
PORT=3001 node ./bin/www
```

Open a new console/terminal. CD into client/ folder. Run

```javascript
npm install -d
npm start
```

Go to localhostl:3000


or

```javascript
yarn install
yarn start
```


#### To Test
```javascript
yarn test
```

#### Database

We use MySQL 

There is a seed file in `seed/` folder called `lit_development_2017-12-01.sql`


# IGNORE EVERYTHING BELOW THIS LINE


# (GitHub-Flavored) Markdown Editor

Basic useful feature list:

 * Ctrl+S / Cmd+S to save the file
 * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML
 * Drag and drop a file into here to load it
 * File contents are saved in the URL so you can share files


I'm no good at writing sample / filler text, so go write something yourself.

Look, a list!

 * foo
 * bar
 * baz

And here's some code! :+1:

```javascript
npm start
```

This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.


Props to Mr. Doob and his [code editor](http://mrdoob.com/projects/code-editor/), from which
the inspiration to this, and some handy implementation hints, came.

### Stuff used to make this:

 * [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing
 * [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor
 * [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks
 * [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs


