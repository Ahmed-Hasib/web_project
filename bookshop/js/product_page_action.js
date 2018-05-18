var menu_open_btn=document.querySelector("#menu_bttn");
var menu_close_btn=document.querySelector("#mobile_menu_close");
 
var mobile_action=document.querySelector(".product_mobile_menu");

menu_open_btn.addEventListener("click",function(){
   mobile_action.style.width="100%";
    
});
menu_close_btn.addEventListener("click",function(){
    mobile_action.style.width="0px";
    
});
//var pc=document.querySelector("#pdtc");
//pc.addEventListener("click",function(){
//  // pc.style.display="none";
//    
//    
//});