'use strict';

eventsApp.controller('EventController', 
	function EventController($scope) {
		$scope.snippet = '<span style="color: red">Hi there</span>';
		$scope.boolValue = true;
		$scope.mystyle = {color: 'red'};
		$scope.myclass = "blue";
		$scope.buttonDisabled = true;
		$scope.sortorder = 'name';
		$scope.event = {
			name: 'Angular Boot Camp',
			date: 1359781015626,
			time: '10:00 am',
			location: {
				address: 'Monalisa Complex',
				city: 'Baroda',
				state: 'Gujarat',
				country: 'India'
			},
			imageUrl: 'img/angularjs-logo.jpg',
			sessions: [
				{
					name: 'Session01',
					creatorName: 'Shreel Desai',
					duration: '2 hours',
					level: 'Introductory',
					upVoteCount: 0
				},
				{
					name: 'Session02',
					creatorName: 'Shreel Desai',
					duration: '1 hour',
					level: 'Intermediate',
					upVoteCount: 0
				},
				{
					name: 'Session03',
					creatorName: 'Shreel Desai',
					duration: '2.5 hours',
					level: 'Difficult',
					upVoteCount: 0
				}
			]
		}
		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		}
		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}
	}
);