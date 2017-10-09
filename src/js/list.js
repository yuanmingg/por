jQuery(function($){
    var $list_img=$('.list_img');
    var $list_ul=$('.list_img>ul');
    $.get('../api/goods.php',function(data,status){
        if(status == 'success'){
            var data=JSON.parse(data);
            $list_ul.html(data.map(function(item){
                return `<li>
                <a href="detail.html?id=${item.id}" class="${item.id}"><img src="${item.img}"/></a>
                <span><i>￥</i>${item.price}</span>
                <p>${item.name} 货号${item.id}</p>
                <p>${item.notice}</p>
                <div>
                    央广购物
                    <span>自营</span>
                </div>
                <div class="list_btn qufu">
                    <a href="javascript:;"><i class="icon-jiarugouwuche"></i>加入购物车</a>
                    <a href="javascript:;"><i class="icon-start"></i>收藏</a>
                    <a href="javascript:;"><img src="../img/list_s1.png" /></a>
                </div>
                </li>`
                //console.log(item);
            }).join(''))  
        }
        // 
       
        
        
    });
    
})