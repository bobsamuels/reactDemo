angularReactModule.controller('ReactRepeatCtrl', function ($scope, dataGetterSvc) {
    $scope.loading = true;
    $scope.added = false;
    $scope.startLoad = new Date();
    $scope.beginRetrieve = new Date();
    $scope.retrieveTime;

    dataGetterSvc.getData(0, 5000).then(function(recs){
        $scope.data = recs;
        $scope.loading = false;
        $scope.endRetrieve = new Date();
    })

    $scope.loadMore = function(){
        $scope.loading = true;
        $scope.beginRetrieve = new Date();
        $scope.startLoad = new Date();
        dataGetterSvc.getData(5000, 10000).then(function(recs){
            $scope.data = $scope.data.concat(recs);
            $scope.added = true;
            $scope.loading = false;
            $scope.endRetrieve = new Date();
        });
    };
});