$().ready(function(){
	//var intViewportWidth = self.innerWidth;
	//document.getElementById("main-logo").innerHTML=intViewportWidth;
	if (window.innerWidth < 1400) {
		document.getElementById("search").size=20;
	}
	if (window.innerWidth < 768) {
		document.getElementById("search").size=18;
	}
	if (window.innerWidth < 420) {
		document.getElementById("search").size=12;
	}
	if (window.innerWidth < 320) {
		document.getElementById("search").size=10;
		//document.getElementById("menu-search").style.fontSize="8px";
	}	
});
