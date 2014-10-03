$(document).ready(function(){
	set_tabs();
	toggle_tabs();
});

$(window).resize(function(){
	
});

$(window).load(function(){
	
});

function set_tabs() {
	$(".tab-panel").hide();
	$(".active-first").show();
	$($(".tab-nav a[href=\"#"+$(".active-first").attr("id")+"\"]")).css({'font-weight':'bold'});
}

function toggle_tabs() {
	$(".tab-nav a").click(function(e){
		e.preventDefault();
		$(".tab-panel").hide();
		$($(this).attr('href')).show();
		$(".tab-nav a").css({'font-weight':'normal'});
		$($(".tab-nav a[href=\""+$(this).attr("href")+"\"]")).css({'font-weight':'bold'});
	});
}