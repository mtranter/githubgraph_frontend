export class HomeController{
      constructor () {
            'ngInject';
            this.ctrl = {};
            this.isCluster = false;
            this.isRadial = false;
      }
      drawGraph(user){
          this.ctrl.draw(user);
      }
}