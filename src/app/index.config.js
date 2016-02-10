(function() {
  'use strict';

  angular
	.module('chairYg')
	.config(config);

  /** @ngInject */
  function config($mdThemingProvider) {
	var customPrimary = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#f1fbfb',
        '400': '#ddf4f6',
        '500': '#c9eef0',
        '600': '#b5e8ea',
        '700': '#a1e1e5',
        '800': '#8ddbdf',
        '900': '#79d5da',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#65cfd4'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#bceceb',
        '100': '#a8e6e5',
        '200': '#94e0e0',
        '300': '#81dada',
        '400': '#6dd5d4',
        '500': '#59cfce',
        '600': '#45c9c8',
        '700': '#37bebd',
        '800': '#31aaa9',
        '900': '#2c9696',
        'A100': '#d0f1f1',
        'A200': '#e3f7f7',
        'A400': '#f7fdfd',
        'A700': '#268382'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);

    var customWarn = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#feefe9',
        '400': '#fedcd0',
        '500': '#fdcab7',
        '600': '#fcb89e',
        '700': '#fca585',
        '800': '#fb936d',
        '900': '#fa8154',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#fa6f3b'
    };
    $mdThemingProvider
        .definePalette('customWarn', 
                        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#fefdfc',
        '400': '#f5eeec',
        '500': '#ece0db',
        '600': '#e3d2ca',
        '700': '#dac3ba',
        '800': '#d2b5a9',
        '900': '#c9a698',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#c09888'
    };
    $mdThemingProvider
        .definePalette('customBackground', 
                        customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground')
  }

})();
