$(function(){
	$('.banner .lt').css('left',$('.banner ul a img').outerWidth()/2-$(window).width()/2);
	$('.banner .gt').css('right',$('.banner ul a img').outerWidth()/2-$(window).width()/2);
	// banner轮播图
	$('.banner ul li').eq(0).clone(true).appendTo(".banner ul");
	$('.banner ul').css('width',$('.banner ul a img').outerWidth()*$('.banner ul li').length);
	var timer = null;
	var len = $('.banner ul li').length;
	var perWidth = $('.banner ul li').outerWidth();
	var i = 0;
	timer = setInterval(function(){i++;move();},2000);
	$('.banner .lt').on('click',function(){clearInterval(timer);i--;move();});
	$('.banner .gt').on('click',function(){clearInterval(timer);i++;move();});
	$('.banner').hover(
		function(){clearInterval(timer);},
		function(){
			timer = setInterval(function(){i++;move();},2000);
		});
	$('.bannerlist span').on('mouseover',function(){
		clearInterval(timer);
	})
	$('.banner .bannerlist span').on('click',function(){
		clearInterval(timer);
		i = $(this).index();
		move();
	});
	function move(){
		if(i==len){
			$('.banner ul').css('left',0);
			i = 1;
		}
		if(i==-1){
			$('.banner ul').css('left',-perWidth*(len-1));
			i=len-2;
		}
		$('.banner ul').stop().animate({left:-perWidth*i},500,function(){
			if(i==1){
				$('#wenzi').css('display','block').stop().animate({'left':0},500);
			}else{
				$('#wenzi').css({'display':'none','left':-40});
			}
		});
		$('.banner .bannerlist span').eq(i%(len-1)).addClass("cur").siblings().removeClass("cur");
	}
// pdlunbo
	$('.pdslide').each(function(){
		$(this).find('ul li:eq(0)').clone(true).appendTo($(this).find('ul'))
	});
	var m = 0;
	var j = 0;
	var l = $('.pdslide ul li').length/2;
	var pw = $('.pdslide ul li').width();
	$('.pdslide ul').css('width',l*pw);
	var timer1 = null;
	var timer2 = null;
	timer1 = setInterval(function(){m++;pdmove()},2000);
	timer2 = setInterval(function(){j++;pdmove1()},3000);
	$('.pdslide .lt').eq(0).on('click',function(){clearInterval(timer1);m--;pdmove();});
	$('.pdslide .lt').eq(1).on('click',function(){clearInterval(timer2);j--;pdmove1();});
	$('.pdslide .gt').eq(0).on('click',function(){clearInterval(timer1);m++;pdmove();});
	$('.pdslide .gt').eq(1).on('click',function(){clearInterval(timer2);j++;pdmove1();});
	$('.pdslide').eq(0).hover(function(){clearInterval(timer1);$('.pdslide .lt').eq(0).css('display','block');$('.pdslide .gt').eq(0).css('display','block');},function(){timer1 = setInterval(function(){m++;pdmove()},4000);$('.pdslide .lt').eq(0).css('display','none');$('.pdslide .gt').eq(0).css('display','none');})
	$('.pdslide').eq(1).hover(function(){clearInterval(timer2);$('.pdslide .lt').eq(1).css('display','block');$('.pdslide .gt').eq(1).css('display','block');},function(){timer2 = setInterval(function(){j++;pdmove1()},4000);$('.pdslide .lt').eq(1).css('display','none');$('.pdslide .gt').eq(1).css('display','none');})
	function pdmove(){
		if(m==l){
			m=1;
			$('.pdslide ul').eq(0).css('left',0);
		}if(m==-1){
			m=l-2;
			$('.pdslide ul').eq(0).css('left',-pw*(l-1));
		}
		$('.pdslide ul').eq(0).stop().animate({'left':-pw*m},500)
		$('.pdslide:eq(0) .pdnav span').eq(m%(l-1)).addClass('cur').siblings().removeClass('cur');
	}
	function pdmove1(){
		if(j==l){
			j=1;
			$('.pdslide ul').eq(1).css('left',0);
		}if(j==-1){
			j=l-2;
			$('.pdslide ul').eq(1).css('left',-pw*(l-1));
		}
		$('.pdslide ul').eq(1).stop().animate({'left':-pw*j},500)
		$('.pdslide:eq(1) .pdnav span').eq(j%(l-1)).addClass('cur').siblings().removeClass('cur');
	}
	
	function produ_next_prev(){
		$('.pd-classes ul').each(function(){
			var len = $(this).find('li').length;
			if($(this).find('li').length<=5){
				$(this).prev().css('display','none').end().next().css('display','none');
				$(this).find('li').addClass('current');
				$(this).find('li').each(function(){
					$(this).mouseover(function() {
						console.log($(this).find('img'));
						console.log($(this).parent().parent().parent().find('.produ-img img').attr('src'));
						$(this).parent().parent().parent().find('.produ-img img').attr('src',$(this).find('img').attr('src'));
					});
				})
			}else{
				var _this = $(this);
				var q=0;
				move();
				$(this).css({width:180,overflow:'hidden'});
				$(this).prev().click(function(){
					q--;
					if(q==-1){
						q=0;
					}
					move();
				})
				$(this).next().click(function(){
					q++;
					if(q+5>=_this.find('li').length){
										// console.log(111);
										// console.log(_this.find('li').length);
										// console.log(len);
										q = (_this.find('li').length-5);
									}
									// console.log(q);
					move();
				})
				function move(){
					$(_this).find('li').each(function(){
						$(this).addClass("hidden");
						$(this).removeClass("current");
					})
					for(var m=q;m<(5+q);m++){
						$(_this).find('li').eq(m).removeClass("hidden");
						// $(_this).find('li').eq(m).css('display','')
						$(_this).find('li').eq(m).addClass("current");
						$(_this).find('li').each(function(){
							$(this).mouseover(function() {
								_this.parent().parent().find('.produ-img img').attr('src',$(this).find('img').attr('src'));
							});
						})
					}
				}
			}
		})
	}
	// 加载json显示produ
	$.get('json/index_pro.json',function(data){
		// var lll = document.getElementById('produ');
		var html = template('produ',data);
		$('.produlist').html(html);
		produ_next_prev();
	})

})