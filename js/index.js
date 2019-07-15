var flag = true;
function Carousel(target, prev, next, choose, img) {
    this.len = $('.' + choose).length;
    this.wid = $('.' + target).width();
    this.play_timer = undefined;
    this.nowIndex = 0;
    this.target = target;
    this.prev = prev;
    this.next = next;
    this.choose = choose;
    this.img = img;
    this.init();
    // Carousel.prototype.call(this,target,prev,next,choose,img);
}
Carousel.prototype = {
    constructor: Carousel,
    init: function () {
        this.bindEvent();
        this.autoPlay();
    },
    bindEvent: function () {
        play_timer = this.play_timer;
        target = this.target;
        prev = this.prev;
        next = this.next;
        choose = this.choose;
        img = this.img;
        nowIndex = this.nowIndex;
        $('.' + prev).add($('.' + next)).add($('.' + choose)).on('click', function () {
            if ($(this).hasClass(prev)) {
                this.move('prev');
            } else if ($(this).hasClass(next)) {
                this.move('next');
            } else {
                var indexChoose = $(this).index();
                this.move(indexChoose);
            }
            this.changePointColor(nowIndex);
        })
        $('.lbt').mouseenter(function () {
            clearTimeout(play_timer);
        }).mouseleave(function () {
            clearTimeout(play_timer);
            this.autoPlay();
        })
        $('.lbt_btn').mouseover(function () {
            clearTimeout(play_timer);
            this.autoPlay();
        })
    },
    move: function (direction) {
        nowIndex = this.nowIndex;
        play_timer = this.play_timer;
        target = this.target;
        choose = this.choose;
        img = this.img;
        if (flag) {
            flag = false;
            var a = 1;
            if (direction == 'prev' || direction == 'next') {
                if (direction == 'prev') {
                    if (nowIndex == 0) {
                        $('.' + img).css({ left: -(w * len) });
                        nowIndex = len - 1;
                    } else {
                        nowIndex = nowIndex - 1;
                    }
                } else {
                    if (nowIndex == len - 1) {
                        a = 0;
                        $('.' + img).animate({ left: -(w * len) }, function () {
                            $(this).css({ left: 0 })
                            clearTimeout(play_timer);
                            this.autoPlay();
                            flag = true;
                        });
                        nowIndex = 0;
                    } else {
                        nowIndex = nowIndex + 1;
                    }
                }
            } else {
                nowIndex = direction;
                console.log(nowIndex);
            }
            if (a) {
                $('.' + img).animate({ left: -(w * nowIndex) }, function () {
                    clearTimeout(play_timer);
                    this.autoPlay();
                    flag = true;
                });
            }
        }
    },
    changePointColor: function (index) {
        choose = this.choose;
        $('.choose').removeClass('choose');
        $('.' + choose).eq(index).addClass('choose');
    },
    autoPlay: function () {
        target = this.target;
        choose = this.choose;
        img = this.img;
        nowIndex = this.nowIndex;
        this.play_timer = setTimeout(function () {
            this.move( 'next');
            this.changePointColor(nowIndex);
        }, 10000)
    }
}
var tb = new Carousel('lbt_tb', 'left_btn_tb', 'right_btn_tb', 'point_tb', 'lbt_img_tb');
// var tm = new Carousel('lbt_tmll','left_btn_tm','right_btn_tm','point_tm','lbt_img_tm');
// tb.init();
// function init(target,prev,next,choose,img){
//     // var nowIndex = 0,
//     // play_timer = undefined;
//     bindEvent(prev,next,target,choose,img);
//     autoPlay(target, choose, img);
// }  
// function bindEvent(prev,next,target,choose,img){
//     // var nowIndex = 0,
//     // play_timer = undefined;;
//     var nowIndex = nowIndex,
//         play_timer = play_timer;
//     $('.'+prev).add($('.'+next)).add($('.'+choose)).on('click',function(){
//         if($(this).hasClass(prev)){
//             move(target,'prev',img, choose);
//         }else if($(this).hasClass(next)){
//             move(target,'next',img, choose);
//         }else{
//             var indexChoose = $(this).index();
//             move(target,indexChoose,img, choose);
//         }
//         changePointColor(nowIndex,choose);
//     })
//     $('.lbt').mouseenter(function(){
//         clearTimeout(play_timer);
//     }).mouseleave(function(){
//         clearTimeout(play_timer);
//         autoPlay(target, choose, img);
//     })
//     $('.lbt_btn').mouseover(function(){
//         clearTimeout(play_timer);
//         autoPlay(target, choose, img);
//     })
// }
// function move(target, direction, img, choose){
//     // console.log(len);
//     var nowIndex = nowIndex,
//         len = len,
//         play_timer = play_timer,
//         w = wid;
//     if(flag){
//         flag = false;
//         var a = 1;
//         if(direction == 'prev' || direction == 'next'){
//             if(direction == 'prev'){
//                 if(nowIndex == 0){
//                     $('.'+img).css({left: -(w * len)});
//                     nowIndex = len-1;
//                 }else{
//                     nowIndex = nowIndex - 1;
//                 }
//             }else{
//                 if(nowIndex == len-1){
//                     a=0;
//                     $('.'+img).animate({left: -(w*len)},function(){
//                         $(this).css({left:0})
//                         clearTimeout(play_timer);
//                         autoPlay(target, choose, img);
//                         flag = true;
//                     });
//                     nowIndex = 0;
//                 }else{
//                     nowIndex = nowIndex + 1;
//                 }
//             }
//         }else{
//             nowIndex = direction;
//             console.log(nowIndex);
//         }
//         if(a){
//             $('.'+img).animate({left: -(w*nowIndex)},function(){
//                 clearTimeout(play_timer);
//                 autoPlay(target, choose, img);
//                 flag = true;
//             });
//         }
//     }
// }
// function changePointColor(index, choose){
//         $('.choose').removeClass('choose');
//         $('.'+choose).eq(index).addClass('choose');
// }
// function autoPlay(target, choose, img){  
//     play_timer = setTimeout(function(){
//         move(target,'next',img, choose);
//         changePointColor(nowIndex, choose);
//     },10000)
// }


// init('tm','lbt_tmll','left_btn_tm','right_btn_tm','point_tm','lbt_img_tm');
// 点击左右按钮
// 点击圆点
// 自动轮播
