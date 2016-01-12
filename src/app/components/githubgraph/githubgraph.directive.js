/*global GithubGraphCtrl*/

export function GitHubGraphGraphDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/githubgraph/githubgraph.directive.html',
    scope: {
        ctrl: '=',
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
        
    this.ctrl.draw = function(user){
        GithubGraphCtrl.fetch(user, function(err){
            if(err){
                alert('User not found');
            }
        });
    }
    
    
    $scope.$on('$destroy', GithubGraphCtrl.destroy);
  }
  init(){
      GithubGraphCtrl.init();
  }
  drawGraph(){
      var method = (this.isRadial ? 'radial' : 'linear') + (this.isCluster ? 'cluster' : 'tree');
      GithubGraphCtrl[method]();
  }
}