export function runBlock ($log, $rootScope, $timeout) {
  'ngInject';
  $log.debug('runBlock end');
  
        $rootScope.$on('$viewContentLoaded', ()=> {
          $timeout(() => {
            componentHandler.upgradeAllRegistered();
          })
        });
}
