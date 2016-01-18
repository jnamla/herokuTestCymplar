/** @ngInject */
export function mainNavbar(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {
      creationDate: '='
    },
    templateUrl: 'components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

}

/** @ngInject */
export class NavbarController {
  public relativeDate: string;
  public creationDate: number;

  constructor(moment: moment.MomentStatic) {
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
