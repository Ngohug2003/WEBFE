app.controller('detailProductCtrl', function ($scope, $http,$routeParams) {
    console.log($routeParams)
    // console.log("Thành công");
    $scope.product = {
        id : '',
        name : '',
        image : '',
        price : ''

    }
    $http({
        method : 'GET',
        url : "http://localhost:3000/product/" + $routeParams.id,
    }).then(function(response) {
        $scope.product = response.data;
    })

})// end 