angular.module('ie8provider', []).provider('ie8', function() {
  this.$get = angular.noop;
  var customTags = this.customTags = [];
  var createDocumentFragment = document.createDocumentFragment;
  if(createDocumentFragment.call(document).createElement) {
    document.createDocumentFragment = function () {
      var fragment = createDocumentFragment.call(document);
      for (var i = 0; i < customTags.length; i++) {
        fragment.createElement(customTags[i]);
      }
      return fragment;
    };
  }
});

