$(function () {
    // 图片轮播
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 3000,
        // 如果需要分页器
        pagination: '.swiper-pagination'

    });

    var gameSize = function (ios, android) {
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            $('.game-size').text(ios);
        } else if (/android/.test(ua)) {
            $('.game-size').text(android);
        }
    };
    gameSize('25.54MB', '20.03MB');

    // var download = function (element, androidUrl, iosUrl) {
    //     this.element = $('#' + element);
    //     this.androidUrl = androidUrl;
    //     this.iosUrl = iosUrl;
    //     this.jump();
    // };
    // download.prototype.link = function () {
    //     var ua = navigator.userAgent.toLowerCase();
    //     if (/iphone|ipad|ipod/.test(ua)) {
    //         window.location.href = this.iosUrl;
    //     } else if (/android/.test(ua)) {
    //         window.location.href = this.androidUrl;
    //     }
    // };
    // download.prototype.jump = function () {
    //     var that = this;
    //     this.element.on('click', function () {
    //         that.link();
    //     });
    // };
    // var num = "?123";
    // var push_game = new download('push_game', 'http://fir.im/97n5'+num, 'https://fir.im/5yw3'+num);
    // var csmj = new download('csmj', 'http://fir.im/l6ge'+num, 'https://fir.im/b61m'+num);
    // var scmj = new download('scmj', 'http://fir.im/97n5'+num, 'https://fir.im/5yw3'+num);
    // var zzmj = new download('zzmj', 'http://fir.im/bc8w'+num, 'https://fir.im/7ltu'+num);
    // var phz = new download('phz', 'http://fir.im/3gty'+num, 'https://fir.im/uv6r'+num);
});