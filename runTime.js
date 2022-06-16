//By solstice23
//用途: 紀錄網站架站開始時間
//頁面每次跳轉都會執行window.pjaxLoaded = function(){}內的程式碼
window.pjaxLoaded = function () {
    function NewDate(str) {
        str = str.split('-');
        var date = new Date();
        date.setUTCFullYear(str[0], str[1] - 1, str[2]);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
    function helloWorld() {
        var birthDay = NewDate("2021-07-25");
        var today = new Date();
        var timeold = today.getTime() - birthDay.getTime();
        var sectimeold = timeold / 1000
        var secondsold = Math.floor(sectimeold);
        var msPerDay = 24 * 60 * 60 * 1000; var e_daysold = timeold / msPerDay;
        var daysold = Math.floor(e_daysold);
        var e_hrsold = (daysold - e_daysold) * -24;
        var hrsold = Math.floor(e_hrsold);
        var e_minsold = (hrsold - e_hrsold) * -60;
        var minsold = Math.floor((hrsold - e_hrsold) * -60); var seconds = Math.floor((minsold - e_minsold) * -60).toString();
        document.getElementById("momk").innerHTML = "本站已安全运行" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
        setTimeout(helloWorld, 1000);
    } 
    helloWorld();
};
window.pjaxLoaded(); //手動執行 window.pjaxLoaded 讓網頁在第一次載入時也會執行這段腳本