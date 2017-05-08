(function() {
    "use strict";
   var ProductListCtrl = function(productResource) {
       var vm = this;
       productResource.query(function(data) {
           vm.products = data;
       });
        //vm.products = [
        //    {
        //        "productId": 1,
        //        "productName": "Leaf Rake",
        //        "productCode": "GDN-0011",
        //        "releaseDate": "March 19, 2009",
        //        "description": "Leaf rake with 48-inch handle.",
        //        "cost": 9.00,
        //        "price": 19.95,
        //        "category": "garden",
        //        "tags": ["leaf", "tool"],
        //        "imageUrl": "http://openclipart.org/image/ 300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        //    },
        //    {
        //        "productId": 2,
        //        "productName": "Leaf Rake2",
        //        "productCode": "GDN-0012",
        //        "releaseDate": "March 19, 2010",
        //        "description": "Leaf rake2 with 48-inch handle.",
        //        "cost": 10.00,
        //        "price": 20.95,
        //        "category": "garden",
        //        "tags": ["leaf", "tool"],
        //        "imageUrl": "http://openclipart.org/image/ 300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        //    }
        //];
        vm.showImage = false;
        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }

   }
    angular.module("productManagement").controller("ProductListCtrl", ["productResource",ProductListCtrl]);
}());