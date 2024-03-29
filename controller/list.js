app.controller('listProductCtrl', function ($scope, $http) {
    // console.log("Thành công");
    $scope.danhsachProduct = [];

    $http ({
        method: 'GET',
        url : "http://localhost:3000/product",
    }).then(function (response) {
        $scope.danhsachProduct = response.data;
    })

    $scope.onDelete = function(id){
        let confirm = window.confirm('Bạn có muốn xóa');
        if(confirm) {
            $http({
                method: 'DELETE',
                url : "http://localhost:3000/product/" + id,
            }).then(function (response) {
                alert("Xóa thành công");
                window.location.href = "#!/"
            });
        }
        
    }

})// end 