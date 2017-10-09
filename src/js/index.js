// document.addEventListener('DOMContentLoaded',function(){   
//     brand_li[1].onmouseenter=function(){
//         console.log(66666);
//     }
//     //文字上下，图片左右
//     function Char(){
//         this.char_li=document.querySelectorAll('.brand>ul>li');
//         this.char_h4=document.querySelectorAll('.brand>ul>li h4');
//         this.char_img=document.querySelectorAll('.brand>ul>li img');

//         this.idx=0;
//     }
//     Char.prototype={
//         constructor:Char,
//         init:function(){
//             for(let i=0;i<this.char_li.length;i++){
//                 this.char_li[i].onmouseenter=()=>{
//                     this.idx=i;
//                     this.enter();
//                 }
//                 this.char_li[i].onmouseleave=()=>{
//                     this.idx=i;
//                     this.leave();
//                 }
//             }
//             console.log(this.char_li);
//             console.log(this.char_h4);
//         },
//         enter:function(){
//             animate(this.char_h4[this.idx],{'padding-top':30,});
//             animate(this.char_img[this.idx],{left:148})
//         },
//         leave:function(){
//             animate(this.char_h4[this.idx],{'padding-top':0});
//             animate(this.char_img[this.idx],{left:115})
//         }
//     }
//     new Char().init();
//  
//     
//           
//     //轮播图
    // var lun=document.querySelectorAll('.lun>ul>li');
    // for(var i=0;i<lun.length;i++){

    // }
    // console.log(lun);

