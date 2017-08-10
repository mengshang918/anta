$(function(){
	// var str = location.search;
	// console.log(str);
	function detailesshijian(data,id1,id2){
		console.log(data);
		var flag1 = false;
		var flag2 = false;
		$('#proColor li').each(function(){
			$(this).click(function(){
				if(!flag1){
					flag1=!flag1;
				}
			if(flag1&&flag2){
				$('.buttonbox input').css('display','block');
				$('.selectbox').removeClass('current');
			}
		})
		})
		$('.sizebox li').each(function(){
			$(this).click(function(){
				if(!flag2){
					flag2=!flag2
				}
			if(flag1&&flag2){
				$('.buttonbox input').css('display','block');
				$('.selectbox').removeClass('current');
			}
		})
		})
		var str = getCookie('cart');
		obj = str?JSON.parse(str):{num:0};
		var html = $('.cart-table tbody').html();
		$('.buttonbox input').click(function(){
			if($('#proColor li').hasClass('current')&&$('.sizebox li').hasClass('current')){
				$('.selectbox').removeClass('current');
				var attr = $('#proColor li.current img').attr('data-col');
				var size = $('.sizebox li.current a').text();
				if(attr in obj){
					if(size in obj[attr]){
						obj[attr][size]+=Number($('.pro-num').text());
					}else{
						obj[attr][size]=Number($('.pro-num').text());
					}
				}else{
					obj[attr] = {};
					obj[attr][size] = Number($('.pro-num').text());
				}
				obj.num += Number($('.pro-num').text());
				var str = JSON.stringify(obj);
				setCookie('cart',str,'7');
				if($(this).val()=='加入购物车'){
					var src = $('#proColor li.current img').attr('src');
					html+='<tr data-id="'+data[id1]+'">'+
                        '<td>'+
                            '<input type="checkbox" class="check-item checkbox" value="'+data[id1]+'">'+
                        '</td>'+
                        '<td><a href="/anta-11731380-1.html" target="_blank" class="right-sidebar-img"><img src="'+src+'" alt="'+data[id1]["goods-name"]+'"></a></td>'+
                        '<td><span class="right-sidebar-title">'+data[id1]["goods-name"]+'</span></td>'+
                        '<td>'+
                            '<div class="num-box"><a href="javascript:;" class="num-op num-minus hidden">-</a><span class="num">1</span><a href="javascript:;" class="num-op num-add hidden">+</a></div>'+
                        '</td>'+
                        '<td><a href="javascript:;" class="delete-item hidden">x</a><span class="num-price">'+data[id1]["goods-price"]+'</span></td>'+
                    '</tr>';
                    $('.cart-table tbody').html(html);
				}
				if($(this).val()=='立即购买'){
					location.href='cart.html';
				};
			}else{
				$('.selectbox').addClass('current');
				$('.buttonbox input').css('display','none');
			}
			
		})
		$('#num').click(function(){
			$(this).next().css('display','block');
		})
		$('#num').next().each(function() {
			$(this).find('li').click(function(){
				$('.pro-num').text($(this).text());
				$('#num').next().css('display','none');
			})
		});
		$('#imageMenu:first-child').css('display','block').siblings().css('display','none');
		// 放大镜
		$('.bigImg').hover(function(){
			$('#winSelector').css({'display':'block'});
			$('#bigView').css({'display':'block'});
		},function(){
			$('#winSelector').css({'display':'none'});
			$('#bigView').css({'display':'none'});
		})
		$('.bigImg').mousemove(function(e) {
			var x = e.pageX;
			var y = e.pageY;
			var movex = x-$('#winSelector').width()/2-$('.bigImg').offset().left;
			var movey = y-$('#winSelector').height()/2-$('.bigImg').offset().top;
			if(movex<=0){
				movex = 0;
			}
			if(movex>$(this).width()-$('#winSelector').width()){
				movex = $(this).width()-$('#winSelector').width();
			}
			if(movey<=0){
				movey = 0;
			}
			if(movey>$(this).height()-$('#winSelector').height()){
				movey=$(this).height()-$('#winSelector').height();
			}
			$('#winSelector').css({'left':movex,'top':movey});
			var ratex = (800-$('#bigView').width())/($(this).width()-$('#winSelector').width());
			var ratey = (800-$('#bigView').height())/($(this).height()-$('#winSelector').height());
			$('#bigView img').css({'left':-ratex*movex,'top':-ratey*movey})
		});

		//左侧列表点击切换图片事件
		$('#imageMenu ul li').click(function(){
			$(this).siblings().attr('id','');
			$(this).attr('id','onlickImg');
			$('.bigImg img').attr('src',$(this).find('img').attr('src').replace(/--w_220_h_220/,''));
			$('#bigView img').attr('src',$(this).find('img').attr('src').replace(/--w_220_h_220/,''));
		})
		//左侧上下按钮样式(是否可用)
		var len = $('#imageMenu ul li').length;
		if(len>5){
			$('.smallImgUp').removeClass('disabled');
			$('.smallImgDown').removeClass('disabled');
		}else{
			$('.smallImgUp').addClass('disabled');
			$('.smallImgDown').addClass('disabled');
		}
		//右侧样式选择
		$('#proColor li').click(function(){
			var _this = $(this);
			$(this).addClass('current').siblings().removeClass('current');
			$('.bigImg img').attr('src',$(this).find('img').attr('src').replace(/--w_220_h_220/,''));
			$('#bigView img').attr('src',$(this).find('img').attr('src').replace(/--w_220_h_220/,''));
			$('#colorname span').text($(this).find('img').attr('title'));
			var str = $(this).find('img').attr("data-col").split('_')[1];
			var id1 = $(this).find('img').attr("data-col").split('_')[0];
			var html2 = '';
			$.get('json/prolist.json',function(data){
				for(var i=0;i<data[id1]["goods-classes"][str]["allpic"].length;i++){
					html2+='<li class="i" id="onlickImg"><img src="'+data[id1]["goods-classes"][str]["allpic"][i]["src"]+'" width="98" height="98" class="loading"></li>'
				}
				$('#imageMenu ul').html(html2);
				$('#imageMenu ul li').click(function(){
					$(this).siblings().attr('id','');
					$(this).attr('id','onlickImg');
					$('.bigImg img').attr('src',$(this).find('img').attr('src').replace(/--w_220_h_220/,''));
					$('#bigView img').attr('src',$(this).find('img').attr('src').replace(/--w_220_h_220/,''));
				})
			})
		})
		$('#color-size ul li').click(function(){
			$(this).addClass('current').siblings().removeClass('current');
		})
		 $('#tj_addcart').click(function(){
        var str = getCookie('cart');
        var obj = str ? JSON.parse(str) : { num: 0 };
	    $('.header_t ul li:last-child a').text('购物车('+obj.num+')件');

    })
	}
	$.get('json/prolist.json',function(data){
		var id = location.search.split('=')[1];
		var id1 = id.split('_')[0];
		var id2 = id.split('_')[1];
		console.log(id1);
		console.log(id2);
		var html1 = '';
		html1 = id2==undefined?data[id1]["default"]:data[id1]["goods-classes"][id2]["big-src"];
		$('#bigView img').attr('src',html1);
		$('#midimg').attr('src',html1);
		var html2='';
		var arr = [];
		if(id2==undefined){
		 　　for(var i=0;i<data[id1]["default-img"].length;i++){
				html2+='<li class="i" id="onlickImg"><img src="'+data[id1]["default-img"][i]["src"]+'" width="98" height="98" class="loading"></li>';
		 }
		}else{
			for(var i=0;i<data[id1]["goods-classes"][id2]["allpic"].length;i++){
				html2+='<li class="i" id="onlickImg"><img src="'+data[id1]["goods-classes"][id2]["allpic"][i]["src"]+'" width="98" height="98" class="loading"></li>'
			}
		}
		$('#imageMenu ul').attr('data-col',id);
		$('#imageMenu ul').html(html2);
		$('.pro-detail-hd .fl').text(data[id1]["goods-name"]);
		$('#sn').text(id1);
		$('.current_price').text(data[id1]["goods-price"]);
		var html3 = '';
		for(var attr in data[id1]["goods-classes"]){
			html3+='<li class="color_code ">'+
            '<img title="'+data[id1]["goods-classes"][attr]["title"]+'" width="60" height="60" src="'+data[id1]["goods-classes"][attr]["allpic"][0]["src"]+'" class="loading" data-col="'+data[id1]["goods-classes"][attr]["data-col"]+'">'+
            '<i></i>'+
        '</li>';
		}
		$('#proColor').html(html3);
		// $('#proColor').html(html3);
		// $('.detail-ctr').html(html);
		detailesshijian(data,id1,id2);
	})
})