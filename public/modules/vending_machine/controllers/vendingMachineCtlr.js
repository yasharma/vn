"use strict";

app.controller('vendingMachineCtlr', ['$scope','$rootScope','globalRequest',
	function($scope,$rootScope,globalRequest) {
		
		/**********************************************************
	    * Get item category
	    **********************************************************/
	    globalRequest.getVendingCategory();


		/**********************************************************
	    * Get items list
	    **********************************************************/	

		var hotel = $rootScope.activeHotelData;
		function getItemList(){
			$scope.products = '';			
			var request={
	                url:window.__API_PATH.GET_ITEMS,
	                method:"GET",
	                params:{hotel_id:hotel._id}
	              };

	        globalRequest.jotCRUD(request).then(function(response){        	
	        	if(response.status == 1)
	            {
	              $scope.products = response.result;
	            }
	        });
		}
		getItemList();

        /**********************************************************
	    * Add item in cart
	    **********************************************************/

		$scope.cart = [];		
		$scope.addToCart = function(item,quantity){
			if(!isNaN(quantity) && quantity)
			{
				item.totalprice = parseInt(item.price) * parseInt(quantity);
			} else {
				item.totalprice = parseInt(item.price) * 0;
			}
			
			item.editquantity   = quantity;
			$scope.cart.push(item);
		};

		/**********************************************************
	    * Update price in cart
	    **********************************************************/

		$scope.changeItemPrice = function(item,quantity){	
			var cartItem  = $scope.cart;
			var updatedCart = [];
			angular.forEach(cartItem,function(key, value) {	
					if(key._id == item._id)
					{
						if(!isNaN(quantity) && quantity)
						{
							key.totalprice = parseInt(key.price) * parseInt(quantity);
						} else {
							key.totalprice = parseInt(key.price) * 0;
						}		
					}
					updatedCart.push(key);
			});
			$scope.cart = updatedCart;
		};


		/**********************************************************
	    * Remove item from cart
	    **********************************************************/

		$scope.removeItem = function(itemID) {
			var cartItem  = $scope.cart;
			cartItem      = cartItem.filter(function( obj ) {
									return obj._id != itemID;					  
							});
			$scope.cart = cartItem;
		};

		/**********************************************************
	    * Calculate total price in cart
	    **********************************************************/

		$scope.getTotal = function(){
			var cartItem  = $scope.cart;
			var total = 0;
			angular.forEach(cartItem,function(key, value) {	
					if(!isNaN(key.totalprice))
					{
						total += parseInt(key.totalprice);
					}				
					
			});
			return total;
		};



		/**********************************************************
	    * Check item is already selected or not
	    **********************************************************/

		$scope.checkSelected = function(itemID){
			var cartItem  = $scope.cart;
			var match = false;
			angular.forEach(cartItem,function(key, value) {	
				if(key._id == itemID)
				{
					match = true;
				}
			});			
			return match;
		};

		
        /**********************************************************
	    * Submit vending machine cart data
	    **********************************************************/

        $scope.submitVendingDetail = function() {
        	var payment,paymentMode,cardType,cardOwner,roomNumber,paymentData,cartTags;        	
        	var cartErrors    = {itemerror:"",tagerror:"",paymenterror:"",error:false};
        	payment           = $scope.payment_status;
        	paymentMode       = $scope.ctlr.paymentmode;
        	cardType 	      = $scope.ctlr.cardtype;
        	cardOwner 	   	  = $scope.ctlr.cardowner;
        	roomNumber 		  = $scope.ctlr.payment_room_number;
        	cartTags       	  = $scope.cart_tags;
        	$scope.cartErrors = '';

       		if($scope.cart.length == 0)
       		{
       			cartErrors.itemerror = 'Please select items';
       			cartErrors.error = true;
       		}


       		if(cartTags == '' || cartTags == undefined)
       		{
       			cartErrors.error = true;
       			cartErrors.tagerror = 'This field is required';
       		}

       		if(payment == '' || payment == undefined)
       		{
       			cartErrors.error = true;
       			cartErrors.paymenterror = 'Please select payment option';
       		}

       		if(cartErrors.error)
       		{
       			
       			$scope.cartErrors = cartErrors;
       			return false;
       		}
        	
        	paymentData = {	payment_status:payment,detail:''};

        	if(payment == 'paid')
        	{
        		if(paymentMode == 'card')
        		{
        			paymentData.detail = {
	        			paymentmode : paymentMode,
	        			cardtype    : cardType,
	        			cardowner   : cardOwner	        			
	        		};
        		}
        		if(paymentMode == 'cash')
        		{
        			paymentData.detail = {
	        			paymentmode : paymentMode
	        		};

        		}
        	}
        	if(payment == 'unpaid')
        	{
        		paymentData.detail = {
	        			room_number : roomNumber
	        	};
        	}


        	var request = {
				            url:window.__API_PATH.PURCHASE,
				            method:"POST",
				            data:{
				            	hotel_id  : hotel._id,
				            	items     : $scope.cart,
				            	payment   : paymentData,
				            	user_info : cartTags,				      
	        					date      : new Date().getTime()
				            }
				          };
			 globalRequest.jotCRUD(request).then(function(response){
			 	$scope.cartSaved = response;
			 	$scope.cart_tags = '';
			 	$scope.ctlr.paymentmode = '';
			 	$scope.ctlr.cardtype = '';
			 	$scope.ctlr.payment_room_number = '';
			 	$scope.payment_status = '';
			 	$scope.cart = [];
			 	getItemList();
			 });	          
        	
        };
	}
]);