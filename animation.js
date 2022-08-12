var pages = [];
$(document).ready( function() {
    var myvar=$("body").children('div');
    $.each(myvar,function(i,myvar){
        pages.push($(myvar).first('div').attr('class'));
    });
});


var pageTop = [];
var pageLoaded = [];
var scrollEnable = true;
$(document).ready( function() {
    
	var id;
	var hideHeight = $(window).height();
	var hdoc = $(document).height();
	var hwin = $(window).height();
	var wtop = $(window).scrollTop();
	var pageposition;
	$.each( pages, function(i,page ) {
		id = "."+page;
		if (page=="footerlast") id = "."+page;		
		pageTop[page] = $(id).offset().top;
		
		pageposition=$(id).offset().top;
		
		if (page!="headerbg" && !(hwin>hideHeight) && pageposition>hwin) {
			if (hwin<hdoc && hwin>wtop)
				$(id).addClass("hidden");
		}
		else
		{
		    $(id).addClass("loaded");
		}
	});
});
$(document).ready(function () {
	$(window).scroll(function() {
		var hdoc = $(document).height();
		var hwin = $(window).height();
		var wtop = $(window).scrollTop();
		var id;
			
		$.each( pages, function(i, page ) {
			
			id = "."+page;
			if (page=="footerlast") id = "."+page;		
			pageTop[page] = $(id).offset().top;
		});
		
		for( key in pageTop)
		{
			if ((hwin+wtop >= (pageTop[key]) && !pageLoaded[key]) || $('.allcontentbg').height()<728) {
				//id = "#"+key;
				id = "."+key;
				if (key=="footerlast") id= "."+key;					
				
				$(id).removeClass("hidden").addClass("loaded");
				pageLoaded[key] = true;						 
			}
		}
	});
});

var containerTest= [];
var containerLoadedTest=[];

function load_all_container()
{
    $(document).ready( function() {
	    var containerdh = $(document).height();
	    var containerh = $(window).height();
	    var containerw = $(window).scrollTop();
	    var containerhideHeight = $(window).height();;
	    
	    $.each( cotainers_class, function(i,cotainer ) {
		    containerTest[cotainer] = $(cotainer).offset().top;
		    $(cotainer).addClass("hidden_container");
	    });
	    onscrollgetclass();
	    
	    $(window).scroll(function() {
		    var containerdh = $(document).height();
		    var containerh = $(window).height();
		    var containerw = $(window).scrollTop();
		    
		    onscrollgetclass();
		    
		    for( containerkey in containerTest) {
			    if (containerh+containerw >= (containerTest[containerkey]+50) && !containerLoadedTest[containerkey]) {
				    $(containerkey).removeClass("hidden_container").addClass("loaded_container");
				    containerLoadedTest[containerkey] = true;
			    }
		    }
	    });
    });
}
function onscrollgetclass()
{
    $.each( cotainers_class, function(i,cotainer ) {
		    containerTest[cotainer] = $(cotainer).offset().top;
	    });
}