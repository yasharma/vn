"use strict";

app.controller('checklistCtlr', ['$scope','$rootScope','Upload','$timeout','localStorageService',
	function($scope,$rootScope,Upload,$timeout,localStorageService) {


		/*
		*
		* Set default jot type
		*
		*/		
		$rootScope.jot_type = 'issue';

		/*
		* Default checklist
		*/

		$scope.checkList = window.__API_PATH.DEFAULT_CHECKLIST;


		/**********************************************************
		* Store value of checklist on change to add item in checklist
		**********************************************************/


		var selectedCheckBox = [];	
		$scope.lookup = function (selectedItem, list) {
			if( selectedItem ) {
				selectedCheckBox.push(list.name);
			} else {
				selectedCheckBox = selectedCheckBox.filter(function( obj ) {
				    return obj != list.name;
				});
			}


		};

		/***********************************************************************
		* Store value of checklist on change of checklist checkbox to save items
		***********************************************************************/
		var CheckBoxValue =  [];	
		$scope.storeValue = function(checkListType,currentValue,isCheck,parantValue){


			/**************************
			* Parent item List 
			*************************/

			if(checkListType == 'parentlist')				
			{
				var  parentItem = {
								name   :currentValue,
								sublist:[]
							};

				if(isCheck)
				{
					/*********** Push value on check  *********/

					CheckBoxValue.push(parentItem);		
				} else {

					/*********** Remove value on uncheck  *********/

					CheckBoxValue = CheckBoxValue.filter(function( obj ) {			    
				    	return obj.name != currentValue;
				    });
				}							
				
			}

			/**************************
			* Sub-item List 
			*************************/

			if(checkListType == 'sublist')
			{

				
				var storedSubList =  '';
				angular.forEach(CheckBoxValue,function(value,index){
					if( value.name == parantValue ) {
						storedSubList = value.sublist;
					  	//value.sublist.push(subItem);
					  	if(isCheck)
						{
							/*********** Push subitem on check  *********/

							var subItem = {name:currentValue};
							storedSubList.push(subItem);
						} else {	

							/*********** Remove subitem on uncheck  *********/					
							value.sublist = storedSubList.filter(function( obj ) {	
						    	return obj.name != currentValue;
						    });
						}
					}	               
		        });

			}

			$rootScope.checklist = CheckBoxValue;			

		};


		/*****************************************
		* Add item in checklist
		*****************************************/
		

		$scope.addchecklist = function(itemType){
				console.log($scope.checklistdate);
				$scope.itemError = '';
				var storedCheckbox = $scope.checkList;
				var ItemToAdd = '';
				if($scope.listItemName)
				{
					ItemToAdd = $scope.listItemName;
					ItemToAdd 	  = ItemToAdd.replace(/(^[\s]+|[\s]+$)/g, '');
				} else {
					$scope.itemError = 'Please fill the blank teatarea.';
					return false;
				}
			
				var  parentItem = {
								name   :ItemToAdd,
								sublist:[]
							};
				var  subItem = {name:ItemToAdd};	


				if(itemType == 'parentlist')
				{
					if(storedCheckbox.length == 0)
					{
						$scope.checkList.push(parentItem);

					} else {
						var valueFind = false;
						for (var key in storedCheckbox) {
						  if (storedCheckbox.hasOwnProperty(key)) {
						  	if(storedCheckbox[key].name == ItemToAdd)
						  	{
						  		valueFind = true;
						  	}
						  }
						}

						if(!valueFind)
						{
							storedCheckbox.push(parentItem);
						} else {
							$scope.itemError = 'Item already exists.';
							
						}
					}
				}

				if(itemType == 'sublist')
				{

					if( selectedCheckBox.length >0){
						angular.forEach($scope.checkList,function(value,index){	
							 selectedCheckBox.find( function( obj ) { 
								if( obj == value.name ) {
									var storedSublist = value.sublist;
									var valueFind = false;
									for (var key in storedSublist) {
									  if (storedSublist.hasOwnProperty(key)) {
									  	if(storedSublist[key].name == ItemToAdd)
									  	{
									  		valueFind = true;
									  	}
									  }
									}

									if(!valueFind)
									{
										storedSublist.push(subItem);
										
									} else {
										$scope.itemError = 'Subitem already exists for "'+value.name+'".';
										
									}
								  	
								}						  
							});                
			            });
					} else {
						$scope.itemError = 'Please select item.';						
					}

				}
			storedCheckbox = selectedCheckBox;
		};

		$scope.showTextArea = function(btnType){
			$scope.showArea = true;
			$scope.itemType = btnType;

		};
		
	}
]);
