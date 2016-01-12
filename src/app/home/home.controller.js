export class HomeController{
      constructor () {
            'ngInject';
            this.ctrl = {};
            this.isCluster = false;
            this.isRadial = false;
      }
      drawGraph(user){
          this.waiting = true;
          this.ctrl.draw(user, function(err){
              this.waiting = false;
              if(err){
                  alert(user + ' not found');
              }
          });
      }
}