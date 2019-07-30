console.log("rodsen");
window.onload = function () {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    clock(hour,minute,second,8,24,240,240,100,true);
    
    var hour_2 = document.getElementById("hour_2");
    var minute_2 = document.getElementById("minute_2");
    var second_2 = document.getElementById("second_2");
    clock(hour_2,minute_2,second_2,8,24,240,240,100,true);

    var hour_3 = document.getElementById("hour_3");
    var minute_3 = document.getElementById("minute_3");
    var second_3 = document.getElementById("second_3");
    clock(hour_3,minute_3,second_3,8,24,240,240,100);
}

// 时钟函数 
/* 参数：
 * 时分秒指针
 * 时区
 * 时针一圈多少小时
 * 分针一圈多少分钟
 * 秒针一圈多少秒
 * 秒针移动频率（ms)
 * close:true为停止时钟
 */
function clock (hour,minute,second,timeZone,cycle_h,cycle_m,cycle_s,num,close) {
    var timer = null;
    var close = close;
    clearInterval(timer);
    // 定时器
    var timer = setInterval(clock_fun,num);
    // 定时器函数
    function clock_fun () {
        var date = new Date();
        var all_mills = date.getTime() ;
        var tow_s = all_mills/1000%cycle_s;
        var tow_min = all_mills/1000/60%cycle_m;
        var tow_cn_hour = (all_mills/1000/60/60 + timeZone)%cycle_h;
        // 赋值给指针旋转角度
        hour.style.transform = 'rotate('+ tow_cn_hour * (360/cycle_h)+'deg)';
        minute.style.transform = 'rotate('+ tow_min * (360/cycle_m) +'deg)';
        second.style.transform = 'rotate('+ tow_s * (360/cycle_s) +'deg)';
        if (close == true) {
            clearInterval(timer);
        }
    }
    
}