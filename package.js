Package.describe({
  name: 'tunifight:loggedin-mixin',
  version: '0.1.0',
  summary: 'A simple logged-in and roles check mixin to use with mdg:validated-method package',
  git: 'https://github.com/nabiltntn/loggedin-mixin.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'check', 'underscore']);
  api.addFiles('loggedin-mixin.js');
  api.export('LoggedInMixin');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tunifight:loggedin-mixin');
  api.addFiles('loggedin-mixin-tests.js');
});
