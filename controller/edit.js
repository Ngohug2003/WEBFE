app.controller('editProductCtrl', function ($scope, $http,$routeParams) {
    console.log($routeParams)
    // console.log("Thành công");
    $scope.product = {
        id : '',
        name : '',
        image : '',
        price : ''

    }
    $scope.validate = {
        trangthai : true ,
        noidung : ""
    }
    $http({
        method : 'GET',
        url : "http://localhost:3000/product/" + $routeParams.id,
    }).then(function(response) {
        $scope.product = response.data;
    })

    $scope.onClickUpdate = function(){

        $scope.validate.trangthai = true;

        if($scope.product.id ===""){
            $scope.validate.trangthai = false;
            return;
        }
        if($scope.product.name ===""){
            $scope.validate.trangthai = false;  
            return;
        }
        if($scope.product.image ===""){
            $scope.validate.trangthai = false;
            return;
        }
        if($scope.product.price ===""){
            $scope.validate.trangthai = false;
            return;
        }

        $http({
            method : "PUT",
            url : "http://localhost:3000/product/" + $routeParams.id,
            data : $scope.product
        }).then(function(response){
            alert("Update thành công")
            window.location.href = "#!/"
        })
    }

})// end 