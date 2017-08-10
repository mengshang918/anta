$(function(){
	var str = getCookie('cart');
    var obj = str ? JSON.parse(str) : { num: 0 };
    console.log(obj.num);
    var html = '';
    $.get('json/prolist.json',function(data){
    	for (var attr in obj) {
    	    if (attr != 'num') {
    	        var id1 = attr.split('_')[0];
    	        var id2 = attr.split('_')[1];
    	        for (var size in obj[attr]) {
    	            // console.log(size);
    	            html = '<tr data-id="'+data[id1]+'">'+
    	                    '<td>'+
    	                        '<input type="checkbox" class="check-item checkbox" value="'+data[id1]+'">'+
    	                    '</td>'+
    	                    '<td><a href="/anta-11731380-1.html" target="_blank" class="right-sidebar-img"><img src="'+data[id1]["goods-classes"][id2]["src"]+'" alt="'+data[id1]["goods-name"]+'"></a></td>'+
    	                    '<td><span class="right-sidebar-title">'+data[id1]["goods-name"]+'</span></td>'+
    	                    '<td>'+
    	                        '<div class="num-box"><a href="javascript:;" class="num-op num-minus hidden">-</a><span class="num">1</span><a href="javascript:;" class="num-op num-add hidden">+</a></div>'+
    	                    '</td>'+
    	                    '<td><a href="javascript:;" class="delete-item hidden">x</a><span class="num-price">'+data[id1]["goods-price"]+'</span></td>'+
    	                '</tr>'+html;
    	        }
    	    }
    	}
    	if($('.cart-table tbody')){
    		$('.cart-table tbody').html(html);
    	}
    })
    $('.header_t ul li:last-child a').text('购物车('+obj.num+')件');
	$('.right-sidebar .account-box').css('bottom',50);
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		if(scroll>$('.header').height()){
			$('.header_b').addClass("fixed-header");
			$('.right-sidebar .go-to-top').css('display','block');
			$('.right-sidebar').css('top',0);
			$('.right-sidebar .account-box').css('bottom',0);
		}else{
			$('.header_b').removeClass("fixed-header");
			$('.right-sidebar .go-to-top').css('display','none');
			$('.right-sidebar').css('top','50px');
			$('.right-sidebar .account-box').css('bottom',50);
		}
	});
	$('.go-to-top').click(function(){
		$('html,body').animate({'scrollTop':0},1000);});
	var scroll = $(document).scrollTop();
	if(scroll>$('.header').height()){
		$('.right-sidebar .go-to-top').css('display','block');
		$('.right-sidebar').css('top',0);
	}


	var index = 0;
	var arr = [];
	$('.right-sidebar .canclick').each(function(){
		$(this).click(function(){

			var r = parseInt($('.right-sidebar').css('right'));
			index = $(this).index();
			console.log(index);
			arr.push(index);
			if(r!=0){
				$('.right-sidebar').stop().animate({'right':0},1000);
				$('.sidebar-box .sidebar-box-item').eq(index-1).removeClass('hide').siblings().addClass('hide');	
			}
			if(r==0){
				if(arr[arr.length-1]==arr[arr.length-2]){
					$('.right-sidebar').stop().animate({'right':-280},1000);
				}else{
					$('.sidebar-box .sidebar-box-item').eq(index-1).removeClass('hide').siblings().addClass('hide');
				}
			}
		})
	})

});

