"use strict";
//aplikacji MyTutorialApp przydzielamy kontroler MainController
app.controller('MainController', function( $scope ){
	//do $scope przypisujemy wszystkie nasze zmienne, których chcemy używać w obrębie DIV'a określonego jako
	//aplikacja

	//first content:
	$scope.understand = "I now understand how the scope works!";
	$scope.inputValue = "";
	$scope.showFirstContent = false;

	//second content:
	$scope.selectedPerson = 0; //holds the OBJECT of selected person
	$scope.selectedGenre = 0; //holds the STRING of selected genre
	$scope.people = [
		{ id: 0, name: 'Leon', music: ['Rock', 'Metal', 'Dubstep', 'Electro'], live: true},
		{ id: 1, name: 'Chris', music: ['Indie', 'Drumstep', 'Dubstep', 'Electro'], live: true },
		{ id: 2, name: 'Harry', music: [ 'Rock', 'Metal', 'Thrash Metal', 'Heavy Metal' ], live: false },
    	{ id: 3, name: 'Allyce', music: [ 'Pop', 'RnB', 'Hip Hop' ], live: true } 
	];
	$scope.showSecondContent = false;

	//third content:
	$scope.showThirdContent = false;

	//fourth content:
	$scope.showFourthContent = false;

	//fifth content
	$scope.showFifthContent = false;
	$scope.newPerson = null;
	$scope.addNew = function(){
		//wyciągniemy dane z modelu newPerson:
		if($scope.newPerson != null && $scope.newPerson != ""){
			console.log("Added new person by the name: " + $scope.newPerson);
			$scope.people.push({ id: $scope.people.length, name: $scope.newPerson, music: [], live: true });
		}
	}
});