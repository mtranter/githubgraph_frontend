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
})    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'vm',
      navCfg: {
          index:0,
          title: 'About',
          state: 'about',
          ico: 'help'
      }
    });

  $urlRouterProvider.otherwise('/');
}
