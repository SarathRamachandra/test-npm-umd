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
    (function () {
        "use strict";
        (function () {
            "use strict";
            var Constants = umd.Constants = {};
            Constants.version = "1.0.1";
            "use strict";
            var Client = umd.Client = function () {
                var _s = this;

                function _constr(msg) {
                    _s.msg = msg;
                }

                _constr.apply(this, arguments);

                this.fetchUniqueNumber = function () {
                    let maxUInt32 = 4294967295;
                    let minInt32 = -2147483648;
                    return _s.msg + " : " + (Math.floor(Math.random() * maxUInt32) + minInt32);
                };
            };
            Client.version = "1.0.2";
        })();
    })();
    return umd;
}));