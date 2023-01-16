
/*$(document).ready(()=>{
    $("h1").css("font-size","19px");//when document is ready then it will run
})


$("h1").css("color","red");*/


console.log($("h1").css("color"));//to get which color is there

$("h1").addClass("big small");
$("h1").removeClass("big");

console.log($("h1").hasClass("small"))//check if it has class or not


$("h1").text("world");//it will change all h1 text present in html

$("h1").html("www");//same as uperr

$("img").attr("src","img.png");//changing attribute
$("h1").attr("class","big")//changing class

$("h1").click(()=>{//event clistner using jquery
    $("h1").css("color","purple");
})

$("body").keypress((event)=>{//keypress listknenig 
    $("h1").text(event.key)//change text when key is pressed and text change to keypress
})

$("h1").on("mouseover",()=>{//same as event listner
    $("h1").css("color","red");
})

$("h1").before("<button>before</button>");//befoore h1 tag

$("h1").after("<button>before</button>");//after h1 tag
$("h1").prepend("<button>before</button>");//before content of h1 tag
$("h1").append("<button>before</button>");//after content of h1 tag
//$("h1").remove();removes element

$("button").click(()=>{
    //animation
   // $("h1").hide(); hides button on click
   // $("h1").show(); show button on click
    //$("h1").toggle(); toggle button on click
   // $("h1").slideToggle();
   $("h1").animate({opacity:0.6}); 
   $("h1").slideup().slidedown().animate({opacity:0.8})//all at a time
})