// })
jQuery(function($){
    
    //背景颜色变化
    var arr=['#E00A30','#D2D2D0','#DF002D','#D6BEA2','#85DEDC'];
    var arr2=['#f5b3c0','#eeeeed','#f5b3c0','#f2ebe3','#ddf2ed'];
    // console.log(arr[1]);
    //轮播图
    var $lun=$('.lun>ul>li');
    //console.log($lun);
    // 生成页码
    var lun_div=$('<div/>').addClass('lun_div');
    var div_html='<a href="javascript:;"></a>'.repeat($lun.length);
    
    lun_div.html(div_html)
    
    lun_div.appendTo($lun.parent('ul').parent('.lun'));
    var lun_idx=0;
    var lun_a=$('.lun_div a');
    //添加颜色页码
    lun_a.eq(lun_idx).addClass('lun_A');
    // 背景颜色变化添加
    $lun.eq(lun_idx).css({background:arr[lun_idx]});
    var $lun_r=$('.lun_r');
    $lun_r.css({background:arr2[lun_idx]});
    var temr;
    $lun.eq(lun_idx).animate({opacity:1}).siblings('li').animate({opacity:0});
    lun_a.on('click',function(){
        clearInterval(temr)
        var a_idx=$(this).index();
        lun_a.eq(a_idx).addClass('lun_A').siblings('a').removeClass('lun_A');

        $lun.eq(a_idx).animate({opacity:1},600).siblings('li').animate({opacity:0},600);
        lun_idx=a_idx-1;
        temr=setInterval(function(){
            lun_idx++;
            if(lun_idx>4){
                lun_idx=0;
            }
            tmt(lun_idx);
        },3000);
    })
    temr=setInterval(function(){
        lun_idx++;
        if(lun_idx>4){
            lun_idx=0;
        }
        tmt(lun_idx);
    },3000);
    tmt=function(lun_idx){
        
        
        lun_a.eq(lun_idx).addClass('lun_A').siblings('a').removeClass('lun_A');

        $lun.eq(lun_idx).animate({opacity:1},600).siblings('li').animate({opacity:0},600);

    $lun.eq(lun_idx).css({background:arr[lun_idx]});
    $lun_r.css({background:arr2[lun_idx]});
    }



    //文字上下 图片左右
    var $char_li=$('.brand>ul>li');
    var $char_h4=$('.brand>ul>li h4');
    var $char_img=$('.brand>ul>li img');
    $char_li.on('mouseenter',function(){
        $(this).find('h4').animate({'padding-top':30}).find('span').addClass('Span');
        $(this).find('img').animate({left:148});
    })
    $char_li.on('mouseleave',function(){
        $(this).find('h4').animate({'padding-top':0}).find('span').removeClass('Span');
        $(this).find('img').animate({left:115});
    })

    //tab标签切换、、、、、、、、、、、、、、
    //.............1f.tab...............
    var $tab_a=$('.brand_1f>.brand_tab>span>a');
    var $brand_1fLeft=$('.brand_1fLeft');
    var $tab_1All=$brand_1fLeft.nextAll('div');
    $tab_a.eq(0).addClass('tab_AQ');
    $tab_1All.eq(0).addClass('tab_TJ');
    $tab_a.on('mouseenter',function(){
        
        var tab_idx=$(this).index();
        //console.log($tab_1All.eq(tab_idx));

        $tab_a.eq(tab_idx).addClass('tab_AQ').siblings('a').removeClass('tab_AQ');

        $tab_1All.eq(tab_idx).addClass('tab_TJ').siblings('div').removeClass('tab_TJ'); 
    })
    //.............1f.lun...............

    $hot_p=$('.hot_p');
    $p_span=$('.hot_p>span');
    // console.log($p_span.css('width'))
    var p_idx=0;
    var p_width=parseInt($p_span.css('width'));
    setInterval(function(){
        p_idx++;
        if(p_idx>$p_span.length-1){
            p_idx=0;
        }
        //console.log(-p_idx*p_width);

        $hot_p.animate({left:-p_idx*p_width},600)
    },3000)
    //
    //.............1f.opacity...............
    var $hot_h=$('.hot_h>a');

    $hot_h.on('mouseenter',function(){
        //console.log($(this));
        // $(this).animate({opacity:0},1000).siblings('a').animate({opacity:0.7},1000);
    })
    //.............2f................
    var $tab2_a=$('.brand_2f>.brand_tab>span>a');
    //console.log($tab2_a);
    var $brand_2fLeft=$('.brand_2fLeft');
    var $tab_2All=$brand_2fLeft.nextAll('div');
    $tab2_a.eq(0).addClass('tab_AQ');
    $tab_2All.eq(0).addClass('tab_TJ');
    $tab2_a.on('mouseenter',function(){
        
        var tab2_idx=$(this).index();
        console.log($tab_2All.eq(tab2_idx));

        $tab2_a.eq(tab2_idx).addClass('tab_AQ').siblings('a').removeClass('tab_AQ');

        $tab_2All.eq(tab2_idx).addClass('tab_TJ').siblings('div').removeClass('tab_TJ');
    })
    //.............3f................
    var $tab3_a=$('.brand_3f>.brand_tab>span>a');
    //console.log($tab3_a);
    var $brand_3fLeft=$('.brand_3fLeft');
    var $tab_3All=$brand_3fLeft.nextAll('div');
    $tab3_a.eq(0).addClass('tab_AQ');
    $tab_3All.eq(0).addClass('tab_TJ');
    $tab3_a.on('mouseenter',function(){
        
        var tab3_idx=$(this).index();
        console.log($tab_3All.eq(tab3_idx));

        $tab3_a.eq(tab3_idx).addClass('tab_AQ').siblings('a').removeClass('tab_AQ');

        $tab_3All.eq(tab3_idx).addClass('tab_TJ').siblings('div').removeClass('tab_TJ');
    })
   //.............4f................
    var $tab4_a=$('.brand_4f>.brand_tab>span>a');
    //console.log($tab4_a);
    var $brand_4fLeft=$('.brand_4fLeft');
    var $tab_4All=$brand_4fLeft.nextAll('div');
    $tab4_a.eq(0).addClass('tab_AQ');
    $tab_4All.eq(0).addClass('tab_TJ');
    $tab4_a.on('mouseenter',function(){
        
        var tab4_idx=$(this).index();
        console.log($tab_4All.eq(tab4_idx));

        $tab4_a.eq(tab4_idx).addClass('tab_AQ').siblings('a').removeClass('tab_AQ');

        $tab_4All.eq(tab4_idx).addClass('tab_TJ').siblings('div').removeClass('tab_TJ');
    })
    //.............5f................
    var $tab5_a=$('.brand_5f>.brand_tab>span>a');
    //console.log($tab5_a);
    var $brand_5fLeft=$('.brand_5fLeft');
    var $tab_5All=$brand_5fLeft.nextAll('div');
    $tab5_a.eq(0).addClass('tab_AQ');
    $tab_5All.eq(0).addClass('tab_TJ');
    $tab5_a.on('mouseenter',function(){
        
        var tab5_idx=$(this).index();
        console.log($tab_5All.eq(tab5_idx));

        $tab5_a.eq(tab5_idx).addClass('tab_AQ').siblings('a').removeClass('tab_AQ');

        $tab_5All.eq(tab5_idx).addClass('tab_TJ').siblings('div').removeClass('tab_TJ');
    })
})