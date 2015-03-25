## ie8provider

Custom tags are not supported originally on IE8

#### Usage

```html
<html ng-app="app">
<script src="bower_components/angular/angular.min.js"></script>
<script src="angular-ie8provider.js"></script>
<script>
var app = angular.module('app', ['ie8provider'], ['ie8Provider', function(ie8Provider) {
  // Add 'hello' custom tag supporting list
  ie8Provider.customTags.push('hello');
}]);
app.directive('hello', function() {
  return {
    restrict: 'E',
    template: 'Hello World'
  };
});
</script>
<hello></hello>
```

