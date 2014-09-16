(function(){
    'use strict'

    var brleases = angular.module('brleases', []);

    var GalleryCtrl = function($http){
        this.images = [];
        $http.get('listImages.php').success($.proxy(this, 'setImages'));
    }

    GalleryCtrl.prototype.setImages = function(data) {
           this.images = data;
    }

    GalleryCtrl.prototype.getImages = function(id) {
        return this.images[id];
    }

    brleases.controller('GalleryCtrl', GalleryCtrl);

})();