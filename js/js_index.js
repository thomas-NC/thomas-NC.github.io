$('#carousel-header').carousel({
	interval: 6000
});

$('#carousel-header').carousel({
	pause: false
});

$(document).ready(function(){
	$('#scrollhome, #scrollabout, #scrollweb, #scrollVG').click(function(e){
    	$.scrollTo(this.hash||0,1000);
        e.preventDefault()                             
                });
});