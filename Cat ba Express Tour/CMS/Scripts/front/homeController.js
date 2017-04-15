frontApp.controller("homeController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    //$scope.spMois = [];
    $scope.products = [];
    $scope.diaDiemDeps = [];
    $scope.categoryProducts = [];

    //Lấy tất cả danh mục
    //Lấy tất cả danh mục
    $http.get('/API/CategoryProductsAPI?att=Home&&value=' + 1)
        .success(function (categoryProducts) {
            $scope.categoryProducts = categoryProducts;

            angular.forEach($scope.categoryProducts, function (value, index) {
                //Hiện thị sản phẩm mới ở Menu
                $http.get('/API/ProductsAPI?att=spMoi&&value=' + value.idCategory)
                    .success(function (products) {
                        $scope.categoryProducts[index].new4Products = angular.copy(products);
                    });

                //Hiển thị sản phẩm nổi bật ở từng danh mục
                //$http.get('/Products/Get4FeatureByCategory/' + value.idCategory)
                //    .success(function (products) {

                //        //Giới hạn ký tự cho Mô tả
                //        angular.forEach(products, function (valueProduct, indexProduct) {
                //            valueProduct.description = (valueProduct.description.length > 97) ? CutString(valueProduct.description, 100) : valueProduct.description;
                //        });

                //        $scope.categoryProducts[index].homeProducts = angular.copy(products);
                //    });

            });
        });

    //$http.get('/API/ProductsAPI?att=spMoi&&value=' + 1)
    //   .success(function (data) {
    //       $scope.spMois = data;
    //   });

    //Lấy địa điểm đẹp
    $http.get('/API/PostsAPI?att=diaDiemDepHome&&value=7')
       .success(function (data) {
           //Giới hạn ký tự cho Mô tả
           angular.forEach(data, function (valuePost, indexPost) {
               valuePost.description = (valuePost.description.length > 105) ? CutString(valuePost.description, 110) : valuePost.description;
           });
           $scope.diaDiemDeps = angular.copy(data);
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