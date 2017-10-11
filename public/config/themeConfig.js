"use strict";

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default');

    $mdThemingProvider.definePalette('hoteljot', {
    '50': 'ffbb42',
    '100': 'ffbb42',
    '200': 'ffbb42',
    '300': 'ffbb42',
    '400': 'ffbb42',
    '500': 'ffbb42',
    '600': 'ffbb42',
    '700': 'ffbb42',
    '800': 'ffbb42',
    '900': 'ffbb42',
    'A100': 'ffbb42',
    'A200': 'ffbb42',
    'A400': 'ffbb42',
    'A700': 'ffbb42',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('hoteljot')
    .accentPalette('blue');
});