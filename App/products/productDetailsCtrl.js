(function () {
    "use strict";
    var ProductDetailCtrl = function (product, ProductService) {
        var vm = this;

        vm.product = product;
        vm.marginPercent = ProductService.calculateMarginPercent(vm.product.price, vm.product.cost);

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",["product","ProductService",
            ProductDetailCtrl]);

   
}());
