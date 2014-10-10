angularReactModule.directive('navBar', function($route){
    return{
        restrict: 'E',
        templateUrl:'/directives/nav-bar.html',
        link: function(scope, element, attrs) {
            scope.isActive = function (path) {
                if ($route.current && $route.current.regexp) {
                    return ($route.current.regexp.test(path) ? "active" :  "");
                }
                return "";
            };

        }
    }
});