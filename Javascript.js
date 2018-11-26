$(document).ready(function(){

    //Fond des pages//
    setTimeout(
        function(){
            $('#paysage').animate({right:'0%'},1500);
        },500);


    //Text page1
    setTimeout(
        function(){
            $( '#TextP').animate({left:'0%'},2000);
        },500);


    //text page2
    setTimeout(
        function(){
            $('#TextC').animate({left:'0%'},2000);
        },500);


    //animation device page2
    if ($(window).width()<700){
        setTimeout(
            function(){
                $('#ecran').animate({top:'60%',opacity:'1'},2000);
            },600);
        setTimeout(
            function(){
                $('#tablette').animate({top:'63%',opacity:'1'},2000);
            },700);
        setTimeout(
            function(){
                $('#Phone').animate({top:'65%',left:'75%',opacity:'1'},2000);
                
            },800);
    }
    else{
    setTimeout(
        function(){
            $('#ecran').animate({top:'50%',opacity:'1'},2000);
        },600);
    setTimeout(
        function(){
            $('#tablette').animate({top:'55%',opacity:'1'},2000);
        },700);
    setTimeout(
        function(){
            $('#Phone').animate({top:'60%',opacity:'1'},2000);
            
        },800);
    }
    
    setTimeout(
        function(){
            $('#popup').animate({opacity:'1'},500);
        
        setTimeout(
        function(){
            $('#popup').animate({opacity:'0'},4000);
        },4000);
        
        },2000);
        
    
    
});