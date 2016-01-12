
describe('directive navbar', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('marktranter'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element(`
      <ghg-navbar></ghg-navbar>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });
});
