'use strict';
var yeoman = require('yeoman-generator');
var yosay  = require('yosay');
var chalk  = require('chalk');


var NodeModuleGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Node Module generator!'));
    this.log(chalk.magenta(
      'I\'m a simple generator for creating node modules quickly. I use mocha ' +
      'for testing and gulp for building.'
    ));

    var prompts = [
    {
      name: 'moduleName',
      message: 'What\'s your module called?'
    },
    {
      name: 'moduleVar',
      message: 'What should your module be imported as?'
    },
    {
      type: 'confirm',
      name: 'library',
      message: 'Is this a library?'
    }];

    this.prompt(prompts, function (props) {
      this.moduleName = props.moduleName;
      this.moduleVar  = props.moduleVar;
      this.isLibrary  = props.library;

      done();
    }.bind(this));
  },

  app: function () {
    if (this.isLibrary) {
      this.mkdir('lib');
      this.template('_lib/_index.js', 'lib/index.js');
    } else {
      this.mkdir('bin');
      this.template('_bin/_index.js', 'bin/index.js');
    }

    this.mkdir('tests');
    this.template('_tests/_index.js');

    this.mkdir('examples');
    this.template('_examples/_example.js', 'example.js');

    this.copy('.editorconfig', '.editorconfig');
    this.copy('.jshintrc', '.jshintrc');
    this.template('_gulpfile.js', 'gulpfile.js');
    this.template('_package.json', 'package.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = NodeModuleGenerator;
