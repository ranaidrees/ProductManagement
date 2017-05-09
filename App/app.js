(function() {
    "use strict";
    var app = angular.module("productManagement", ["common.services","ui.router","ui.mask","ui.bootstrap", "productResourceMock"]);

    app.config(["$stateProvider","$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
             $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("home",
                {
                    url: "/",
                    templateUrl: "app/welcomeView.html"
                })
                .state("productList",
                {
                    url: "/products",
                    templateUrl: "app/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                
                .state("productEdit",
                {
                    url: "/prdoucts/edit/:productId",
                    templateUrl: "app/products/productEditView.html",
                    controller: "ProductEditCtrl as vm",
                    abstract: true,
                    resolve: {
                        productResource: "productResource",

                        product: function (productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            return productResource.get({ productId: productId }).$promise;
                        }
                    }

                    //resolve: {
                    //    productResource: "productResource",
                    //    product: function(productResource, $stateParams) {
                    //        var productId = $stateParams.productId;
                    //        return productResource.get({ productId: productId }).$prmoise();
                    //    }
                  //  }
                })
            .state("productEdit.info",
                {
                    url: "/info",
                    templateUrl: "app/products/productEditInfoView.html"
                })
                .state("productEdit.price",
                {
                    url: "/price",
                    templateUrl: "app/products/productEditPriceView.html"
                })
                 .state("productEdit.tags",
                {
                    url: "/tags",
                    templateUrl: "app/products/productEditTagsView.html"
                })
                .state("productDetails", {
                    url: "/products/:productId",
                    templateUrl: "app/products/productDetailsView.html",
                    controller: "ProductDetailCtrl as vm",
                    resolve: {
                        productResource: "productResource",

                        product: function (productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            return productResource.get({ productId: productId }).$promise;
                        }
                    }
                });
        }]

        );
 
   
})();

