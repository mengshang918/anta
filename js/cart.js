$.get('json/prolist.json', function(data) {
    var str = getCookie('cart');
    var obj = str ? JSON.parse(str) : { num: 0 };
    var html = '';
    
    function cartEmpty(){
        if(obj.num==0){
            $('.w_cart_inner').css('display','none');
            $('.cart-empty').css('display','block');
        }else{
            $('.w_cart_inner').css('display','block');
            $('.cart-empty').css('display','none');
        }
         $(this).click(function(){
        var str = getCookie('cart');
        var obj = str ? JSON.parse(str) : { num: 0 };
        console.log(1);
        $('.header_t ul li:last-child a').text('购物车('+obj.num+')件');
    })
    }
    cartEmpty();
    for (var attr in obj) {
        if (attr != 'num') {
            var id1 = attr.split('_')[0];
            var id2 = attr.split('_')[1];
            for (var size in obj[attr]) {
                // console.log(size);
                html = '<tr class="item">' +
                    '<td align="center">' +
                    '<input class="checkbox Jcki" type="checkbox" id="ck_2024061" name="checkItem" value="6901849093625" data="2024061">' +
                    '</td>' +
                    '<td class="p-numbered">' + id1 + '</td>' +
                    '<td class="p-img">' +
                    '<a href="javascript:;" class="in_b">' +
                    '<img src="' + data[id1]["goods-classes"][id2]['big-src'] + '" width="50" height="50" alt="' + data[id1]["goods-name"] + '" class="vm"></a>' +
                    '</td>' +
                    '<td class="p-name">' +
                    '<h2><a href="details.html?id='+attr+'" target="_blank" title="' + data[id1]["goods-name"] + '">' + data[id1]["goods-name"] + '-' + id1 + '</a></h2>' +
                    '<span class="promise411">颜色:' + data[id1]["goods-classes"][id2]["title"] + ' 尺码:' + size + '</span>' +
                    '</td>' +
                    '<td class="p-price">' +
                    '<span class="u_price" style="text-decoration: line-through;">¥399.00</span> <span class="price">' + data[id1]["goods-price"] + '</span>' +
                    '</td>' +
                    '<td class="p-quantity">' +
                    '<div class="quantity-form" data-bind="">' +
                    '<a class="decrement">-</a>' +
                    '<input type="text" class="quantity-text" value="' + obj[attr][size] + '" id="'+attr+'='+size+'">' +
                    '<a class="increment">+</a>' +
                    '</div>' +
                    '</td>' +
                    '<td class="p-inventory">' + Number(data[id1]["goods-price"]) * Number(obj[attr][size]) + '</td>' +
                    '<td class="p-remove"><a class="cart-remove" style="cursor: pointer;">删除</a></td>' +
                    '</tr>' + html;
            }
        }
    }
    console.log(obj)
    $('tbody').html(html);
    // 总价函数
    function total(){
	    var totalPrice = 0;
	    $('.item .p-inventory').each(function(){
	    	totalPrice+=Number($(this).text());
	    })
	    $('#jifen span').text(totalPrice);
	    $('#Jfinal').text('￥'+totalPrice);
    }
    total();
    // on事件委托点击加号
    $('tbody').on('click','.increment',function(evt){
    	var id3 = $(evt.target).prev().attr('id').split('=')[0];
    	var id4 = $(evt.target).prev().attr('id').split('=')[1];
    	var id5 = id3.split('_')[0]
    	var id6 = id3.split('_')[1]
    	obj[id3][id4]++;
    	obj.num++;
    	var str = JSON.stringify(obj);
    	setCookie('cart',str,7);
    	$(this).prev().val(obj[id3][id4]);
    	$(this).parent().parent().next().text(Number(data[id5]["goods-price"]) * obj[id3][id4]);
   		total();
        cartEmpty();
   		console.log(obj);
    })
    // 点击减号
     $('tbody').on('click','.decrement',function(evt){
     	var id3 = $(evt.target).next().attr('id').split('=')[0];
     	var id4 = $(evt.target).next().attr('id').split('=')[1];
     	var id5 = id3.split('_')[0]
     	var id6 = id3.split('_')[1]
     	obj[id3][id4]--;
     	obj.num--;
     	if($(this).next().val()==1){
     		delete obj[id3][id4];
     		$(this).parents('tr').remove();
     	}
     	var str = JSON.stringify(obj);
     	setCookie('cart',str,7);
     	$(this).next().val(obj[id3][id4]);
     	$(this).parent().parent().next().text(Number(data[id5]["goods-price"]) * obj[id3][id4]);
        total();
        cartEmpty();
        console.log(obj);
     })
     // 点击删除
     $('tbody').on('click','.cart-remove',function(evt){
     	// console.log($(evt.target).parent().parent().has('.p-quantity'))
     	var id3 = $(evt.target).parent().prev().prev().find('input').attr('id').split('=')[0];
     	var id4 = $(evt.target).parent().prev().prev().find('input').attr('id').split('=')[1];
     	console.log($(evt.target).parent().prev().prev().find('input'))
     	obj.num = obj.num-Number($(evt.target).parent().prev().prev().find('input').val());
     	delete obj[id3][id4];
     	$(this).parents('tr').remove();
     	var str = JSON.stringify(obj);
     	setCookie('cart',str,7);
        total();
        cartEmpty();
        console.log(obj)
     })
     // 全选按钮
     $('#toggle-checkboxes').click(function(){
     	$('body tr:first-child input')
     	if($(this).prop('checked')){
     		$('body tr td:first-child input').attr('checked','checked');
     	}else{
     		$('body tr td:first-child input').removeAttr('checked');
     	}
     })
     $('.delete a:first-child').click(function(){
     	$('body tr td:first-child input:checked').parent().siblings().find('.cart-remove').each(function(){
     		$(this).click();
     	});
     	$('body tr td:first-child input:checked').parent().parent().remove();
        cartEmpty();
     })
     $('.delete a:last-child').click(function(){
     	$('body tr td:first-child input').parent().siblings().find('.cart-remove').each(function(){
     		$(this).click();
     	});
     	$('body').html();
        cartEmpty();
     	console.log(obj)
     })
     // if(){

     // }
})