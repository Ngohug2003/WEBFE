app.controller('listProductCtrl', function ($scope, $http) {
    // console.log("Thành công");
    $scope.danhsachProduct = [];

    $http ({
        method: 'GET',
        url : "http://localhost:3000/product",
    }).then(function (response) {
        $scope.danhsachProduct = response.data;
    })

})// end 