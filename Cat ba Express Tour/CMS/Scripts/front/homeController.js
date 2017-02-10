frontApp.controller("homeController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.spMois = [];
    $scope.products = [];
    $scope.diaDiemDeps = [];

    //Lấy tất cả danh mục
    $http.get('/API/CategoryProductsAPI?att=idCategoryParent&&value=' + $scope.idCategoryProduct)
       .success(function (data) {
           $scope.categoryProducts = data;
       });

    $http.get('/API/ProductsAPI?att=spMoi&&value=' + 1)
       .success(function (data) {
           $scope.spMois = data;
       });

    //Lấy địa điểm đẹp
    $http.get('/API/PostsAPI?att=diaDiemDepHome&&value=7')
       .success(function (data) {
           //Giới hạn ký tự cho Mô tả
           //angular.forEach(products, function (valueProduct, indexProduct) {
           //    valueProduct.description = (valueProduct.description.length > 105) ? CutString(valueProduct.description, 110) : valueProduct.description;
           //});
           $scope.diaDiemDeps = data;
       });


    //FUNCTION cut string 
    function CutString(input, limit) {
        var output = angular.copy(input);
        var index = angular.copy(limit - 1);

        while ((output[index] != ' ') && index < (output.length - 1)) {
            index++;
        }

        return (output.substring(0, index) + "...");
    }
}]);