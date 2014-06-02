# generator-node-module [![Build Status](https://secure.travis-ci.org/reem/generator-node-module.png?branch=master)](https://travis-ci.org/reem/generator-node-module)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### This Generator

generator-node-module is built to be a very simple, very easy to use generator
for creating lightweight node modules quickly. My hope is that by providing a
simple generator I can encourage both myself and others to factor out parts of
their projects into separate node modules, making life better for everyone!

This generator uses gulp as its build tool, mocha as its testing framework,
jshint as its linter, and must as its assertion library. It is set up for
continuous integration using travis and contains a useful jshintrc, giignore,
and editorconfig.

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-node-module from npm, run:

```bash
$ npm install -g yo
```

```bash
$ npm install -g generator-node-module
```

Finally, initiate the generator:

```bash
$ yo node-module
```

## License

MIT
