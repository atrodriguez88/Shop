$().ready(function() {
    //var intViewportWidth = self.innerWidth;
    //document.getElementById("main-logo").innerHTML=intViewportWidth;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    //var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (w < 1400) {
        document.getElementById("search").size = 20;
    }
    if (w < 768) {
        document.getElementById("search").size = 18;
    }
    if (w < 420) {
        document.getElementById("search").size = 12;
    }
    if (w < 320) {
        document.getElementById("search").size = 10;
        //document.getElementById("menu-search").style.fontSize="8px";
    }
});
