angular.module('bonbac', ['ionic'])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.mytab', {
      url: '/mytab',
      views: {
        'tab-mytab': {
          templateUrl: 'templates/tab-mytab.html',
          controller: 'MyCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise(function($injector, $location){
    return "/tab/mytab";
  });

}])

.controller('MyCtrl', function($scope, data) {

  $scope.getItems = function() {
    var dividerHasMatch = {};
    return data.filter(function(item) {
      var doesMatch = !$scope.search
        || item.isDivider
        || item.name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;

      if (!item.isDivider && doesMatch) {
        dividerHasMatch[item.type] = true;
      }

      return doesMatch;
    }).filter(function(item) {
      if (item.isDivider && !dividerHasMatch[item.type]) {
        return false;
      }
      return true;
    });
  }

  $scope.getItemHeight = function(item) {
    return item.isDivider ? 30 : 60;
  };
  $scope.getItemWidth = function(item) {
    return '100%';
  };

  $scope.clearSearch = function() {
    $scope.search="";
  }
})

.value("data", 
[
  {
    isDivider: true,
    name: "brownDivider",
    type: "brown"
  },
  {
    isDivider: false,
    name: "brown1",
    type: "brown"
  },
  {
    isDivider: false,
    name: "brown2",
    type: "brown"
  },
  {
    isDivider: false,
    name: "brown3",
    type: "brown"
  },
  {
    isDivider: false,
    name: "brown4",
    type: "brown"
  },
  {
    isDivider: false,
    name: "brown5",
    type: "brown"
  },


  {
    isDivider: true,
    name: "blueDivider",
    type: "blue"
  },
  {
    isDivider: false,
    name: "blue1",
    type: "blue"
  },
  {
    isDivider: false,
    name: "blue2",
    type: "blue"
  },
  {
    isDivider: false,
    name: "blue3",
    type: "blue"
  },
  {
    isDivider: false,
    name: "blue4",
    type: "blue"
  },
  {
    isDivider: false,
    name: "blue5",
    type: "blue"
  },
    
  {
    isDivider: true,
    name: "greenDivider",
    type: "green"
  },
  {
    isDivider: false,
    name: "green1",
    type: "green"
  },
  {
    isDivider: false,
    name: "green2",
    type: "green"
  },
  {
    isDivider: false,
    name: "green3",
    type: "green"
  },
  {
    isDivider: false,
    name: "green4",
    type: "green"
  },
  {
    isDivider: false,
    name: "green5",
    type: "green"
  },

  {
    isDivider: true,
    name: "greyDivider",
    type: "grey"
  },
  {
    isDivider: false,
    name: "grey1",
    type: "grey"
  },
  {
    isDivider: false,
    name: "grey2",
    type: "grey"
  },
  {
    isDivider: false,
    name: "grey3",
    type: "grey"
  },
  {
    isDivider: false,
    name: "grey4",
    type: "grey"
  },
  {
    isDivider: false,
    name: "grey5",
    type: "grey"
  }
]);
