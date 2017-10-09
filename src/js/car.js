jQuery(function($){
    // 获取cookie值
    var cookied=document.cookie;
    // cookied=JSON.stringify(cookied);
    // console.log(cookied)
    if(cookied.length>0){
        cookied = cookied.split('; ');
        cookied.forEach(function(cookie){
            var temp = cookie.split('=');
            if(temp[0] === 'carlist'){
                carlist = JSON.parse(temp[1]);
            }
        })
    }
    // 获取位置信息
    var $car_js=$('.car_js');
    Coo();
    function Coo(){
        $car_js.html(carlist.map(function(item){
            return `
            <div class="car_mod_img qufu">
                <input type="checkbox" />
                <img src="${item.img}" />
                <div class="car_mod_number">
                    <p>${item.name} 货号${item.id}</p>
                    <ul>
                        <li class="qufu">
                            <p>
                                <input type="checkbox" />
                                颜色：${item.color}；规格：无
                            </p>
                            <a href="javascript:;">
                                <span class="number_sub">-</span>
                                <input type="text" value="${item.qty}" />
                                <span class="number_plus">+</span>
                            </a>
                            <span>${item.price}</span>
                            <span>${item.price*item.qty}.00</span>
                        </li>
                        
                        <span><i class="icon-wujiaoxing"></i><i class="icon-lajixiang"></i></span>
                    </ul>
                </div>
            </div>
            `
        }).join(''))
    }
    // console.log(carlist);
    //xxxxxxxxxxxxxxx数量的加减xxxxxxxxxxxxxxxxxxxxxx
    var $number_sub=$('.number_sub');
    var $number_plus=$('.number_plus');
    for(let i=0;i<$number_sub.length;i++){
   
        // 减
        // console.log(333);
        // console.log($number_sub);
        $number_sub.eq(i).on('click',function(){
            var $number_input=$number_sub.eq(i).next('input');
            // console.log($number_input.val())
            var number_inpidx=$number_input.val();

            number_inpidx--;
            if(number_inpidx<1){
                number_inpidx=1;
            }
            $number_input.val(number_inpidx);
            //xxxxxxxxxxxxxxxxx总价的变化xxxxxxxxxxxxxxxxxxxxxxxx
            total($number_sub);
            function total(num){
                var $tota=num.eq(i).parent('a').next('span');

                var $total=num.eq(i).parent('a').next('span').next('span');
                $total.html(number_inpidx*Number($tota.html())+'.00')
            }
            
            //
            //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        })
        // 加
        $number_plus.eq(i).on('click',function(){
            var $number_input=$number_sub.eq(i).next('input');
            // console.log($number_input.val())
            var number_inpidx=$number_input.val();

            number_inpidx++;
            if(number_inpidx>10){
                number_inpidx=10;
            }
            $number_input.val(number_inpidx);
            //xxxxxxxxxxxxxxxxx总价的变化xxxxxxxxxxxxxxxxxxxxxxxx
            
            var $tota=$number_plus.eq(i).parent('a').next('span');

            var $total=$number_plus.eq(i).parent('a').next('span').next('span');
            $total.html(number_inpidx*Number($tota.html())+'.00')
            
            //
            //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        })
    }
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxx car 删除xxxxxxxxxxxxxxxx
    var $car_delete=$('.car_mod_number>ul>span>.icon-lajixiang');
    var $car_div_move=$('.car_mod_img');
    for(let i=0;i<$car_delete.length;i++){
        $car_delete.eq(i).on('click',function(){
            $car_div_move.eq(i).remove();
        })
    }
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
})