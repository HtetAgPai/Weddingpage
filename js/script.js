$(document).ready(function(){
	if($(".description").length){
		ScrollReveal().reveal('.description', { delay: 500 });
	}
	if($("#st__num").length){
		counter();	
	}
	if($("#heart-toggle").length){
        $("#heart-toggle i").each(function(v,k){
            k.addEventListener("click",function(){
                if(hasClass(k,"far fa-heart")){
                    k.classList.replace("far","fas");
                }else{
                    k.classList.replace("fas","far");
                }
            });
        });
 
	}
});
function counter() {
    let stnum = +$("#st__num").data("number");
    let tenum = +$("#te__num").data("number");
    let awnum = +$("#aw__num").data("number");
    let speed = 20;
    setInterval(function() {
        let stnum_html = +$("#st__num").text();
        if (stnum_html < stnum) {
            $("#st__num").text(Math.floor(stnum_html + (stnum / speed)));
        }
        let tenum_html = +$("#te__num").text();
        if (tenum_html < tenum) {
            $("#te__num").text(Math.floor(tenum_html + (tenum / speed)));
        }
        let awnum_html = +$("#aw__num").text();
        if (awnum_html < awnum) {
            $("#aw__num").text(Math.ceil(awnum_html + (awnum / speed)));
        }
    }, 100);
}
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}