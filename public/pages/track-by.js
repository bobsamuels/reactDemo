angularReactModule.controller('TrackByCtrl', function ($scope, dataGetterSvc) {
    $scope.loading = true;
    $scope.added = false;
    $scope.startLoad = new Date();
    $scope.beginRetrieve = new Date();

    dataGetterSvc.getData(0, 5000).then(function(recs){
        $scope.rows = recs;
        $scope.loading = false;
        $scope.endRetrieve = new Date();
    })

    $scope.getRows = function(){
        return $scope.rows;
    }

    $scope.loadMore = function(){
        $scope.loading = true;
        $scope.beginRetrieve = new Date();
        $scope.startLoad = new Date();
        dataGetterSvc.getData(5000, 10000).then(function(recs){
            $scope.rows = $scope.rows.concat(recs);
            $scope.added = true;
            $scope.loading = false;
            $scope.endRetrieve = new Date();
        });
    };

    $scope.updateCnt = function(row){
        row.updated_count += 1;
    }

    $scope.incrementAll = function(){
        $scope.rows.forEach(function(row){
            return row.updated_count += 1;
        });
    }
});