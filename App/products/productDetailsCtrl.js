(function () {
    "use strict";
    var ProductDetailCtrl = function (product) {
        var vm = this;

        vm.product = product;

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",["product",
            ProductDetailCtrl]);

   
}());
