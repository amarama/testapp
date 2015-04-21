var next = (function (module) {
    "use strict";
    module.doIt = function (resultObject) {
        resultObject.prepend(Date() + '<br/>');
    };

    return module;
}(next || {}));