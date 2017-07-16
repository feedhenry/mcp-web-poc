'use strict';

angular.module('mcpWebPoc.version', [
  'mcpWebPoc.version.interpolate-filter',
  'mcpWebPoc.version.version-directive'
])

.value('version', '0.1');
