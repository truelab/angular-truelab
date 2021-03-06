'use strict';

angular
    .module('truelab', [
        'truelab._',
        'truelab.loadImage',
        'truelab.debounce',
        'truelab.countdown',
        'truelab.strings',
        'truelab.utils'
    ]);

/**
 * @ngdoc overview
 * @name truelab
 *
 * @requires truelab._
 * @requires truelab.loadImage
 * @requires truelab.debounce
 * @requires truelab.countdown
 * @requires truelab.strings
 * @requires truelab.utils
 *
 * @description
 *
 * # truelab
 *
 * ## The main module for truelab
 * There are several sub-modules included with the truelab module, this module includes ALL sub-modules.
 *
 * The modules are:
 *
 *   -  {@link truelab._}
 *
 *   -  {@link truelab.loadImage}
 *
 *   -  {@link truelab.debounce}
 *
 *   -  {@link truelab.countdown}
 *
 *   -  {@link truelab.strings}
 *
 *   -  {@link truelab.utils}
 *
 * --------------
 * ## Usage
 *
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head></head>
 * <body>
 *   <script src="js/jquery.min.js"></script><!-- !!! includes jquery !!! -->
 *   <script src="js/lodash.min.js"></script><!-- !!! includes lodash !!! -->
 *
 *   <script src="js/angular.min.js"></script>
 *   <script src="js/angular-truelab.min.js"></script>
 *
 *   <script>
 *     // ...and add 'truelab' as a dependency
 *     var myApp = angular.module('myApp', ['truelab']);
 *   </script>
 * </body>
 * </html>
 * </pre>
 *
 */

