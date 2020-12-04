$(document).ready(function(){
	$wind=$(window);
	$header=$("#header__nav");
	$toggle=$(".toggle-button");
	
	toggle_btn($header,$wind,$toggle);
	$wind.resize(function(){
		toggle_btn($header,$wind,$toggle);
	});
	$toggle.click(function(){
		$header.toggleClass("toggle__btn-click");
	});
});

function toggle_btn($header,$wind,$toggle){
	if($wind.width()<768){
		$header.css({left:"-500px"})
		$toggle.css({display:"block"});
	}else{
		$header.css({left:"0px"})
		$toggle.css({display:"none"});
	}
}

let typed=new Typed("#typed",{
	strings:["Web Developer","Freelancer"],
	loop:true,
	typeSpeed:50,
	backSpeed:50
});