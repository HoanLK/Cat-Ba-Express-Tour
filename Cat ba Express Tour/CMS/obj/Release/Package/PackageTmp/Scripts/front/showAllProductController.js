frontApp.controller("showAllProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.products = [];

    //Lấy tất cả sản phẩm
    $http.get('/api/ProductsAPI')
       .success(function (data) {
           $scope.products = data;
       });
}]);