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
    
    
    
    
});