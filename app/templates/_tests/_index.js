var <%= moduleVar %> = require('../lib');
var demand = require('must');

define('<%= moduleName %>', function () {
  it('should exist', function () {
    demand(<%= moduleVar %>).to.exist();
  });
});
