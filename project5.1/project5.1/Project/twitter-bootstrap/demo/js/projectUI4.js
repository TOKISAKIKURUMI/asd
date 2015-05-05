$(function() {
  var arr = new Array(6);
  move($(".bar"),40);
  $("#finall").click(function(){
    $("#yongye").fadeIn(100);
  })
  $("#demo .spa2").each(function(i){
    arr[i] = 0;
    var temp = i;
    $(this).click(function(){
            if (arr[i] == 0) {
            $("#demo .spa2").each(function(i){
            	if (temp != i) {
            		$(this).fadeOut(10);
              }
            })
            /*$(this).css({"display":"block"});
            $("div",this).css({"display":"block"});
            $("div div",this).css({"display":"block"});*/
            arr[i] = 1;
            $(this).animate({'margin-left':'10%','height':'19em','width':'100%'});
            $("div",this).animate({'height':'19em','width':'80%'});
            $("div > div",this).animate({'height':'19em','width':'100%'});
            $("div > div > div",this).animate({'height':'19em','width':'100%'});
            $("div > div > div > img",this).css({"overflow":"hidden"});
            $("div > div > div > img",this).animate({'height':'98%','width':'90%'});
            setTimeout(deaimage,0,this);
            $("img",this).addClass("spa3");
        } /*else {
          if (arr[i] == 1) {
            $(this).addClass("spa3");
            $("#demo div").each(function(i) {
                if (temp != i) {
                        $(this).fadeIn();
                }
                if (temp == i) {
                        $(this).animate({'height':'9.5em','width':'25%'});
                        $(this).animate({'margin-left':'1.7em'});
                        arr[i] = 0;
                }
            })
          }
        }*/
    })
  })
});
var x = 20;
function move(ob, yy) {
   ob.css({"width":x+"%"});
   x++;
   if (x > yy)return;
   setTimeout(move,20,ob,yy);
}
function deaimage(ob) {
  $("img",ob).attr("src","../demo/picture/gaibai_girl.png?"+Math.random());
}