﻿(function() {
    "use strict";
    var ProductEditCtrl = function (product,$state) {
        var vm = this;
        vm.product = product;
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
            if (isvalid) {
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
    angular.module("productManagement").controller("ProductEditCtrl", ["product","$state", ProductEditCtrl]);
}())