"use strict";
app.directive('jotTemplate', ['$rootScope',function($rootScope){
	return {
		scope:{jotTemplate:'='},
		template:'<span ng-include="template"></span>',
		link: function(scope,ele){

			function isJSON(str) {
			    try {
			        JSON.parse(str);
			    } catch (e) {
			        return false;
			    }
			    return true;
			}	
			var templateData;		
			scope.$watch('jotTemplate', function(templateName){
				
				if (isJSON(templateName))
				{
				    templateData = JSON.parse(templateName);
				}else{					
				    templateData = templateName;
				}
				
				scope.template='/modules/'+templateData.directory+'/views/'+templateData.id+'.html';
				
				$rootScope.activeNav = templateData.id;
			});

		}
	};
}]);