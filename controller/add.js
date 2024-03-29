app.controller('addProductCtrl', function ($scope, $http) {
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
    $scope.onClickAdd = function(){
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
            method : "POST",
            url : "http://localhost:3000/product",
            data : $scope.product
        }).then(function(response){
            alert("Thêm thành công")
            window.location.href = "#!/"
        })
    }

  

})// end 