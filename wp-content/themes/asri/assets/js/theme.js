;(function ($) {

    "use strict";
    
    var pxl_scroll_top;
    var pxl_window_height;
    var pxl_window_width;
    var pxl_scroll_status = '';
    var pxl_last_scroll_top = 0;
    $(window).on('load', function () {
        $(".pxl-loader").addClass("is-loaded");
        $('.pxl-gallery-scroll').parents('body').addClass('body-overflow').addClass('body-visible-sm');
        pxl_window_width = $(window).width();
        pxl_window_height = $(window).height();
        asri_header_sticky();
        asri_header_mobile();
        asri_scroll_to_top();
        asri_footer_fixed();
        asri_post_grid();
        asri_shop_quantity();
        asri_fit_to_screen();
        asri_page_popup();
    });

    $(window).on('scroll', function () {
        pxl_scroll_top = $(window).scrollTop();
        pxl_window_height = $(window).height();
        pxl_window_width = $(window).width();
        if (pxl_scroll_top < pxl_last_scroll_top) {
            pxl_scroll_status = 'up';
        } else {
            pxl_scroll_status = 'down';
        }
        pxl_last_scroll_top = pxl_scroll_top;
        asri_header_sticky();
        asri_scroll_to_top();
        asri_footer_fixed();
    });

    $(window).on('resize', function () {
        pxl_window_height = $(window).height();
        pxl_window_width = $(window).width();
        asri_post_grid();
        asri_fit_to_screen();
        asri_header_mobile();
    });

    $(document).ready(function () {

        /* Menu Responsive Dropdown */
        var $asri_menu = $('.pxl-header-elementor-main');
        $asri_menu.find('.pxl-menu-primary li').each(function () {
            var $asri_submenu = $(this).find('> ul.sub-menu');
            if ($asri_submenu.length == 1) {
                $(this).hover(function () {
                    if ($asri_submenu.offset().left + $asri_submenu.width() > $(window).width()) {
                        $asri_submenu.addClass('pxl-sub-reverse');
                    } else if ($asri_submenu.offset().left < 0) {
                        $asri_submenu.addClass('pxl-sub-reverse');
                    }
                }, function () {
                    $asri_submenu.removeClass('pxl-sub-reverse');
                });
            }
        });
        $('.pxl-logo-nav').parents('#pxl-header-elementor').addClass('pxl-header-rmboxshadow');

        /* Start Menu Mobile */
        $('.pxl-header-menu li.menu-item-has-children').append('<span class="pxl-menu-toggle"></span>');
        $('.pxl-menu-toggle').on('click', function () {
            if( $(this).hasClass('active')){
                $(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active');
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();    
            }else{
                $(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active');
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
                $(this).toggleClass('active');
                $(this).parent().find('> .sub-menu').toggleClass('active');
                $(this).parent().find('> .sub-menu').slideToggle();
            }      
        });
    
        $("#pxl-nav-mobile").on('click', function () {
            $(this).toggleClass('active');
            $('body').toggleClass('body-overflow');
            $('.pxl-header-menu').toggleClass('active');
        });

        $(".pxl-menu-close, .pxl-header-menu-backdrop, #pxl-header-mobile .pxl-menu-primary a.is-one-page").on('click', function () {
            $(this).parents('.pxl-header-main').find('.pxl-header-menu').removeClass('active');
            $('#pxl-nav-mobile').removeClass('active');
            $('body').toggleClass('body-overflow');
        });
        /* End Menu Mobile */

        /* Elementor Header */
        $('.pxl-type-header-clip > .elementor-container').append('<div class="pxl-header-shape"><span></span></div>');

        /* Scroll To Top */
        $('.pxl-scroll-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

        /* Animate Time Delay */
        $('.pxl-grid-masonry').each(function () {
            var eltime = 40;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('> .pxl-grid-item > .wow').each(function (index, obj) {
                $(this).css('animation-delay', eltime + 'ms');
                if (_elt === index) {
                    eltime = 40;
                    _elt = _elt + elt_inner;
                } else {
                    eltime = eltime + 40;
                }
            });
        });

        $('.pxl-item--text').each(function () {
            var pxl_time = 0;
            var pxl_item_inner = $(this).children().length;
            var _elt = pxl_item_inner - 1;
            $(this).find('> .pxl-text--slide > .wow').each(function (index, obj) {
                $(this).css('transition-delay', pxl_time + 'ms');
                if (_elt === index) {
                    pxl_time = 0;
                    _elt = _elt + pxl_item_inner;
                } else {
                    pxl_time = pxl_time + 80;
                }
            });
        });

        /* Lightbox Popup */
        $('.btn-video, .pxl-video-popup, .pxl--link-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.images-light-box').each(function () {
            $(this).magnificPopup({
                delegate: 'a.light-box',
                type: 'image',
                gallery: {
                    enabled: true
                },
                mainClass: 'mfp-fade',
            });
        });

        /* Comment Reply */
        $('.comment-reply a').append( '<i class="caseicon-angle-arrow-right"></i>' );

        /* Parallax */
        if($('#pxl-page-title-default').hasClass('pxl--parallax')) {
            $(this).stellar();
        }

        /* Animate Time */
        $('.btn-nina').each(function () {
            var eltime = 0.045;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('> .pxl--btn-text > span').each(function (index, obj) {
                $(this).css('transition-delay', eltime + 's');
                eltime = eltime + 0.045;
            });
        });

        /* Search Popup */
        $(".pxl-search-popup-button").on('click', function () {
            $('body').addClass('body-overflow');
            $('#pxl-search-popup').addClass('active');
            setTimeout(function(){
                $('#pxl-search-popup .search-field').focus();
            },1000);
        });
        $("#pxl-search-popup .pxl-item--overlay, #pxl-search-popup .pxl-item--close").on('click', function () {
            $('body').removeClass('body-overflow');
            $('#pxl-search-popup').removeClass('active');
        });

        /* Hidden Panel */
        $(".pxl-hidden-panel-button").on('click', function () {
            $('body').addClass('body-overflow');
            $('#pxl-hidden-panel-popup').addClass('active');
        });
        $("#pxl-hidden-panel-popup .pxl-item--overlay, #pxl-hidden-panel-popup .pxl-item--close").on('click', function () {
            $('body').removeClass('body-overflow');
            $('#pxl-hidden-panel-popup').removeClass('active');
        });

        /* Cart Sidebar Popup */
        $(".pxl-cart-sidebar-button").on('click', function () {
            $('body').addClass('body-overflow');
            $('#pxl-cart-sidebar').addClass('active');
        });
        $("#pxl-cart-sidebar .pxl-item--overlay, #pxl-cart-sidebar .pxl-item--close").on('click', function () {
            $('body').removeClass('body-overflow');
            $('#pxl-cart-sidebar').removeClass('active');
        });

        /* Popup */
        $(".pxl-popup-button").on('click', function () {
            $('body').addClass('body-overflow');
            $('#pxl-popup-elementor').addClass('active');
            $('#pxl-popup-elementor').removeClass('deactivation');
        });
        $("#pxl-popup-elementor .pxl-item--overlay, #pxl-popup-elementor .pxl-item--close, .pxl-menu-primary a.is-one-page").on('click', function () {
            $('body').removeClass('body-overflow');
            $('#pxl-popup-elementor').removeClass('active');
            $('#pxl-popup-elementor').addClass('deactivation');
        });

        /* Hover Active Item */
        $('.pxl--widget-hover').each(function () {
            $(this).hover(function () {
                $(this).parents('.elementor-row').find('.pxl--widget-hover').removeClass('pxl--item-active');
                $(this).parents('.elementor-container').find('.pxl--widget-hover').removeClass('pxl--item-active');
                $(this).addClass('pxl--item-active');
            });
        });

        /* Hover Button */
        $('.btn-plus-text').hover(function () {
            $(this).find('span').toggle(300);
        });

        /* Nav Logo */
        $(".pxl-nav-button").on('click', function () {
            $('.pxl-nav-button').toggleClass('active');
            $('.pxl-nav-button').parent().find('.pxl-nav-wrap').toggle(400);
        });

        /* Button Mask */
        $('.pxl-btn-effect4').append('<span class="pxl-btn-mask"></span>');

        /* Start Icon Bounce */
        var boxEls = $('.el-bounce, .pxl-image-effect1');
        $.each(boxEls, function(boxIndex, boxEl) {
            loopToggleClass(boxEl, 'bounce-active');
        });

        function loopToggleClass(el, toggleClass) {
            el = $(el);
            let counter = 0;
            if (el.hasClass(toggleClass)) {
                waitFor(function () {
                    counter++;
                    return counter == 2;
                }, function () {
                    counter = 0;
                    el.removeClass(toggleClass);
                    loopToggleClass(el, toggleClass);
                }, 'Deactivate', 1000);
            } else {
                waitFor(function () {
                    counter++;
                    return counter == 3;
                }, function () {
                    counter = 0;
                    el.addClass(toggleClass);
                    loopToggleClass(el, toggleClass);
                }, 'Activate', 1000);
            }
        }

        function waitFor(condition, callback, message, time) {
            if (message == null || message == '' || typeof message == 'undefined') {
                message = 'Timeout';
            }
            if (time == null || time == '' || typeof time == 'undefined') {
                time = 100;
            }
            var cond = condition();
            if (cond) {
                callback();
            } else {
                setTimeout(function() {
                    waitFor(condition, callback, message, time);
                }, time);
            }
        }
        /* End Icon Bounce */

        /* Slider - Group align center */
        setTimeout(function() {
            $('.pxl-swiper-dots.style4 .pxl-swiper-pagination-bullet').append('<i></i>');
        }, 300);
        setTimeout(function(){
            $('.md-align-center').parents('.rs-parallax-wrap').addClass('pxl-group-center');
        }, 300);

        /* Image Effect */
        if($('.pxl-image-tilt').length){
            $('.pxl-image-tilt').parents('.elementor-top-section').addClass('pxl-image-tilt-active');
            $('.pxl-image-tilt').each(function () {
                var pxl_maxtilt = $(this).data('maxtilt'),
                    pxl_speedtilt = $(this).data('speedtilt'),
                    pxl_perspectivetilt = $(this).data('perspectivetilt');
                VanillaTilt.init(this, {
                    max: pxl_maxtilt,
                    speed: pxl_speedtilt,
                    perspective: pxl_perspectivetilt
                });
            });
        }

        /* Team */
        $('.pxl-item--button').on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().toggleClass('active');
        });

        /* Image Box */
        $( ".pxl-image-box2 .pxl-item--inner, .pxl-image-box3 .pxl-item--inner, .pxl-image-box5 .pxl-item--inner" ).hover(
          function() {
            $( this ).find('.pxl-item--description').slideToggle(220);
          }, function() {
            $( this ).find('.pxl-item--description').slideToggle(220);
          }
        );

        /* Services */
        $( ".pxl-service-grid-layout12 .pxl-item--inner" ).hover(
          function() {
            $( this ).find('.pxl-item--content').slideToggle(220);
          }, function() {
            $( this ).find('.pxl-item--content').slideToggle(220);
          }
        );

        /* Pricing */
        $('.pxl-pricing4').each(function () {
            var col_height = $(this).parents('.elementor-inner-section').outerHeight();
            $(this).parents('.elementor-inner-section').css('min-height', col_height + 'px');
            $(this).hover(function () {
                $(this).parents('.elementor-section').find('.pxl-pricing4').removeClass('pxl-item--highlight');
                $(this).addClass('pxl-item--highlight');
            });
        });

        $('.pxl-pricing7 .pxl-pricing--body').each(function () {
            $(this).find('.pxl-item--first').hover(function () {
                $(this).parent().addClass('pxl-item--first-active');
            }, function () {
                $(this).parent().removeClass('pxl-item--first-active');
            });
            $(this).find('.pxl-item--last').hover(function () {
                $(this).parent().addClass('pxl-item--last-active');
            }, function () {
                $(this).parent().removeClass('pxl-item--last-active');
            });
        });

        $(".pxl-pricing7 .pxl-item--nav").on('click', function () {
            $(this).parent().toggleClass('active');
            $(this).parents('.pxl-pricing7').find('.pxl-pricing--monthly').toggleClass('pr-hide');
            $(this).parents('.pxl-pricing7').find('.pxl-pricing--year').toggleClass('pr-active');
        });

        /* Select Theme Style */
        $('.wpcf7-select').each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;
          
            $this.addClass('pxl-select-hidden'); 
            $this.wrap('<div class="pxl-select"></div>');
            $this.after('<div class="pxl-select-higthlight"></div>');

            var $styledSelect = $this.next('div.pxl-select-higthlight');
            $styledSelect.text($this.children('option').eq(0).text());
          
            var $list = $('<ul />', {
                'class': 'pxl-select-options'
            }).insertAfter($styledSelect);
          
            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }
          
            var $listItems = $list.children('li');
          
            $styledSelect.click(function(e) {
                e.stopPropagation();
                $('div.pxl-select-higthlight.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.pxl-select-options').addClass('pxl-select-lists-hide');
                });
                $(this).toggleClass('active');
            });
          
            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
            });
          
            $(document).click(function() {
                $styledSelect.removeClass('active');
            });

        });

        /* Nice Select */
        $('.woocommerce-ordering .orderby, #pxl-sidebar-area select').each(function () {
            $(this).niceSelect();
        });

        /* Item Hover - Description */
        $( ".pxl-content-effect .pxl-item--inner" ).hover(
          function() {
            $( this ).find('.pxl-item--effect').slideToggle(250);
          }, function() {
            $( this ).find('.pxl-item--effect').slideToggle(250);
          }
        );

        /* Demo Bar */
        $(".pxl--choose-demo").on('click', function () {
            $(this).parents('.pxl-showcase-popup').toggleClass('active');
        });
        $(".pxl--showcase-close").on('click', function () {
            $(this).parents('.pxl-showcase-popup').removeClass('active');
        });

        $(".pxl-link-scroll1").parents('.pxl-wapper').addClass('hidden-demo-bar');

        /* Typewriter */
        if($('.pxl-title--typewriter').length) {
            function typewriterOut(elements, callback)
            {
                if (elements.length){
                    elements.eq(0).addClass('is-active');
                    elements.eq(0).delay( 3000 );
                    elements.eq(0).removeClass('is-active');
                    typewriterOut(elements.slice(1), callback);
                }
                else {
                    callback();
                }
            }

            function typewriterIn(elements, callback)
            {
                if (elements.length){
                    elements.eq(0).addClass('is-active');
                    elements.eq(0).delay( 3000 ).slideDown(3000, function(){
                        elements.eq(0).removeClass('is-active');
                        typewriterIn(elements.slice(1), callback);
                    });
                }
                else {
                    callback();
                }
            }

            function typewriterInfinite(){
                typewriterOut($('.pxl-title--typewriter .pxl-item--text'), function(){ 
                    typewriterIn($('.pxl-title--typewriter .pxl-item--text'), function(){
                        typewriterInfinite();
                    });
                });
            }
            $(function(){
                typewriterInfinite();
            });
        }
        /* End Typewriter */

        /* Section Particles */      
        setTimeout(function() {
            $(".pxl-row-particles").each(function() {
                particlesJS($(this).attr('id'), {
                  "particles": {
                    "number": {
                        "value": $(this).data('number'),
                    },
                    "color": {
                        "value": $(this).data('color')
                    },
                    "shape": {
                        "type": "circle",
                    },
                    "size": {
                        "value": $(this).data('size'),
                        "random": $(this).data('size-random'),
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": $(this).data('move-direction'),
                        "random": true,
                        "out_mode": "out",
                    }
                  },
                  "retina_detect": true
                });
            });
        }, 400);

        /* Scroll End - Addclass */
        $('.pxl-scroll-effect--content').on('scroll', function () {
            var scroll_box_height = $(this).outerHeight() - 50;
            var scroll_box_top = $(this).scrollTop();
            if (scroll_box_top == scroll_box_height) {
                $(this).parents('.pxl-scroll-effect').addClass('pxl-scroll--end');
            }
            if (scroll_box_top == scroll_box_height) {
                $(this).parents('.pxl-scroll-effect').removeClass('pxl-scroll--end');
            }
        });

        /* Cursor Effect */
        $('.pxl-cursor-point').mousemove(function(event){ 
            var offset = $(this).offset();
            var W = $(this).outerWidth();
            var X = (event.pageX - offset.left - W + 30);
            var Y = (event.pageY - offset.top - 110);
            $(this).find('.pxl-item--cursor').css({
                'transform' : 'translate3d(' + X + 'px, ' + Y + 'px, 0px)'
            });
        });

        $( ".pxl-cursor-point" ).hover(
            function() {
                $( this ).find('.pxl-item--cursor').addClass('is_active');
            }, function() {
                $( this ).find('.pxl-item--cursor').removeClass('is_active');
            }
        );

        $( ".pxl-cursor-point" ).each(function () {
            var $cursor_item = $(this).find('.pxl-item--cursor');
            var $cursor_offset_top = $cursor_item.offset().top;
            var $cursor_img_h = $cursor_item.height();
            
            if ($cursor_item.length == 1) {
                $(this).hover(function () {
                    if ($cursor_offset_top + $cursor_img_h > $(window).height()) {
                        $cursor_item.addClass('pxl-cursor-bottom');
                    } else if ($cursor_offset_top < 0) {
                        $cursor_item.addClass('pxl-cursor-bottom');
                    }
                }, function () {
                    $cursor_item.removeClass('pxl-cursor-bottom');
                });
            }
        });

        /* Get checked input - Mailchimpp */
        $('.mc4wp-form input:checkbox').change(function(){
            if($(this).is(":checked")) {
                $('.mc4wp-form').addClass("pxl-input-checked");
            } else {
                $('.mc4wp-form').removeClass("pxl-input-checked");
            }
        });

        /* Blog */
        /* Image Box */
        $( ".pxl-post-cover .pxl-item--cover" ).hover(
          function() {
            $( this ).find('.pxl-item--excerpt').slideToggle(220);
          }, function() {
            $( this ).find('.pxl-item--excerpt').slideToggle(220);
          }
        );

        /* Hover Active Event */
        $('.pxl-ticket2 .pxl--item').each(function () {
            var e_t_height = $(this).find('.pxl--item-front').outerHeight() + 10;
            $(this).css('height', e_t_height + 'px');
        });

        $( ".pxl-ticket2 .pxl--item" ).hover(
            function() {
                var e_i_height = $(this).find('.pxl--item-backdrop').outerHeight() + 10;
                $(this).css('height', e_i_height + 'px');
            }, function() {
                var e_in_height = $(this).find('.pxl--item-front').outerHeight() + 10;
                $(this).css('height', e_in_height + 'px');
            }
        );

        /* Iframe 
        setTimeout(function() {
            var iframe_head = $("#tidio-chat-iframe").contents().find("head");
            var iframe_css = $("#pxl-iframe-css").data('iframe-css');
            var iframe_html = '<link rel="stylesheet" href="'+iframe_css+'" type="text/css" media="all">';
            $(iframe_head).append(iframe_html);
        }, 1800);*/

        /* Alert */
        $(".pxl-alert .pxl-alert--close").on('click', function () {
            $(this).parent().fadeOut();
        });

        /* Custom on Page by theme */
        if($('.pxl-link-scroll1').length) {
            $('.pxl-item--onepage').on('click', function (e) {
                var _this = $(this);
                var _link = $(this).attr('href');
                var _id_data = e.currentTarget.hash;
                var _offset;
                var _data_offset = $(this).attr('data-onepage-offset');
                if(_data_offset) {
                    _offset = _data_offset;
                } else {
                    _offset = 0;
                }
                if ($(_id_data).length === 1) {
                    var _target = $(_id_data);
                    $('.pxl-onepage-active').removeClass('pxl-onepage-active');
                    _this.addClass('pxl-onepage-active');
                    $('html, body').stop().animate({ scrollTop: _target.offset().top - _offset }, 1000);   
                    return false;
                } else {
                    window.location.href = _link;
                }
                return false;
            });
            $.each($('.pxl-item--onepage'), function (index, item) {
                var target = $(item).attr('href');
                var el =  $(target);
                var _data_offset = $(item).attr('data-onepage-offset');
                var waypoint = new Waypoint({
                    element: el[0],
                    handler: function(direction) {
                        if(direction === 'down'){
                            $('.pxl-onepage-active').removeClass('pxl-onepage-active');
                            $(item).addClass('pxl-onepage-active');
                        }
                        else if(direction === 'up'){
                            var prev = $(item).parent().prev().find('.pxl-item--onepage');
                            $(item).removeClass('pxl-onepage-active');
                            if(prev.length > 0)
                                prev.addClass('pxl-onepage-active');
                        }
                    },
                    offset: _data_offset,
                });
            });
        }

        /* Showcase */
        $('.pxl--item-buttons a').each(function () {
            $(this).hover(function () {
                $(this).parents('.pxl--item-demo').find('.pxl--item-buttons a').removeClass('active');
                $(this).addClass('active');
            });
        });

    });
    
    jQuery(document).ajaxComplete(function(event, xhr, settings){
        asri_shop_quantity();
    });

    jQuery( document ).on( 'updated_wc_div', function() {
        asri_shop_quantity();
    } );
     
    /* Header Sticky */
    function asri_header_sticky() {
        if($('#pxl-header-elementor').hasClass('is-sticky')) {
            if (pxl_scroll_top > 100) {
                $('.pxl-header-elementor-sticky.pxl-sticky-stb').addClass('pxl-header-fixed');
                $('#pxl-header-mobile').addClass('pxl-header-mobile-fixed');
            } else {
                $('.pxl-header-elementor-sticky.pxl-sticky-stb').removeClass('pxl-header-fixed');
                $('#pxl-header-mobile').removeClass('pxl-header-mobile-fixed');
            }

            if (pxl_scroll_status == 'up' && pxl_scroll_top > 100) {
                $('.pxl-header-elementor-sticky.pxl-sticky-stt').addClass('pxl-header-fixed');
            } else {
                $('.pxl-header-elementor-sticky.pxl-sticky-stt').removeClass('pxl-header-fixed');
            }
        }

        $('.pxl-header-elementor-sticky').parents('body').addClass('pxl-header-sticky');
    }

    /* Header Mobile */
    function asri_header_mobile() {
        var h_header_mobile = $('#pxl-header-elementor').outerHeight();
        if(pxl_window_width < 1199) {
            $('#pxl-header-elementor').css('min-height', h_header_mobile + 'px');
        }
    }

    /* Scroll To Top */
    function asri_scroll_to_top() {
        if (pxl_scroll_top < pxl_window_height) {
            $('.pxl-scroll-top').addClass('pxl-off').removeClass('pxl-on');
        }
        if (pxl_scroll_top > pxl_window_height) {
            $('.pxl-scroll-top').addClass('pxl-on').removeClass('pxl-off');
        }
    }

    /* Footer Fixed */
    function asri_footer_fixed() {
        setTimeout(function(){
            var h_footer = $('.pxl-footer-fixed #pxl-footer-elementor').outerHeight() - 1;
            $('.pxl-footer-fixed #pxl-main').css('margin-bottom', h_footer + 'px');
        }, 600);
    }

    /* Post Grid */
    function asri_post_grid() {
        setTimeout(function(){
            $('.pxl-portfolio-grid .pxl-item--inner').each(function () {
                var item_w = $(this).outerWidth();
                var item_h = $(this).outerHeight();
                $(this).find('.item--imgfilter').css('width', item_w + 'px');
                $(this).find('.item--imgfilter').css('height', item_h + 'px');
            });
            $('.pxl-imgfilter-wrap').each(function () {
                var item_w = $(this).outerWidth();
                var item_h = $(this).outerHeight();
                $(this).find('.pxl-item--imgfilter').css('width', item_w + 'px');
                $(this).find('.pxl-item--imgfilter').css('height', item_h + 'px');
            });
        }, 300);
    }

    /* WooComerce Quantity */
    function asri_shop_quantity() {
        "use strict";
        $('#pxl-wapper .quantity').append('<span class="quantity-icon quantity-down pxl-icon--minus"></span><span class="quantity-icon quantity-up pxl-icon--plus"></span>');
        $('.quantity-up').on('click', function () {
            $(this).parents('.quantity').find('input[type="number"]').get(0).stepUp();
            $(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled');
        });
        $('.quantity-down').on('click', function () {
            $(this).parents('.quantity').find('input[type="number"]').get(0).stepDown();
            $(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled');
        });
        $('.quantity-icon').on('click', function () {
            var quantity_number = $(this).parents('.quantity').find('input[type="number"]').val();
            var add_to_cart_button = $(this).parents( ".product, .woocommerce-product-inner" ).find(".add_to_cart_button");
            add_to_cart_button.attr('data-quantity', quantity_number);
            add_to_cart_button.attr("href", "?add-to-cart=" + add_to_cart_button.attr("data-product_id") + "&quantity=" + quantity_number);
        });
        $('.woocommerce-cart-form .actions .button').removeAttr('disabled');
    }

    /* WooComerce Quantity */
    function asri_fit_to_screen() {
        $('.pxl-gallery-scroll.h-fit-to-screen').each(function () {
            var h_adminbar = 0;
            var h_section_header = 0;
            var h_section_footer = 0;
            if ($('#wpadminbar').length == 1) {
                h_adminbar = $('#wpadminbar').outerHeight();
            }
            if ($('#pxl-header-elementor').length == 1) {
                h_section_header = $('#pxl-header-elementor').outerHeight();
            }
            if ($('#pxl-footer-elementor').length == 1) {
                h_section_footer = $('#pxl-footer-elementor').outerHeight();
            }
            var h_total = pxl_window_height - (h_adminbar + h_section_header + h_section_footer);
            $(this).css('height', h_total + 'px');
        });
    }

    /* Page Popup */
    function asri_page_popup() {
        $('.pxl-menu-primary .pxl-page-popup > a').on("click", function(e){
            e.preventDefault();
            var target = $(this).data("page-target");
            var parent = $(this).parents("body");
            parent.find("#pxl-page-popup .pxl-page-item").removeClass("active");
            $(target).addClass("active");
            $(target).parents('#pxl-page-popup').addClass("active");
        });

        $('#pxl-page-popup .pxl-popup--close').on("click", function(e){
            e.preventDefault();
            $(this).parents('.pxl-page-item').removeClass('active');
            $(this).parents('#pxl-page-popup').removeClass('active');
        }); 
        $('#pxl-page-popup .pxl-popup-overlay').on("click", function(e) {
            e.preventDefault();
            $(this).parent().removeClass('active');
            $(this).parent().find('.pxl-page-item').removeClass('active');
        }); 
    }

})(jQuery);
