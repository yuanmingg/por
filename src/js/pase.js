setTimeout(function(){jQuery(function($){
    //xxxxxxxxxxxxx  三级导航xxxxxxxxxxx
    var $h2=$('.list>h2');
    var $ding=$('.ding');
    $h2.on('mouseenter',function(){
        console.log(444);
        $ding.css({display:'block'});
    })
    //xxxxxxxxxxxxxxxxxxxxxxxxxx
    $ding.on('mouseleave',function(){
        console.log(444);
        $ding.css({display:'none'});
    })

    // $('#NAV').load('../html/pase.html');    
    // 导航条出现、隐藏
    var $nav_hide=$('.nav_hide');
    var $nav_a=$('.nav_a>a');
    var $nav=$('.nav');
    var $nav_car_a=$('.nav_car>p>a');
    var $nav_car_ul=$('.nav_car>ul');
    
    for(let i=0;i<$nav_a.length;i++){
        $nav_a.eq(i).on('click',function(){
            
            $nav.animate({right:270},500);
        })
    }
    $nav_car_a.on('click',function(){
        // console.log(7777);
        $nav.animate({right:0},500);
    })
    // console.log($nav_hide)；
    
     // 商品添加
    var $list_img_li=$('.list_img>ul>li')
    var carlist = [];
    var cookies = document.cookie;
    // console.log(cookies.length);
    if(cookies.length>0){
        cookies = cookies.split('; ');
        cookies.forEach(function(cookie){
            var temp = cookie.split('=');
            if(temp[0] === 'carlist'){
                carlist = JSON.parse(temp[1]);
            }
        })
    }

    Coo();
    
    for(let i=0;i<$list_img_li.length;i++){

        $list_img_li.eq(i).find('.list_btn').find('a').eq(0).on('click',function(){
            var $list_btnidx=$list_img_li.eq(i).find('a').eq(0).attr('class');
            var $coo=$('.coo>i');
            // console.log($coo.html);
            $.get('../api/pase.php?id='+$list_btnidx,function(data,status){
               if(status == 'success'){
                    var data=JSON.parse(data);
                    // console.log(data)
                    
                    data.forEach(function(item){
                        var has = false;
                        for(var i=0;i<$coo.length;i++){
                            // 已经存在
                            // console.log($coo.eq(i).html());
                            // console.log(item.id);
                            if($coo.eq(i).html() === item.id){
                                carlist[i].qty++;
                                if(Number(carlist[i].qty)>=10){
                                    carlist[i].qty=10;
                                }
                                has=true;
                                break;
                            }
                        }

                        // // 不存在
                        if(!has){

                            var goods={
                                img:item.img,
                                name:item.name,
                                id:item.id,
                                price:item.price,
                                color:item.color,
                                qty:1
                            }
                            // console.log(goods);
                            carlist.push(goods);
                        }
                    })
                    
                    carlist.forEach(function(item){

                    })
                    // 写入cookie
                    // console.log(carlist);
                    var date = new Date();
                    date.setDate(date.getDate()+15);
                    document.cookie = 'carlist=' + JSON.stringify(carlist)+ ';expires=' + date.toUTCString();
                ///
                }
                    Coo();
                
            })

        })
    }
    //
    // detail.html部分 
    //
    var $deta_sub=$('.deta_sub');
    var $deta_input=$deta_sub.next('input');

    var params = location.search;
    var str=params.substr(1);
    var str=str.split('=');
    var id=str[1]; 

    // 获取加入购物车的数量xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var $deta_btn=$('.deta_btn>a');
    $deta_btn.eq(1).on('click',function(){
        var qtyss=$deta_input.val();
        console.log(qtyss);
        var $coo=$('.coo>i');
        $.get('../api/pase.php?id='+id,function(data,status){
           if(status == 'success'){
                var data=JSON.parse(data);
                // console.log(data)
                
                data.forEach(function(item){
                    var has = false;
                    for(var i=0;i<$coo.length;i++){
                        // 已经存在
                        // console.log($coo.eq(i).html());
                        // console.log(item.id);
                        if($coo.eq(i).html() === item.id){
                            console.log(qtyss);

                            carlist[i].qty=Number(qtyss)+Number(carlist[i].qty);
                            if(Number(carlist[i].qty)>=10){
                                carlist[i].qty=10;
                            }
                            has=true;
                            break;
                        }
                    }

                    // // 不存在
                    if(!has){
                        console.log(qtyss);

                        var goods={
                            img:item.img,
                            name:item.name,
                            id:item.id,
                            price:item.price,
                            color:item.color,
                            qty:qtyss
                        }
                        // console.log(goods);
                        carlist.push(goods);
                    }
                })
                
                carlist.forEach(function(item){

                })
                // 写入cookie
                // console.log(carlist);
                var date = new Date();
                date.setDate(date.getDate()+15);
                document.cookie = 'carlist=' + JSON.stringify(carlist)+ ';expires=' + date.toUTCString();
            ///
            }
                Coo();
            
        })
    })
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


    function Coo(){
        $nav_car_ul.html(carlist.map(function(item){
            return `<li>
                <img src="${item.img}" />
                <p class="coo">${item.name} 货号<i>${item.id}</i></p>
                <p>颜色: ${item.color}</p>
                <span>价格: ${item.price}<i>×${item.qty}</i>
                    <a href="javascript:;">
                        <i class="icon-lajixiang"></i>
                        删除
                    </a>
                </span>
            </li>`
        }).join(''))
    }
    // 购物车图标显示数量
    $(document).on('click',function(){
        setTimeout(function(){

            var $nav_car_li=$('.nav_car>ul>li');
            var $nav_a_span=$nav_a.eq(1).find('span');
            var $nav_su=$nav_car_li.length;
            $nav_a_span.html($nav_su);

            //物品数量
            var $close_p=$('.close>p');
            $close_p.eq(0).find('span').html($nav_su);
            var cong=0;
            carlist.forEach(function(item){
                cong+=item.price*item.qty;

                $close_p.eq(1).find('span').html(cong)  
            });
        },1000)

    })
    // 删除商品
    var $car_li=$('.nav_car>ul>li');
    for(let i=0;i<$car_li.length;i++){

        $car_li.eq(i).on('mouseenter',function(){
            $car_li.eq(i).find('span').find('a').css({"display":"block"});
            // 删除
            $car_li.eq(i).find('span').find('a').on('click',function(){
                console.log(33);
                // $car_li.eq(i).css({"display":"none"})
                $car_li.eq(i).remove();
            })
        })
        $car_li.eq(i).on('mouseleave',function(){
            $car_li.eq(i).find('span').find('a').css({"display":"none"});
        })
    }
   
})},1000)
