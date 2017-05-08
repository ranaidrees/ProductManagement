(function() {
    "use strict";
    var productResource = function($resource) {
        return $resource("/api/products/:productId");
    }
    angular.module("common.services").factory("productResource", ["$resource", productResource]);

}())