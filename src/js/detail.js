jQuery(function($){
    var params = location.search;
    var str=params.substr(1);
    var str=str.split('=');
    var id=str[1];

    var detail_p=$('.detail>p');
    var detail=$('.detail');
    $.get('../api/detail.php?id='+id,function(data,status){
        if(status == 'success'){
            var data=JSON.parse(data);
            // 大图
            detail_p.html(data.map(function(item){
                return `<img src=${item.img}>`;
            }).join(''));
            // 详情
            var $deta_span=$('.deta_span');
            $deta_span.html(data.map(function(item){
                return `
                        <span>${item.name} 货号${item.id}</span><br/>
                        <span>${item.notice}</span>
                `;
            }).join(''));

            var $deta_cenP=$('.deta_cenP>p');
            $deta_cenP.html(data.map(function(item){
                return `
                        <span>现价</span>
                        <span><i>￥</i>${item.price}</span>
                        赠送购物金：3.5
                        <img src="../img/deta_cen1.png"/>
                `;
            }).join(''));
            var deta_color=document.querySelector('.deta_color>p');
            // console.log(deta_color);
            $(deta_color).html(data.map(function(item){
                return `
                        颜色
                       <a href="#">
                            <img src="${item.img}"/>
                            ${item.color}
                            <i>
                                <img src="../img/deta_color1.png"/>
                            </i>
                        </a>
                `;
            }).join(''));

        }
        var detail_copy=$('.detail>p>img');
        detail_copy=detail_copy.clone();
        detail_copy.prependTo(detail);
    })
    // 数量加减
    var $deta_sub=$('.deta_sub');
    var $deta_plus=$('.deta_plus');
    var $deta_input=$deta_sub.next('input');
    var deta_inpidx=1;
    // 减
    $deta_sub.on('click',function(){
        deta_inpidx--;
        if(deta_inpidx<1){
            deta_inpidx=1;
        }
        $deta_input.val(deta_inpidx);
    })
    // 加
    $deta_plus.on('click',function(){
        deta_inpidx++;
        if(deta_inpidx>10){
            deta_inpidx=10;
        }
        $deta_input.val(deta_inpidx);
    })
    // 获取加入购物车的数量
    var $deta_btn=$('.deta_btn>a');
    $deta_btn.eq(1).on('click',function(){
       console.log($deta_input.val()); 
    })
    
    // 获取数据传输至购物车
    // 
})