console.log("rodsen");
window.onload = function () {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    // 定时器
    var timer = setInterval(clock_fun,100);
    // 定时器函数
    function clock_fun () {
        var date = new Date();
        // 毫秒时间戳
        var all_mills = date.getTime() ;
        // 秒时间戳
        var all_s = all_mills/1000;
        // 分钟时间戳
        var all_min = all_s/60;
        // 小时时间戳
        var all_hour = all_min/60;
        // 120秒一个周期
        var tow_s = all_s%120;
        // 240分钟一个周期
        var tow_min = all_min%240;
        // 中国时区
        var cn_hour = all_hour + 8; 
        var tow_cn_hour = cn_hour%24;
        // 赋值给指针旋转角度
        hour.style.transform = 'rotate('+ tow_cn_hour * 15 +'deg)';
        minute.style.transform = 'rotate('+ tow_min * 1.5 +'deg)';
        second.style.transform = 'rotate('+ tow_s * 3 +'deg)';

    }
}
