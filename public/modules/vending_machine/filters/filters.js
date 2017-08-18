"use strict";

app.filter('productfilter',function(){
	return function(input,scope){

		if(input)
		{
			/*var minPrice 		= scope.slider.minValue;
			var maxPrice 		= scope.slider.maxValue;*/
			var searchItemName  = scope.searchItemName;
			var itemCategory 	= scope.itemCategory;

			
			input   =   input.filter(function( obj ) {
						/*if(obj.price >= minPrice && obj.price <= maxPrice)
						{*/

							if(!searchItemName && !itemCategory)
							{
								return true;
							}

							if(searchItemName && !itemCategory)
							{
								if (obj.item_name.match(new RegExp("(" + searchItemName + ")", "i"))) 
								{
							       return true;
							    }
							}

							if(!searchItemName && itemCategory)
							{
								if (obj.category.match(new RegExp("(" + itemCategory + ")", "i"))) 
								{
							       return true;
							    }
							}


							if(searchItemName && itemCategory)
							{
								if (obj.item_name.match(new RegExp("(" + searchItemName + ")", "i")) && obj.category.match(new RegExp("(" + itemCategory + ")", "i"))) 
								{
							       return true;
							    }
							}
						/*}*/
					});
		}
		return input;

	};

});