// JavaScript Document
var oDiv=document.getElementById('box');
	 


	function getStyle(obj,name){//获取style样式
	var value=obj.currenStyle ? obj.currenStyle[name]:getComputedStyle(obj,false)[name];
	if(name=='opacity'){
		value=Math.round(parseFloat(value)*100);
	}else{
		value=parseInt(value);
	};
	return value;
	};

	
	
	function move_box(obj,moveMode,end,stopTime){
		var start=getStyle(obj,moveMode);//确定起点
		var dis=end-start;//确定走过的距离
		var count=parseInt(stopTime/30);	///时间份数
		var n=0;
		
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;//时间递增
			var step_dis=start+dis/count*n;///起点+距离按时间的份数等分
			
			if(moveMode=='opacity'){
				obj.style.opacity=step_dis/100;
				obj.style.filter='alpha(opacity:'+step_dis+')';
			}else{
				obj.style[moveMode]=step_dis+'px';
			};


			if(n==count){
				clearInterval(obj.timer);
			};
		},30);
	};