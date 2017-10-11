"use strict";

app.directive('ngConfirmDelete', ['$ngConfirm',
    function($ngConfirm){
        return {           
            link: function (scope, element, attr) {
                var title = attr.ngConfirmTitle || "Delete";
                var msg = attr.ngConfirmDelete || "Are you sure?";

                var clickAction = attr.confirmedClick;
    
                element.bind('click',function (event,id,index) {
                    event.stopPropagation();
                    $ngConfirm({
                        title: title,                      
                        content: attr.ngConfirmDelete,
                        scope: scope,                      
                        backgroundDismiss: true,
                        buttons: { 
                            ok: { 
                                text: "Yes",
                                btnClass: 'btn-primary themeColorClass',
                                keys: ['enter'],
                                action: function(scope){
                                     scope.$eval(clickAction);
                                }
                            },                        
                            cancel: function(scope){                                
                            }
                        },
                    });
                    
                });
            }
        };
}]);