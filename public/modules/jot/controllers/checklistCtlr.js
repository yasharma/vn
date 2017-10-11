"use strict";

app.controller('checklistCtlr', ['$scope','$rootScope','toastService','$timeout',
	function($scope,$rootScope,toastService,$timeout) {

		/*****************************************
		* Default checklist
		*****************************************/

		$rootScope.checklist =  [
									{
										checklist_name:'Checklist1',
										item_list: [
										{name:'item1',status:0},{name:'item2',status:0},{name:'item3',status:0}
										]									
									},

									{
										checklist_name:'Checklist2',
										item_list: [
										{name:'item1',status:0},{name:'item2',status:0},{name:'item3',status:0}
										]									
									}
									
								];


		/*****************************************
		* Add new checklist
		*****************************************/
		
		
		$scope.addchecklist = function(){	
				$scope.mainItemError = '';
				if(!$scope.checklist_heading || $scope.checklist_heading == '')
				{
					
				} else {
					var storedCheckbox = $scope.checklist_heading;					
					$rootScope.checklist.push({checklist_name:storedCheckbox,item_list:[]});
					$scope.checklist_heading = '';
					$scope.showChecklistAdd = false;
					
				}	

				
		};


		/*****************************************
		* Add Sub-item in checklist
		*****************************************/
		
		$scope.addChecklistSubitem = function(index,itemName){
		

			if(itemName && itemName != "")
			{
				var alreadyExits  = $rootScope.checklist[index].item_list.filter(function(iValue){	
										return  iValue.name === itemName;
									});
			
				if(alreadyExits.length > 0)
				{
					var popup = {"message":"Item already exists.","class":""};
                	toastService.alert(popup);
				} else {
					
					$rootScope.checklist[index].item_list.push({name:itemName,status:0});
					$scope.ctlr.checklist_subitem[index]   = '';
				}
										
			}
			
		};


		/*****************************************
		* Store values of checklist in scope 
		*****************************************/

		$scope.storeChecklist = function(index,subIndex,modelValue){

			if(modelValue)
			{
				$rootScope.checklist[index].item_list[subIndex].status = 1;
			} else {
				$rootScope.checklist[index].item_list[subIndex].status = 0;
				
			}
			
		};

		/*****************************************
		* Edit parent list 
		*****************************************/

		$scope.editParentList = function(index,itemValue){			
			if(!itemValue || itemValue == "")
			{
				$scope.ctlr.editParent[index] = false;
			} else {
				$rootScope.checklist[index].checklist_name = itemValue;							
				$scope.ctlr.editParent[index] = false;
			}
						
		};


		/*****************************************
		* Delete checklist
		*****************************************/

		$scope.deleteChecklist = function(index){			
			$rootScope.checklist.splice(index, 1);
			$scope.ctlr.editParent[index] = false;									
		};




		/*****************************************
		* Edit subitem 
		*****************************************/

		$scope.editSubItem = function(index,oldValue,newValue,subINdex){	

			if($scope.ctlr.sublist)
			{
				if($scope.ctlr.sublist[index][subINdex])
				{
					$scope.ctlr.sublist[index][subINdex] = true;
				}
			}

			/************************************
			* Check edit field is empty or not
			************************************/

			if(!newValue || newValue == "") {

				/************************************
				* if empty,
				* Then remove subitem
				************************************/
				$rootScope.checklist[index].item_list = $rootScope.checklist[index].item_list.filter(function(checklist){						
							return checklist.name != oldValue;
						});
			} else {

				/****************************************
				* if not empty,
				* Then replace subitem value with new
				*****************************************/
				
				var sublistCount = -1;	
				var alreadyExits  = $rootScope.checklist[index].item_list.filter(function(iValue){
										sublistCount++;								

										if(sublistCount == subINdex)
										{
											return false;
										}	
										return  iValue.name === newValue;									
										
									});

				if(alreadyExits.length > 0)
				{
					var popup = {"message":"Item already exists.","class":""};
	            	toastService.alert(popup);
				} else {
		
					$rootScope.checklist[index].item_list = $rootScope.checklist[index].item_list.filter(function(checklist){
							if(checklist.name == oldValue)
							{
								checklist.name = newValue;
							}
							return checklist;
						});
					
					$scope.ctlr.editList[index][subINdex] = false;

				}

			}				
					
		};		


		/*****************************************
		* Delete item from sublist
		*****************************************/

		$scope.deleteSublistItem = function(index,itemValue,subindex){	
				
			/* Remove subitem */

			$rootScope.checklist[index].item_list = $rootScope.checklist[index].item_list.filter(function(checklist){	
					return checklist.name != itemValue;
				});
			$scope.ctlr.editList[index][subindex] = false;


			/* Reassign value to all left checkbox */
			if($scope.ctlr.sublist)
			{
				$scope.ctlr.sublist[index] = {};
				angular.forEach($rootScope.checklist[index].item_list,function(value,key){
					if(value.status ==1)
					{
						$scope.ctlr.sublist[index][key] = true;	
					} else {
						$scope.ctlr.sublist[index][key] = false;	
					}
				}); 
			}			
								
		};	

	}
]);
