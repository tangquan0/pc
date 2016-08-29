/**
 * Created by hxsd on 2016/8/9.
 */
window.onload=function(){
    //var numBtn=document.getElementsByTagName('ul')[0].children;
    var oOl=document.getElementsByTagName('ol')[0];
    var aLi=oOl.children;
    var aBtn1=document.getElementById('a1');
    var aBtn2=document.getElementById('a2');
    var show_time=0;

    var oOl_w=aLi.length*aLi[0].offsetWidth+'px';//计算图片容器的宽度


    //for(var i=0; i<numBtn.length; i++){//按钮与图片的切换
    //    numBtn[i].index=i;
    //    numBtn[i].onclick=function(){
    //        for(var j=0; j<numBtn.length; j++){
    //            numBtn[j].className='';
    //        };
    //        this.className='ac';
    //        show_time=this.index;
    //        move_box(oOl,'left',-aLi[0].offsetWidth*show_time,500);
    //    };
    //};



    aBtn1.onclick=function(){//右边按钮
        show_time--;
        if(show_time<=0){
            show_time=0;
        };
        move_box(oOl,'left',-aLi[0].offsetWidth*show_time,500);
        for(var j=0; j<numBtn.length; j++){
            numBtn[j].className='';
        };
        numBtn[show_time].className='ac';
    };
    aBtn2.onclick=function(){//左边按钮
        show_time++;
        if(show_time>=aLi.length-1){
            show_time=aLi.length-1
        };
        move_box(oOl,'left',-aLi[0].offsetWidth*show_time,500);
        for(var j=0; j<numBtn.length; j++){
            numBtn[j].className='';
        };
        numBtn[show_time].className='ac';
    };



    //选项卡功能的函数调用
        hxsd_tab("tab",false);

};
