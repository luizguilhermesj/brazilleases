describe('GalleryCtrl', function(){

    var ctrl;

    beforeEach(module('brleases'));
    beforeEach(inject(function($controller) {
        ctrl = $controller('GalleryCtrl', this);
    }))

  it('should create "images" model with 3 phones', function() {
    expect(ctrl.images.length).toBe(3);
  });

});