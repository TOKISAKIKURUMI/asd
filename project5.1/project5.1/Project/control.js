$(function() {
  $("#huadiao").click(function(){
	$("head").html(
	'<title>START</title>'+
	'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
	'<link href="css/bootstrap-responsive.css" rel="stylesheet">'+
  '<link href="css/res.css" rel="stylesheet">'+
	'<meta charset = "utf-8">'+

  '<!-- Buttons 库的核心文件 -->'+
  '<link rel="stylesheet" href="css/buttons.css">'+
  '<link href="css/flat-ui.css" rel="stylesheet">'+

  '<!-- 当需要使用带下拉菜单的按钮时才需要加载下面的 JavaScript 文件 -->'+
  '<script src="js/control1.js"></script>'+

  '<!-- 只有使用字体图标时才需要加载 Font-Awesome -->'+
  '<style type="text/css">'+
  'body {'+
	'background: url("../css/p222.jpg")  center center scroll;'+
'opacity:0.7;'+
'filter:alpha(opacity=70);'+
'}'+
'@media (max-width: 720px){'+
  'body{'+
  'background-size: cover;'+
  'background-position: center;'+ 
  'overflow: hidden;'+
  '}'+
  '}'+
  '.introduction {'+
    '-webkit-mask: -webkit-gradient(linear,0% 80%,90% 100%,from(rgba(0,153,102,0.8)),to(rgba(0,255,153,0.2)));'+
  	'font-size: 150%;'+
    'font-weight: bolder;'+
    'font-family: "Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;'+
  '}'+
  '.ask {'+
    'font-weight: bolder;'+
    'color: #1ABC9C;'+
    'font-family: "Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;'+
  '}'+
  '.start, .name {'+
    'position: relative;'+
  	'text-align: center;'+
  '}'+
  '</style>');
   $("body").html(
  '<div id="over" class="name">'+
    '<div class="over-ground">'+
      '<div class="title">'+
        '<div class = "introduction">'+
      '<p>游戏说明</p>'+
      '<p>指挥跳跃的小鸟</p>'+
      '<p>发现心仪你的TA</p>'+
    '</div>'+
       '<p class = "ask">先告诉我们你的名字吧~</p>'+
       '<input type="text" value="" placeholder="姓名" class="form-control" />'+
      '</div>'+
      '<br>'+
    '</div>'+
  '</div>'+
  '<br>'+
	'<div class = "start">'+
    '<button id="gamestart" class="button button-3d button-primary button-rounded button-circle button-giant">start</button>'+
  '</div>');
 $("body").css({backgroundImage:"url('css/p222.jpg')"});
 $.getScript("js/control1.js");
})
});