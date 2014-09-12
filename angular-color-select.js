/**
 * Color Select
 *
 * Inspired by http://bootstrap-colorselector.flaute.com/
 *
 * @author Karen Ziv <me@karenziv.com>
 *
 * @todo read 'multiple' property from select box
 * @todo pass through ngModel
 */
'use strict';

(function () {

  // @todo find the specific script path
  var scripts = document.getElementsByTagName('script');
  var currentScriptPath = scripts[scripts.length-1].src;

  angular.module('ngColorSelect', [])
    .directive('colorSelect', function($compile) {
      
      return {
        restrict : 'A',
        replace: true,
        templateUrl : currentScriptPath.replace('ng-color-select.js', 'ng-color-select.html'),
        transclude: true,
        scope: true,
        compile : function (element, attr, transclusionFunc) {
          return function (scope, iterStartElement, attr) {

            // Create a color swatch for each of the select box's options
            var origElem = transclusionFunc(scope);
            scope.colors = [];
            for (var i = 0; i < origElem.length; i++) {
              if (origElem[i].tagName === 'OPTION') {
                scope.colors.push({
                  name  : origElem[i].text,
                  class : origElem[i].value
                });
              }
            }
            
          };
        }
      };
      
    });
  
}());
