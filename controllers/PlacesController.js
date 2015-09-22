studentRoster.controller('PlacesCtrl', function PlacesCtrl($scope, QuestionsFactory) {
  $scope.questions = QuestionsFactory.places;
  $scope.QuestionsFactory = QuestionsFactory;
});
