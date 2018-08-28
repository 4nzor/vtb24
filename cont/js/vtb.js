$(document).ready(function () {

        /* ------------------------------ global variable ------------------------------ */

        var com_val = 1254;

        var opening_of_a_deposit = 209;
        var card_opening = 209;
        var viewing_an_account = 209;
        var p2p_transfer = 209;
        var getting_the_details = 209;
        var payment_for_services = 209;

        var male = 120;
        var female = 108;

        var age16_25 = 20;
        var age25_45 = 120;
        var age45_65 = 50;
        var age65 = 12;

        var summ1000 = 200;
        var summ3000 = 150;
        var summ7000 = 75;
        var summ_inf = 50;

        var mass_visit_month = [5, 6, 12, 32, 34, 12, 32, 57, 21, 3, 41, 32, 42, 45, 12, 34, 12, 34, 12, 34, 21, 23, 56, 23, 53, 65, 12, 2, 12, 42, 32];
        var mass_visit_quart = [123, 32, 228, 143, 231, 54, 121, 254, 235, 53, 72, 287];
        var mass_visit_year = [435, 234, 334, 234, 523, 532, 421, 134, 345, 64, 324, 532];

        /* ------------------------------ global variable end ------------------------------ */

        /* ------------------------------ slow scroll ------------------------------ */

        $('.down_scroll .dwsc_icon').click(function () {
            $(this).addClass('active');
            $('html, body').animate({scrollTop: $('#start_block').position().top}, 2000);
            $('.down_scroll').fadeOut(1000);
        });

        $('.block_menu .page1_but').click(function () {
            $(this).addClass('active');
            $('html, body').animate({scrollTop: $('#page1_block').position().top}, 2000);
            $('.down_scroll').fadeIn(1000);
        });

        $('.block_menu .page2_but').click(function () {
            $(this).addClass('active');
            $('html, body').animate({scrollTop: $('#page2_block').position().top}, 2000);
            $('.down_scroll').fadeIn(1000);
        });

        $('.block_menu .page3_but').click(function () {
            $(this).addClass('active');
            $('html, body').animate({scrollTop: $('#page3_block').position().top}, 2000);
            $('.down_scroll').fadeIn(1000);
        });

        /* ------------------------------ slow scroll end ------------------------------ */

        /* ------------------------------ circles page 1 ------------------------------ */

        var width_circle = 30;
        var radius_circle = 100;
        var duration_circle = 200;

        var opening_of_a_deposit_per = opening_of_a_deposit/(com_val/100);
        var card_opening_per = card_opening/(com_val/100);
        var viewing_an_account_per = viewing_an_account/(com_val/100);
        var p2p_transfer_per = p2p_transfer/(com_val/100);
        var getting_the_details_per = getting_the_details/(com_val/100);
        var payment_for_services_per = 100 - opening_of_a_deposit_per - card_opening_per - viewing_an_account_per - p2p_transfer_per - getting_the_details_per;

        var myCircle1 = Circles.create({
            id: 'circles-1',
            radius: radius_circle,
            value: opening_of_a_deposit_per,
            maxValue: 100.00,
            width: width_circle,
            text: function (value) {
                return value + '%';
            },
            colors: ['#B8C7DD', '#2A5598'],
            duration: duration_circle,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });

        var myCircle2 = Circles.create({
            id: 'circles-2',
            radius: radius_circle,
            value: card_opening_per,
            maxValue: 100.00,
            width: width_circle,
            text: function (value) {
                return value + '%';
            },
            colors: ['#D3B6C6', '#802D5B'],
            duration: duration_circle,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });

        var myCircle3 = Circles.create({
            id: 'circles-3',
            radius: radius_circle,
            value: viewing_an_account_per,
            maxValue: 100.00,
            width: width_circle,
            text: function (value) {
                return value + '%';
            },
            colors: ['#E0BBBC', '#9F3437'],
            duration: duration_circle,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });

        var myCircle4 = Circles.create({
            id: 'circles-4',
            radius: radius_circle,
            value: p2p_transfer_per,
            maxValue: 100.00,
            width: width_circle,
            text: function (value) {
                return value + '%';
            },
            colors: ['#E9CCC5', '#D14424'],
            duration: duration_circle,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });

        var myCircle5 = Circles.create({
            id: 'circles-5',
            radius: radius_circle,
            value: getting_the_details_per,
            maxValue: 100.00,
            width: width_circle,
            text: function (value) {
                return value + '%';
            },
            colors: ['#FFE9AC', '#FFCD42'],
            duration: duration_circle,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });

        var myCircle6 = Circles.create({
            id: 'circles-6',
            radius: radius_circle,
            value: payment_for_services_per,
            maxValue: 100.00,
            width: width_circle,
            text: function (value) {
                return value + '%';
            },
            colors: ['#D6D8E1', '#636468'],
            duration: duration_circle,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });

        /* ------------------------------ circles page 1 end ------------------------------ */

        /* ------------------------------ diags page 2 ------------------------------ */

        var per_male = Math.floor(male / ((male + female) / 100));
        var per_female = 100 - per_male;

        var age_summ = age16_25 + age25_45 + age45_65 + age65;
        var age_first = Math.floor(age16_25 / (age_summ / 100));
        var age_secound = Math.floor(age25_45 / (age_summ / 100));
        var age_third = Math.floor(age45_65 / (age_summ / 100));
        var age_fourth = ((100 - age_first) - age_secound) - age_third;

        var summ_summ = summ1000 + summ3000 + summ7000 + summ_inf;
        var summ_first = Math.floor(summ1000 / (summ_summ / 100));
        var summ_secound = Math.floor(summ3000 / (summ_summ / 100));
        var summ_third = Math.floor(summ7000 / (summ_summ / 100));
        var summ_fourth = ((100 - summ_first) - summ_secound) - summ_third;

        $(function () {
            $("#male_female").drawDoughnutChart([
                {title: "Мужчины", value: per_male, color: "#015E7A"},
                {title: "Женщины", value: per_female, color: "#94001C"}
            ]);
        });

        $(function () {
            $("#age").drawDoughnutChart([
                {title: "16-25", value: age_first, color: "#517209"},
                {title: "25-45", value: age_secound, color: "#00ADAC"},
                {title: "45-65", value: age_third, color: "#018E8F"},
                {title: "65+", value: age_fourth, color: "#027274"}
            ]);
        });

        $(function () {
            $("#summ_oper").drawDoughnutChart([
                {title: "До 1000", value: summ_first, color: "#5F7A6E"},
                {title: "1000-3000", value: summ_secound, color: "#203231"},
                {title: "3000-7000", value: summ_third, color: "#A83B1F"},
                {title: "От 7000", value: summ_fourth, color: "#FEB53D"}
            ]);
        });

        (function ($, undefined) {
            $.fn.drawDoughnutChart = function (data, options) {
                var $this = this,
                    W = $this.width(),
                    H = $this.height(),
                    centerX = W / 2,
                    centerY = H / 2,
                    cos = Math.cos,
                    sin = Math.sin,
                    PI = Math.PI,
                    settings = $.extend({
                        segmentShowStroke: true,
                        segmentStrokeColor: "#0C1013",
                        segmentStrokeWidth: 0,
                        baseColor: "transparent",
                        baseOffset: 0,
                        edgeOffset: 10,
                        percentageInnerCutout: 75,
                        animation: true,
                        animationSteps: 90,
                        animationEasing: "easeInOutExpo",
                        animateRotate: false,
                        tipOffsetX: -8,
                        tipOffsetY: -45,
                        tipClass: "doughnutTip",
                        summaryClass: "doughnutSummary",
                        summaryTitle: "",
                        summaryTitleClass: "doughnutSummaryTitle",
                        summaryNumberClass: "doughnutSummaryNumber",
                        beforeDraw: function () {
                        },
                        afterDrawed: function () {
                        },
                        onPathEnter: function (e, data) {
                        },
                        onPathLeave: function (e, data) {
                        }
                    }, options),
                    animationOptions = {
                        linear: function (t) {
                            return t;
                        },
                        easeInOutExpo: function (t) {
                            var v = t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
                            return (v > 1) ? 1 : v;
                        }
                    },
                    requestAnimFrame = function () {
                        return window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function (callback) {
                                window.setTimeout(callback, 1000 / 60);
                            };
                    }();

                settings.beforeDraw.call($this);

                var $svg = $('<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>').appendTo($this),
                    $paths = [],
                    easingFunction = animationOptions[settings.animationEasing],
                    doughnutRadius = Min([H / 2, W / 2]) - settings.edgeOffset,
                    cutoutRadius = doughnutRadius * (settings.percentageInnerCutout / 100),
                    segmentTotal = 0;

                //Draw base doughnut
                var baseDoughnutRadius = doughnutRadius + settings.baseOffset,
                    baseCutoutRadius = cutoutRadius - settings.baseOffset;
                $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
                    .attr({
                        "d": getHollowCirclePath(baseDoughnutRadius, baseCutoutRadius),
                        "fill": settings.baseColor
                    })
                    .appendTo($svg);

                //Set up pie segments wrapper
                var $pathGroup = $(document.createElementNS('http://www.w3.org/2000/svg', 'g'));
                $pathGroup.attr({opacity: 0}).appendTo($svg);

                //Set up tooltip
                var $tip = $('<div class="' + settings.tipClass + '" />').appendTo('body').hide(),
                    tipW = $tip.width(),
                    tipH = $tip.height();

                //Set up center text area
                var summarySize = (cutoutRadius - (doughnutRadius - cutoutRadius)) * 2,
                    $summary = $('<div class="' + settings.summaryClass + '" />')
                        .appendTo($this)
                        .css({
                            width: summarySize + "px",
                            height: summarySize + "px",
                            "margin-left": -(summarySize / 2) + "px",
                            "margin-top": -(summarySize / 2) + "px"
                        });
                var $summaryTitle = $('<p class="' + settings.summaryTitleClass + '">' + settings.summaryTitle + '</p>').appendTo($summary);
                var $summaryNumber = $('<p class="' + settings.summaryNumberClass + '"></p>').appendTo($summary).css({opacity: 0});

                for (var i = 0, len = data.length; i < len; i++) {
                    segmentTotal += data[i].value;
                    $paths[i] = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
                        .attr({
                            "stroke-width": settings.segmentStrokeWidth,
                            "stroke": settings.segmentStrokeColor,
                            "fill": data[i].color,
                            "data-order": i
                        })
                        .appendTo($pathGroup)
                        .on("mouseenter", pathMouseEnter)
                        .on("mouseleave", pathMouseLeave)
                        .on("mousemove", pathMouseMove);
                }

                //Animation start
                animationLoop(drawPieSegments);

                //Functions
                function getHollowCirclePath(doughnutRadius, cutoutRadius) {
                    var startRadius = -1.570,// -Math.PI/2
                        segmentAngle = 6.2831,// 1 * ((99.9999/100) * (PI*2)),
                        endRadius = 4.7131,// startRadius + segmentAngle
                        startX = centerX + cos(startRadius) * doughnutRadius,
                        startY = centerY + sin(startRadius) * doughnutRadius,
                        endX2 = centerX + cos(startRadius) * cutoutRadius,
                        endY2 = centerY + sin(startRadius) * cutoutRadius,
                        endX = centerX + cos(endRadius) * doughnutRadius,
                        endY = centerY + sin(endRadius) * doughnutRadius,
                        startX2 = centerX + cos(endRadius) * cutoutRadius,
                        startY2 = centerY + sin(endRadius) * cutoutRadius;
                    var cmd = [
                        'M', startX, startY,
                        'A', doughnutRadius, doughnutRadius, 0, 1, 1, endX, endY,//Draw outer circle
                        'Z',//Close path
                        'M', startX2, startY2,//Move pointer
                        'A', cutoutRadius, cutoutRadius, 0, 1, 0, endX2, endY2,//Draw inner circle
                        'Z'
                    ];
                    cmd = cmd.join(' ');
                    return cmd;
                };

                function pathMouseEnter(e) {
                    var order = $(this).data().order;
                    $tip.text(data[order].value + "% " + data[order].title)
                        .fadeIn(200);
                    settings.onPathEnter.apply($(this), [e, data]);
                }

                function pathMouseLeave(e) {
                    $tip.hide();
                    settings.onPathLeave.apply($(this), [e, data]);
                }

                function pathMouseMove(e) {
                    $tip.css({
                        top: e.pageY + settings.tipOffsetY,
                        left: e.pageX - $tip.width() / 2 + settings.tipOffsetX
                    });
                }

                function drawPieSegments(animationDecimal) {
                    var startRadius = -PI / 2,//-90 degree
                        rotateAnimation = 1;
                    if (settings.animation && settings.animateRotate) rotateAnimation = animationDecimal;//count up between0~1

                    drawDoughnutText(animationDecimal, segmentTotal);

                    $pathGroup.attr("opacity", animationDecimal);

                    //If data have only one value, we draw hollow circle(#1).
                    if (data.length === 1 && (4.7122 < (rotateAnimation * ((data[0].value / segmentTotal) * (PI * 2)) + startRadius))) {
                        $paths[0].attr("d", getHollowCirclePath(doughnutRadius, cutoutRadius));
                        return;
                    }
                    for (var i = 0, len = data.length; i < len; i++) {
                        var segmentAngle = rotateAnimation * ((data[i].value / segmentTotal) * (PI * 2)),
                            endRadius = startRadius + segmentAngle,
                            largeArc = ((endRadius - startRadius) % (PI * 2)) > PI ? 1 : 0,
                            startX = centerX + cos(startRadius) * doughnutRadius,
                            startY = centerY + sin(startRadius) * doughnutRadius,
                            endX2 = centerX + cos(startRadius) * cutoutRadius,
                            endY2 = centerY + sin(startRadius) * cutoutRadius,
                            endX = centerX + cos(endRadius) * doughnutRadius,
                            endY = centerY + sin(endRadius) * doughnutRadius,
                            startX2 = centerX + cos(endRadius) * cutoutRadius,
                            startY2 = centerY + sin(endRadius) * cutoutRadius;
                        var cmd = [
                            'M', startX, startY,//Move pointer
                            'A', doughnutRadius, doughnutRadius, 0, largeArc, 1, endX, endY,//Draw outer arc path
                            'L', startX2, startY2,//Draw line path(this line connects outer and innner arc paths)
                            'A', cutoutRadius, cutoutRadius, 0, largeArc, 0, endX2, endY2,//Draw inner arc path
                            'Z'//Cloth path
                        ];
                        $paths[i].attr("d", cmd.join(' '));
                        startRadius += segmentAngle;
                    }
                }

                function drawDoughnutText(animationDecimal, segmentTotal) {
                    $summaryNumber
                        .css({opacity: animationDecimal})
                        .text((segmentTotal * animationDecimal).toFixed(1));
                }

                function animateFrame(cnt, drawData) {
                    var easeAdjustedAnimationPercent = (settings.animation) ? CapValue(easingFunction(cnt), null, 0) : 1;
                    drawData(easeAdjustedAnimationPercent);
                }

                function animationLoop(drawData) {
                    var animFrameAmount = (settings.animation) ? 1 / CapValue(settings.animationSteps, Number.MAX_VALUE, 1) : 1,
                        cnt = (settings.animation) ? 0 : 1;
                    requestAnimFrame(function () {
                        cnt += animFrameAmount;
                        animateFrame(cnt, drawData);
                        if (cnt <= 1) {
                            requestAnimFrame(arguments.callee);
                        } else {
                            settings.afterDrawed.call($this);
                        }
                    });
                }

                function Max(arr) {
                    return Math.max.apply(null, arr);
                }

                function Min(arr) {
                    return Math.min.apply(null, arr);
                }

                function isNumber(n) {
                    return !isNaN(parseFloat(n)) && isFinite(n);
                }

                function CapValue(valueToCap, maxValue, minValue) {
                    if (isNumber(maxValue) && valueToCap > maxValue) return maxValue;
                    if (isNumber(minValue) && valueToCap < minValue) return minValue;
                    return valueToCap;
                }

                return $this;
            };
        })(jQuery);

        // ------------------------------ diags page 2 ------------------------------//

        // ------------------------------ slow count ------------------------------//

        var block_oper_value = Circles.create({
            id: 'block_oper_value',
            radius: 200,
            value: Math.floor(com_val),
            maxValue: Math.floor(com_val),
            width: 40,
            text: function (value) {
                return value + '';
            },
            colors: ['', '#B5D0C1'],
            duration: 10,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });

        // ------------------------------ slow count end ------------------------------//

        // ------------------------------ gist page 3 ------------------------------//

        var arr = [1, 3, 4, 1, 1, 3, 4, 5];
        var arr_2 = [];
        var result = {};

        arr.forEach(function (a) {
            result[a] = result[a] + 1 || 1;
        });

        for (var key in result)
            arr_2.push(result[key]);

        Date.prototype.daysInMonth = function () {
            return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
        };

        var days_month = new Date().daysInMonth();

        var dataProvMonth = [];
        var dataProvQuart = [];
        var dataProvYear = [];

        var bar_colors_month = ["#E0A2C5", "#D270A6", "#C73E87", "#9F3169", "#842959", "#682047", "#4B1833", "#360F24"];
        var bar_colors_quart = ["#59AFD5", "#3C768C", "#2B5564", "#203E4A",];
        var bar_colors_year = ["#3169D1", "#3169D1", "#829B40", "#829B40", "#829B40", "#F2D435", "#F2D435", "#F2D435", "#EA9225", "#EA9225", "#EA9225", "#3169D1"];

        var months_year = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        Date.prototype.getWeek = function () {
            var date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            var week1 = new Date(date.getFullYear(), 0, 4);
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                - 3 + (week1.getDay() + 6) % 7) / 7);
        };

        var some_value = new Date();
        week_number = (some_value.getWeek());

        var count_vis = 0;
        var val_mass = 1
        var val_colors = 0;

        while (count_vis <= mass_visit_month.length) {
            while (val_mass <= days_month) {
                while (val_colors <= bar_colors_month.length) {
                    dataProvMonth.push(
                        {
                            "day": val_mass,
                            "visits": mass_visit_month[count_vis],
                            "color": bar_colors_month[val_colors]
                        }
                    )
                    val_colors++;
                    if (val_colors === 8) {
                        val_colors = 0;
                    }
                    ;
                    break;
                }
                val_mass++;
                break;
            }
            count_vis++;
        }
        ;

        count_vis = 0;
        val_mass = week_number - 11;
        val_colors = 0;

        while (count_vis <= mass_visit_quart.length) {
            while (val_mass <= week_number) {
                while (val_colors <= bar_colors_quart.length) {
                    dataProvQuart.push(
                        {
                            "week": "Неделя " + val_mass,
                            "visits": mass_visit_quart[count_vis],
                            "color": bar_colors_quart[val_colors]
                        }
                    )
                    val_colors++;
                    if (val_colors === 4) {
                        val_colors = 0;
                    }
                    ;
                    break;
                }
                val_mass++;
                break;
            }
            count_vis++;
        }
        ;

        count_vis = 0;
        val_mass = 0;
        val_colors = 0;

        while (count_vis <= mass_visit_year.length) {
            while (val_mass < months_year.length) {
                while (val_colors <= bar_colors_year.length) {
                    dataProvYear.push(
                        {
                            "month": months_year[val_mass],
                            "visits": mass_visit_year[count_vis],
                            "color": bar_colors_year[val_colors]
                        }
                    )
                    val_colors++;
                    if (val_colors === 12) {
                        val_colors = 0;
                    }
                    ;
                    break;
                }
                val_mass++;
                break;
            }
            count_vis++;
        }
        ;

        var chart = AmCharts.makeChart("month", {
            "type": "serial",
            "marginRight": 0,
            "dataProvider": dataProvMonth
            ,
            "startDuration": 1,
            "graphs": [{
                "balloonText": "[[category]]: [[value]]",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "day",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 0
            },
            "export": {
                "enabled": true
            }

        });

        var chart = AmCharts.makeChart("quart", {
            "type": "serial",
            "marginRight": 0,
            "dataProvider": dataProvQuart
            ,
            "startDuration": 1,
            "graphs": [{
                "balloonText": "[[category]]: [[value]]",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "week",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 0
            },
            "export": {
                "enabled": true
            }

        });

        var chart = AmCharts.makeChart("year", {
            "type": "serial",
            "marginRight": 0,
            "dataProvider": dataProvYear
            ,
            "startDuration": 1,
            "graphs": [{
                "balloonText": "[[category]]: [[value]]",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "month",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 0
            },
            "export": {
                "enabled": true
            }

        });

        $('.month_chart').click(function () {
            $('.month_chart').addClass('month_chart_active');
            $('.quarter_chart').removeClass('quarter_chart_active');
            $('.year_chart').removeClass('year_chart_active');
            $('.chart_div_month').fadeIn(2000);
            $('.chart_div_quart').fadeOut(2000);
            $('.chart_div_year').fadeOut(2000);
        });

        $('.quarter_chart').click(function () {
            $('.month_chart').removeClass('month_chart_active');
            $('.quarter_chart').addClass('quarter_chart_active');
            $('.year_chart').removeClass('year_chart_active');
            $('.chart_div_month').fadeOut(2000);
            $('.chart_div_quart').fadeIn(2000);
            $('.chart_div_year').fadeOut(2000);
        });

        $('.year_chart').click(function () {
            $('.month_chart').removeClass('month_chart_active');
            $('.quarter_chart').removeClass('quarter_chart_active');
            $('.year_chart').addClass('year_chart_active');
            $('.chart_div_month').fadeOut(2000);
            $('.chart_div_quart').fadeOut(2000);
            $('.chart_div_year').fadeIn(2000);
        });

        // ------------------------------ gist page 3 end ------------------------------//
    }
);

