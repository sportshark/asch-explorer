'use strict';

angular.module('asch_explorer',[
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngProgress',
    'ui.bootstrap',
    'gettext',
    'monospaced.qrcode',
    'asch_explorer.system',
    'asch_explorer.socket',
    'asch_explorer.blocks',
    'asch_explorer.transactions',
    'asch_explorer.address',
    'asch_explorer.search',
    'asch_explorer.tools',
    'asch_explorer.currency'
]);

angular.module('asch_explorer.system', []);
angular.module('asch_explorer.socket', []);
angular.module('asch_explorer.blocks', []);
angular.module('asch_explorer.transactions', []);
angular.module('asch_explorer.address', []);
angular.module('asch_explorer.search', []);
angular.module('asch_explorer.tools', ['naturalSort']);
angular.module('asch_explorer.currency', []);
