(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        // RequireJS already guards against potential multiple loads by not redefining an already existing module.
        // Concurrent loads do not seem possible given RequireJS's sequential processing of modules in queue.

        // name/id of the module will be based on path given by consumer
        // Can be good or bad depending on how consumer structured their script folders/pathing
        define(factory);
    } else if (typeof exports === 'object' || (typeof module === 'object' && module.exports)) {
        // Node, CommonJS-like

        // Does not seem like multiple/concurrent loads are possible with browserify due to static linking
        module.exports = factory();
    }
    // Browser globals (root is window)
    // Protect against multiple loads
    if (typeof root !== 'undefined') {
        if (root.umd !== undefined) return;
        // and concurrent loads
        if (root.umdLoading) return;

        root.umdLoading = true;
        root.umd = factory();
        delete root.umdLoading;
    }
}(this, function () {
    var umd = {};

    // Slightly awkward to publicly expose that function just so we can test multiple loads
    (function () {
        "use strict";
        (function () {
            "use strict";

            /* ## Malfunctions
             * @memberof umd
             */

            /**
             * @namespace Constants
             * @hideconstructor
             * @classdesc Constants defined by umd SDK.
             */
            var Constants = umd.Constants = {};
            Constants.version = "1.0.1";

            "use strict";

            var Client = umd.Client = function (msg) {
                var _s = this;

                function _constr(msg) {
                    _s.msg = msg;
                }

                _constr.apply(this, arguments);
                /**
                 * <b>Required.</b> Unloads this umd Client.
                 * @method release
                 * @public
                 * @memberof Client#
                 */


                this.fetchUniqueNumber = function () {
                    return _s.msg + Random.integer32();
                };
            };
        })();
    })();
    return umd;
}));