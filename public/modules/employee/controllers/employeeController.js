"use strict";

app.controller('employeeController', ['$scope','$rootScope','globalRequest','$timeout','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$timeout,$mdDialog,toastService) {
		
		$scope.position_list = window.__API_PATH.POSITION;


		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.first_name = "";
			$scope.last_name = "";
			$scope.contact_number = "";
			$scope.email = "";
			$scope.departments = "";
			$scope.position = "";
			$scope.status = "";
			$scope.address = "";
			$scope.profile = "";
			$scope.profileProgress = -1;
			$scope.profileimages = '';
		};



		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();
		
		/************************************
		* Get employee list
		*************************************/		
		globalRequest.getStaff();

		/************************************
		* Get position list
		*************************************/			
		
		globalRequest.getPositionList();

		/************************************
		* Add employee
		*************************************/		
		

		$scope.addEmployee = function(){

			
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_MEMBER,
			            method:"POST",
			            data:{
			            	hotel_id         :  $rootScope.activeHotelData._id,
			            	first_name       :  $scope.first_name,
			            	last_name        :  $scope.last_name,
			            	contact_number   :  $scope.contact_number,
			            	email            :  $scope.email,
			            	status 		     :  status,
			            	departments      :  $scope.departments,
			            	profile_image    :  $scope.profileimages,
			            	position 	     :  $scope.position,
			            	address 	     :  $scope.address
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
		 		var popup;
			 	if(response.status == 1)
			 	{
			 		$scope.blank();
			 		if(!$rootScope.staffList)
			 		{
			 			$rootScope.staffList = [];
			 		}
			 		$rootScope.staffList.push(response.result);

			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });

		};

		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openEditForm = function(detail){
			$mdDialog.show({
				controller: 'editEmployeeController',
				templateUrl: '/modules/employee/views/edit_employee.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{empDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete employee
		*****************************************/	

		$scope.removeEmployee = function(empID,index){

			var request={
				url:window.__API_PATH.DELETE_MEMBER,
				method:"DELETE",
				params:{_id:empID}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$rootScope.staffList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
			globalRequest.uploadFiles($rootScope.activeHotelData._id,'profile',files).then(function (response) {	        
	                $timeout(function () {	                   
	                   $scope.profileimages = response.result[0].filename;
	                });
	            });
	    };

	    /*****************************************
		* Invite employee to login
		*****************************************/

	    $scope.sendInvitation = function(empData){
	    	//var edata = 'http://localhost:3000/api/invitation/'+empData.signupVerificationKey;
	    	var edata = '';
	    	edata 	 += 'employee_id='+empData._id;
	    	edata 	 += '&hotel_id='+$rootScope.activeHotelData._id;
	    	edata 	 += '&first_name='+empData.first_name;
	    	edata    += '&last_name='+empData.last_name;
	    	edata    += '&email='+empData.email;
	    	edata    += '&profile_image='+empData.profile_image;
	    	edata    += '&formtype=invitation';
	    	edata    += '&contact_number='+empData.contact_number;
	    	edata    += '&token='+empData.signupVerificationKey;
	    	edata     = window.btoa(edata);
	    	var url   = 'http://localhost:3000/invitation/'+edata;

	    	console.log(url);
	    };

	    /*$scope.viewDetail = function(){

	    };*/
		
	}
]);



