/*global GraphCtrl*/

export function NetworkGraphDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/network/networkgraph.directive.html',
    scope: {
        user:'&',
        isCluster:'&',
        isRadial:'&'
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
    GraphCtrl.fetch('mtranter');
    
    function setupWatch(watchWhat){
        $scope.watch(watchWhat, 
            angular.bind(this, this.drawGraph));
    }
    
    [() => this.isRadial, () => this.isCluster]
        .forEach(setupWatch);
        
    $scope.$watch(() => this.user, angular.bind(this, this.drawGraph));
    
    $scope.$on('$destroy', GraphCtrl.destroy);
  }
  drawGraph(){
      var method = (this.isRadial ? 'radial' : 'linear') + (this.isCluster ? 'cluster' : 'tree');
      GraphCtrl[method]();
  }
}