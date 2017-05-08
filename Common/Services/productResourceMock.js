(function() {
    "use strict";
    var app = angular.module("productResourceMock", ["ngMockE2E"]);
    app.run(function($httpBackend) {
        var products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/ 300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Leaf Rake2",
                "productCode": "GDN-0012",
                "releaseDate": "March 19, 2010",
                "description": "Leaf rake2 with 48-inch handle.",
                "cost": 10.00,
                "price": 20.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/ 300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            }
        ];

        var productUrl = "/api/products";
        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegEx = new RegExp(productUrl+"/[0-9][0-9]*",'');

        $httpBackend.whenGET(editingRegEx).respond(function (method, url, data) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];
            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);
            if (!product.productId) {
                // new product Id
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            } else {
            
                // Update Product
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId === product.productId) {
                        products[i] = product;
                        break;
                    }
                }
            }
            
            return [200, product, {}];
        });
        // Pass through any request for application files
        $httpBackend.whenGET(/app/).passThrough();
    });
}());