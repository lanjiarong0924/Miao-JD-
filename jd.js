window.onload=function(){
    //得到banner容器中所有的IMG
    var imgs=document.getElementsByClassName('banner_img');
    //还要定义一个用于定义imgs数组的下标
    var index=0;
    //得到两个按钮
    var lastBtn=document.getElementById('last');
    var nextBtn=document.getElementById('next');

    //注册按钮事件
    lastBtn.onclick=function(){
        clearInterval(timer);
        //alert("点击了上一个按钮");
        imgs[index].style.opacity=0;
        index--;
        if(index<0){
            index=imgs.length-1;
        }
        imgs[index].style.opacity=1;
   
    timer=setInterval(function(){
        SwitchNext();
    },2000);
}

    nextBtn.onclick=function(){
        clearInterval(timer);
        SwitchNext();
        
        timer=setInterval(function(){
            SwitchNext();
        },2000);
    }

        function SwitchNext(){
        imgs[index].style.opacity=0;
        index++;
        if(index>imgs.length-1){
            index=0;
        }
        imgs[index].style.opacity=1;
    }


    var timer=setInterval(function(){
        SwitchNext();
    },2000);
    }


