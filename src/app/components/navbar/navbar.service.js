export class NavbarService{
    constructor($state){
        'ngInject';
        this.states = $state.get().filter(function(v){
           return !!v.navCfg; 
        });
    }
    getNavbarStates() {
        return this.states;
    }
}