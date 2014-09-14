/**
 * Color Select
 *
 * Inspired by http://bootstrap-colorselector.flaute.com/
 *
 * @author Karen Ziv <me@karenziv.com>
 *
 * @todo take color from data attribute, then value
 * @todo pass through ngModel
 * @todo change ng-color-picker class/id to ng-color-select
 */
'use strict';

(function () {

  // @todo find the specific script path
  var scripts = document.getElementsByTagName('script');
  var currentScriptPath = scripts[scripts.length-1].src;
  var dataColorAttribute = 'color';

  angular.module('ngColorSelect', [])
    .directive('colorSelect', function($compile) {
      
      return {
        restrict    : 'A',
        replace     : true,
        templateUrl : currentScriptPath.replace('angular-color-select.js', 'angular-color-select.html'),
        transclude  : true,
        scope       : true,
        compile     : function (element, attr, transclusionFunc) {
          return function (scope, iterStartElement, attr) {

            // Original select element attributes
            scope.attr = attr;
            scope.multiple = attr.hasOwnProperty('multiple');
            scope.elType   = scope.multiple ? 'checkbox' : 'radio'; // @todo this should be done in template

            // Create a color swatch for each of the select box's options
            var origElem = transclusionFunc(scope);
            scope.colors = [];
            for (var i = 0; i < origElem.length; i++) {
              if (origElem[i].tagName === 'OPTION') {

                // Get the display color value, prioritizing the data attribute over the value attribute
                var color = origElem[i].value;
                /*
                var dataColor = origElem[i].attributes.indexOf('data-' + dataColorAttribute);
                if (dataColor) {
                  color = dataColor;
                }
                */
                
                scope.colors.push({
                  name  : origElem[i].label,
                  color : color,
                  value : origElem[i].value
                });
              }
            }

          };
        }
      };
      
    });

}());
