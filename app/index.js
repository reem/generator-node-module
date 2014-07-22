'use strict';
var yeoman = require('yeoman-generator');
var yosay  = require('yosay');
var chalk  = require('chalk');
var _str   = require('underscore.string');

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
      name: 'github',
      message: 'What\'s your github handle?'
    },
    {
      name: 'moduleName',
      message: 'What\'s your module called?'
    },
    {
      name: 'moduleVar',
      message: 'What should your module be imported as?'
    },
    {
      name: 'moduleDescription',
      message: 'What is this module?'
    },
    {
      name: 'license',
      message: 'What license do you want to publish this under?',
      default: 'MIT'
    }];

    this.prompt(prompts, function (props) {
      this.origModuleName    = props.moduleName;
      this.moduleName        = _str.slugify(props.moduleName);
      this.moduleVar         = props.moduleVar;
      this.moduleDescription = props.moduleDescription;
      this.github            = props.github;
      this.license           = props.license;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('lib');
    this.template('_lib/_index.js', 'lib/index.js');

    this.mkdir('tests');
    this.template('_tests/_index.js', 'tests/index.js');

    this.mkdir('examples');
    this.template('_examples/_example.js', 'examples/example.js');

    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('travis.yml', '.travis.yml');
    this.copy('gitignore', '.gitignore');

    this.template('_gulpfile.js', 'gulpfile.js');
    this.template('_package.json', 'package.json');

    this.template('_README.md', 'README.md');
  }
});

module.exports = NodeModuleGenerator;
