/*global GraphCtrl*/

export function NetworkGraphDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/githubgraph/githubgraph.directive.html',
    scope: {
        user:'=',
        isCluster:'=',
        isRadial:'='
    },
    controller: NetworkGraphController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NetworkGraphController {
  constructor ($scope) {
    'ngInject';
    
    var setupWatch = function(watchWhat){
        $scope.$watch(watchWhat, 
            angular.bind(this, this.drawGraph));
    }.bind(this);
    
    [() => this.isRadial, () => this.isCluster]
        .forEach(setupWatch);
        
    $scope.$watch(() => this.user, angular.bind(this, 
        () => GithubGraphCtrl.fetch(this.user())));
    
    $scope.$on('$destroy', GithubGraphCtrl.destroy);
  }
  drawGraph(){
      var method = (this.isRadial ? 'radial' : 'linear') + (this.isCluster ? 'cluster' : 'tree');
      GithubGraphCtrl[method]();
  }
}