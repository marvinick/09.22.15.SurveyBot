studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, QuestionsFactory) {
  $scope.students = QuestionsFactory.students;
  $scope.places = QuestionsFactory.places;

  $scope.addStudentWithPermissionSlip = function(student) {
    student.permissionSlip = true;
  };

  $scope.addPlaceWithPermissionSlip = function(place) {
    place.permissionSlip = true;
  }
});
