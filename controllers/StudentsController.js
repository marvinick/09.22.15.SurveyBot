studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, QuestionsFactory) {
  $scope.questions = QuestionsFactory.students;
  $scope.QuestionsFactory = QuestionsFactory;
});
