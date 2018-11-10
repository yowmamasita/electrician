angular.module('firebaseConfig', ['firebase'])

.run(function(){

  var config = {
    apiKey: "AIzaSyA0poX0OvnsuUoSu_PapiY_Zrg7ED3WUdc",
    authDomain: "electricity-service.firebaseapp.com",
    databaseURL: "https://electricity-service.firebaseio.com",
    projectId: "electricity-service",
    storageBucket: "electricity-service.appspot.com",
    messagingSenderId: "252229121415"
  };

  firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/
