studentRoster.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.students = [];
  factory.places = [];

  factory.addStudent = function() {
    var student = { name: factory.studentName, permissionSlip: false };
    factory.students.push(student);
    factory.studentName = null;
  };

  factory.addPlace = function() {
    var place = { name: factory.placeName, permissionSlip: false };
    factory.places.push(place);
    factory.placeName = null;
  }

  return factory;
});
