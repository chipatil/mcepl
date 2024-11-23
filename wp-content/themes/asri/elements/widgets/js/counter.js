( function( $ ) {
    var pxl_widget_counter_handler = function( $scope, $ ) {
        elementorFrontend.waypoint($scope.find('.pxl--counter-value:not(.effect-slide)'), function () {
            var $number = $(this),
                data = $number.data();

            var decimalDigits = data.toValue.toString().match(/\.(.*)/);

            if (decimalDigits) {
                data.rounding = decimalDigits[1].length;
            }

            $number.numerator(data);
        }, {
            offset: '95%',
            triggerOnce: true
        });

        elementorFrontend.waypoint($scope.find('.pxl--counter-value.effect-slide'), function () {
            var $number = $(this),
                data = $number.data();
            var el = $number[0];
            var startNumber = data['startnumber'], endNumber = data['endnumber'], separator = data['delimiter'], duration = data['duration'] ;
            od = new Odometer({
                el: el,
                value: startNumber,
                format: separator,
                theme: 'default'
            });
            od.update(endNumber);
        }, {
            offset: '95%',
            triggerOnce: true
        });

    };
    
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/el_counter.default', pxl_widget_counter_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/banner_box.default', pxl_widget_counter_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pie_chart.default', pxl_widget_counter_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/recent_news.default', pxl_widget_counter_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/link_page.default', pxl_widget_counter_handler );
    } );
} )( jQuery );