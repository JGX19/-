var nowIndex_tb = 0,
    w = $('.lbt_tb').width(),//520
    len_tb = $('.point_tb').length,//5
    slider_timer_tb = undefined,
    flag_tb = true;
function init_tb() {
    bindEvent_tb();
    slider_auto_tb();
}
function bindEvent_tb() {
    $('.left_btn_tb').add($('.right_btn_tb')).add($('.point_tb')).on('click', function () {
        if($(this).hasClass('left_btn_tb')) {
            move_tb('prev');
        }else if($(this).hasClass('right_btn_tb')) {
            move_tb('next');
        }else {
            var index = $(this).index();
            move_tb(index);
        }
        changeOrderStyle_tb(nowIndex_tb);
    })
    $('.lbt_tb')
        .mouseenter(function () {
            $('.lbt_btn').css({display: 'block'});
            clearTimeout(slider_timer_tb);
        })
        .mouseleave(function () {
            $('.lbt_btn').css({display: 'none'});
            clearTimeout(slider_timer_tb);
            slider_auto_tb();
        })
    $('.lbt_btn').mouseover(function () {
        clearTimeout(slider_timer_tb);
        slider_auto_tb();
    })
}
function move_tb(direction) {
    if(flag_tb) {
        flag_tb = false;
        var a = 1;
        if(direction == 'prev' || direction == 'next') {
            if(direction == 'prev'){
                if(nowIndex_tb == 0) {
                    $('.lbt_img_tb').css({left: -(w * len_tb)});
                    nowIndex_tb = len_tb - 1;
                }else {
                    nowIndex_tb = nowIndex_tb - 1;
                }
            }else {
                if(nowIndex_tb == 4) {
                    a = 0;
                    $('.lbt_img_tb').animate({left: -(w * len_tb)}, function () {
                        $(this).css({left: 0});
                        clearTimeout(slider_timer_tb);
                        slider_auto_tb();
                        flag_tb = true;
                    })
                    nowIndex_tb = 0;
                }else {
                    nowIndex_tb = nowIndex_tb + 1;
                }
            }
        }else {
            nowIndex_tb = direction;
        }
        if(a) {
            $('.lbt_img_tb').animate({left: -(w * nowIndex_tb)}, function () {
                clearTimeout(slider_timer_tb);
                slider_auto_tb();
                flag_tb = true;
            });
        }
    }
    
}
function changeOrderStyle_tb(index) {
    $('.choose').removeClass('choose');
    $('.point_tb').eq(index).addClass('choose');
}
function slider_auto_tb() {
    slider_timer_tb = setTimeout(function () {
        move_tb('next');
        changeOrderStyle_tb(nowIndex_tb);
    }, 1000)
}
// tmll
var nowIndex_tm = 0,
    w = $('.lbt_tmll').width(),//520
    len = $('.point_tm').length,//3
    slider_timer = undefined,
    flag = true;
function init() {
    bindEvent();
    slider_auto();
}
function bindEvent() {
    $('.left_btn_tm').add($('.right_btn_tm')).add($('.point_tm')).on('click', function () {
        if($(this).hasClass('left_btn_tm')) {
            move('prev');
        }else if($(this).hasClass('right_btn_tm')) {
            move('next');
        }else {
            var index = $(this).index();
            move(index);
        }
        changeOrderStyle(nowIndex_tm);
    })
    $('.lbt_tmll')
        .mouseenter(function () {
            $('.lbt_btn').css({display: 'block'});
            clearTimeout(slider_timer);
        })
        .mouseleave(function () {
            $('.lbt_btn').css({display: 'none'});
            clearTimeout(slider_timer);
            slider_auto();
        })
    $('.lbt_btn').mouseover(function () {
        clearTimeout(slider_timer);
        slider_auto();
    })
}
function move(direction) {
    if(flag) {
        flag = false;
        var a = 1;
        if(direction == 'prev' || direction == 'next') {
            if(direction == 'prev'){
                if(nowIndex_tm == 0) {
                    $('.lbt_img_tm').css({left: -(w * len)});
                    nowIndex_tm = len - 1;
                }else {
                    nowIndex_tm = nowIndex_tm - 1;
                }
            }else {
                if(nowIndex_tm == 2) {
                    a = 0;
                    $('.lbt_img_tm').animate({left: -(w * len)}, function () {
                        $(this).css({left: 0});
                        clearTimeout(slider_timer);
                        slider_auto();
                        flag = true;
                    })
                    nowIndex_tm = 0;
                }else {
                    nowIndex_tm = nowIndex_tm + 1;
                }
            }
        }else {
            nowIndex_tm = direction;
        }
        if(a) {
            $('.lbt_img_tm').animate({left: -(w * nowIndex_tm)}, function () {
                clearTimeout(slider_timer);
                slider_auto();
                flag = true;
            });
        }
    }
    
}
function changeOrderStyle(index) {
    $('.choose_tmll').removeClass('choose_tmll');
    $('.point_tm').eq(index).addClass('choose_tmll');
}
function slider_auto() {
    slider_timer = setTimeout(function () {
        move('next');
        changeOrderStyle(nowIndex_tm);
    }, 1000)
}







init_tb();
init();