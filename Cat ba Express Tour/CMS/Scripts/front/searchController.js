frontApp.controller("searchController", ['$scope', '$http', '$window', '$cookieStore','MenuMultiLevel', function ($scope, $http, $window, $cookieStore,MenuMultiLevel) {
    $scope.tours = [];
    $scope.category = { id: 1 };

    $scope.search = function () {
        if ($scope.searchText == null) {
            alert('Bạn vui lòng nhập từ khóa cần tìm kiếm');
        } else {
            $cookieStore.put('search', $scope.searchText);

            $window.location.href = '/tim-kiem';
        }
    };

    //Lấy danh sách Category gán cho $scope.categories
    $http.get('/API/CategoryProductsAPI/').success(function (data) { $scope.categories = MenuMultiLevel.getDropdownMenuCategoryProduct(data); });

    $http.get('/API/ProductsAPI/')
        .success(function (data) {
            $scope.tours = data;
        })
}]);