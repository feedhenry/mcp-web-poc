'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /services when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/services");
  });


  describe('services', function() {

    beforeEach(function() {
      browser.get('index.html#!/services');
    });


    it('should render services when user navigates to /services', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for services/);
    });

  });
});
