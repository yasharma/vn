"use strict";

app.controller('detailController', ['$scope','infoDetail',
	function($scope,infoDetail) {


		/************************************
		* Get facilities
		*************************************/

		$scope.roomStyleList = [
			{
				_id: 1,
				name: "Auditorium",
				attachment_type: "image",
				capacity: '40max',
				src:"assets/images/audi.gif",
			},
			{
				_id: 2,
				name: "Banquet",
				attachment_type: "image",
				capacity: '10max',
				src:"assets/images/Banquet.gif"
			},
			{
				_id: 3,
				name: "Hollow Square",
				attachment_type: "image",
				capacity: '50max',
				src:"assets/images/hollow.gif"
			},
			{
				_id: 4,
				name: "Classroom",
				attachment_type: "image",
				capacity: '100max',
				src:"assets/images/class.gif"
			},
			{
				_id: 5,
				name: "U-Shape",
				attachment_type: "image",
				capacity: '50max',
				src:"assets/images/u-shape.gif"
			},
			{
				_id: 6,
				name: "Conference",
				attachment_type: "image",
				capacity: '100',
				src:"assets/images/confrence.gif"
			},
			{
				_id: 7,
				name: "Theater",
				attachment_type: "image",
				capacity: '10max',
				src:"assets/images/lay_img3.png"
			}
		];

		/************************************
		* Get facilities
		*************************************/

		$scope.facilityList = [
			{
				label: "Wifi",
				attachment_type: "image",
				src:"assets/images/tv1_icon.png",
			},
			{
				label: "Tv",
				attachment_type: "image",
				src:"assets/images/tv_icon.png"
			},
			{
				label: "Room Service",
				attachment_type: "image",
				src:"assets/images/tv2_icon.png"
			},
			{
				label: "Music",
				attachment_type: "image",
				src:"assets/images/tv4_icon.png"
			},
			{
				label: "Parking",
				attachment_type: "icon",
				src:"local_parking"
			}
		];
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(infoDetail,function (value,key) {
		    $scope[key] = value;
		});	
	}
]);



