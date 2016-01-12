/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { HomeController } from './home/home.controller';
import { AboutController } from './about/about.controller';
import { GitHubGraphGraphDirective } from '../app/components/githubgraph/githubgraph.directive';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { NavbarService } from '../app/components/navbar/navbar.service';

angular.module('githubgraph', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('NavbarService', NavbarService)
  .directive('ghgNavbar', NavbarDirective)
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
  .directive('ghgGraph', GitHubGraphGraphDirective);
