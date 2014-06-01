var <%= moduleVar %> = require('../lib');
var demand = require('must');

describe('<%= moduleName %>', function () {
  it('should exist', function () {
    demand(<%= moduleVar %>).to.exist();
  });
});
