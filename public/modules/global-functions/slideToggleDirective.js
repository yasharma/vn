"use strict";

app.directive('slideable', function () {
    
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '0.7s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow-x': 'hidden',
                    'overflow-y': 'auto',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            
            var target = document.querySelector(attrs.slideToggle);
          
            attrs.expanded = false;
            var y;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    y = content.clientHeight+50;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });

            scope.$watch('files',function(newdata,olddata) {
                $timeout(function() {
                    if(newdata)
                    {
                        var fileContentHeight = target.querySelector('.uploadimage_list');
                        fileContentHeight = fileContentHeight.clientHeight+50;                    
                        var totalHeight = fileContentHeight+y;
                        target.style.height = totalHeight+ 'px';
                    }
            },500);
                
           
            } );
        }
    };
});



