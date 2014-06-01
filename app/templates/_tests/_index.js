var <%= moduleVar %> = require('<%= moduleName %>');
var demand = require('must');

define('<%= moduleName %>', function () {
  it('should exist', function () {
    demand(<%= moduleVar %>).to.exist();
  });
});