(function() {
    "use strict";
    var ProductEditCtrl = function (product, ProductService, $state) {
        var vm = this;
        vm.product = product;
        vm.priceOption = "percent";
        vm.marginPercent = function() { return ProductService.calculateMarginPercent(vm.product.price, vm.product.cost); };
        //vm.marginPercent = function () {
        //    return ProductService.calculateMarginPercent(vm.product.price,
        //        vm.product.cost)
        //};
        
        /* Calculate the price based on a markup */
        vm.calculatePrice = function () {
            var price = 0;

            if (vm.priceOption == 'amount') {
                price = ProductService.calculatePriceFromMarkupAmount(
                    vm.product.cost, vm.markupAmount);
            }

            if (vm.priceOption == 'percent') {
                price = ProductService.calculatePriceFromMarkupPercent(
                    vm.product.cost, vm.markupPercent);
            }
            vm.product.price = price;
        };



        if (vm.product && vm.product.productId) {
            vm.title = "Edit " + vm.product.productName;
        } else {
            vm.title = "New Product";
        }
        vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = !vm.opened;
        };
        vm.submit = function(isValid) {
            if (isValid) {
                vm.product.$save(function(data) {
                    toastr.success("save successful");
                });
            } else {
                alert("Please correct the validation erros first");
            }
        }
        vm.cancel= function() {
            $state.go("productList");
        }
        vm.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                alert("Please enter one or more tags separated by commas");
            }
        };

        vm.removeTag = function (idx) {
            vm.product.tags.splice(idx, 1);
        };
    };
    angular.module("productManagement").controller("ProductEditCtrl", ["product", "ProductService", "$state", ProductEditCtrl]);
}())