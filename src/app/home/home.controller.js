export class HomeController{
      constructor ($scope) {
            'ngInject';
            this.ctrl = {};
            this.isCluster = false;
            this.isRadial = false;
            this._scope = $scope;
      }
      drawGraph(user){
          
          this.waiting = true;
          this.ctrl.draw(user, (err) => {
              this._scope.$apply(() => {this.waiting = false;});
              if(err){
                  alert(user + ' not found');
              }
          });
      }
}