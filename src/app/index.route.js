export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm',
      navCfg: {
          index:0,
          title: 'Home',
          state: 'home',
          ico: 'home'
      }
    });

  $urlRouterProvider.otherwise('/');
}
