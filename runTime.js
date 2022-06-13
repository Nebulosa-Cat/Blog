//By solstice23
//用途: 紀錄網站架站開始時間
//頁面每次跳轉都會執行window.pjaxLoaded = function(){}內的程式碼
window.pjaxLoaded = function () {
    var blog_running_days = document.getElementById("blog_running_days");
    var blog_running_hours = document.getElementById("blog_running_hours");
    var blog_running_mins = document.getElementById("blog_running_mins");
    var blog_running_secs = document.getElementById("blog_running_secs");
    function refresh_blog_running_time() {
        var time = new Date() - new Date(2021, 7, 25, 0, 0, 0);
        var d = parseInt(time / 24 / 60 / 60 / 1000);
        var h = parseInt(time % (24 * 60 * 60 * 1000) / 60 / 60 / 1000);
        var m = parseInt(time % (60 * 60 * 1000) / 60 / 1000);
        var s = parseInt(time % (60 * 1000) / 1000);
        blog_running_days.innerHTML = d;
        blog_running_hours.innerHTML = h;
        blog_running_mins.innerHTML = m;
        blog_running_secs.innerHTML = s;
    };
    refresh_blog_running_time();
    if (typeof (bottomTimeIntervalHasSet) == "undefined") {
        let bottomTimeIntervalHasSet = true;
        setInterval(function () { refresh_blog_running_time(); }, 500);
    };
};
window.pjaxLoaded(); //手動執行 window.pjaxLoaded 讓網頁在第一次載入時也會執行這段腳本
