<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="style/css/header_footer.css">
</head>
<body>
		<div class="header_t clearfix">
			<a href="index.html" class="logo"></a>
			<p>
				<!-- <a href="login.html">登录</a>|
				<a href="reg1.html">注册</a> -->
<?php
// isset(xx) 测试是否登录了
session_start();
if(isset($_SESSION['user_account'])){
echo '您好！ ' . $_SESSION['user_account'].'<a href="logout.php" style="text-decoration: underline;color:#d00;">退出登录</a>';
}
else{
echo '<a href="login.html">登录</a>|
				<a href="reg1.html">注册</a>';
}
//$conn->close();
?>
			</p>
			<ul>
				<li><a href="###">我的安踏</a>|</li>
				<li><a href="###">品牌官网</a>|</li>
				<li><a href="###">手机商城</a>|
					<div class="mobile-shop" data-info=""><img src="images/daohang/index_iqr.jpg"></div>
				</li>
				<li><a href="###">企业团购</a>|</li>
				<li><a href="cart.html">购物车(0)件</a></li>
			</ul>
		</div>
		<div class="header_b">
			<div class="clearfix">
				<div class="all-styles">
					<a href="###" title="查找所有商品分类" id="goodslist">所有商品分类</a>
					<ul class="all-styles-tab">
					    <li>
					        <h3><a href="produlist.html" title="安踏男鞋" target="_blank">男鞋</a></h3>
					        <p>
					            <a href="produlist.html" title="男子跑鞋" target="_blank" class="style">跑步鞋</a>
					            <a href="produlist.html" title="男子篮球鞋" target="_blank" class="style">篮球鞋</a>
					            <a href="produlist.html" title="男子休闲鞋" target="_blank" class="style">休闲鞋</a>
					            <a href="produlist.html" title="板鞋" target="_blank" class="style">板鞋</a>
					        </p>
					        <p>
					            <a href="produlist.html" title="帆布鞋" target="_blank" class="style">帆布鞋</a>
					            <a href="produlist.html" title="男子足球鞋" target="_blank" class="style">足球鞋</a>
					            <a href="produlist.html" title="男子综训鞋" target="_blank" class="style">综训鞋</a>
					        </p>
					        <p>
					            <a href="produlist.html" title="加大码鞋" target="_blank" class="style">加大码鞋</a>
					        </p>
					    </li>
					    <li>
					        <h3><a href="produlist.html" title="安踏女鞋" target="_blank">女鞋</a></h3>
					        <p>
					            <a href="produlist.html" title="女子跑鞋" target="_blank" class="style">跑步鞋</a>
					            <a href="produlist.html" title="女子综训鞋" target="_blank" class="style">综训鞋</a>
					            <a href="produlist.html" title="女子休闲鞋" target="_blank" class="style">休闲鞋</a>
					            <a href="produlist.html" title="板鞋" target="_blank" class="style">板鞋</a></p>
					        <p>
					            <a href="produlist.html" title="帆布鞋" target="_blank" class="style">帆布鞋</a>
					            <a href="produlist.html" title="女鞋新品" target="_blank" class="style">2017新品</a></p>
					    </li>
					    <li>
					        <h3><a href="produlist.html" title="安踏男装" target="_blank">男装</a></h3>
					        <p>
					            <a href="produlist.html" title="男子" target="_blank" class="style">T恤</a>
					            <a href="produlist.html" title="男子短裤/五分裤" target="_blank">短裤/五分裤</a>
					            <a href="produlist.html" title="男子梭织外套" target="_blank" class="style">梭织外套</a></p>
					        <p>
					            <a href="produlist.html" title="男子针织外套" target="_blank">针织外套</a>
					            <a href="produlist.html" title="男子" target="_blank" class="style">运动长裤</a>
					            <a href="produlist.html" title="2017新品" target="_blank" class="style">2017新品</a>
					        </p>
					        <div class="style-tab-content">
					            <ul>
					                <li>
					                    <a href="produlist.html" title="男子针织外套" target="_blank">针织外套</a>
					                    <a href="produlist.html" title="男子梭织外套" target="_blank">梭织外套</a>
					                    <a href="produlist.html" title="男子卫衣/编织衫/长T" target="_blank">卫衣/长T</a>
					                    <a href="produlist.html" title="男子POLO衫" target="_blank">POLO衫</a></li>
					                <li>
					                    <a href="produlist.html" title="男子针织长裤" target="_blank">针织长裤</a>
					                    <a href="produlist.html" title="男子梭织长裤" target="_blank">梭织长裤</a>
					                    <a href="produlist.html" title="男子七分裤" target="_blank">七分裤</a>
					                    <a href="produlist.html" title="男子短裤/五分裤" target="_blank">短裤/五分裤</a></li>
					                <li>
					                    <a href="produlist.html" title="男子针织运动套装" target="_blank">运动套装</a>
					                    <a href="produlist.html" title="男子篮球/足球比赛服" target="_blank">篮球套/足球套/比赛服</a>
					            </ul>
					            <div class="style-ad">
					                <h4>男装新品</h4>
					                <a href="produlist.html" title="男人就该较劲" target="_blank" data-info=""><img src="images/daohang/xp_12081.jpg"></a>
					            </div>
					        </div>
					        </li>
					      <li>
					        <h3><a href="produlist.html" title="安踏女装" target="_blank">女装</a></h3>
					        <p>
					            <a href="produlist.html" title="T恤" target="_blank" class="style">T恤</a>
					            <a href="produlist.html" title="女子短裤/七分裤" target="_blank">短裤/七分裤</a>
					            <a href="produlist.html" title="女子梭织外套" target="_blank">梭织外套</a>
					        </p>
					        <p>
					            <a href="produlist.html" title="女子卫衣" target="_blank" class="style">卫衣</a>
					            <a href="produlist.html" title="女子长裤" target="_blank" class="style">运动长裤</a>
					            <a href="produlist.html" title="2017新品" target="_blank" class="style">2017新品</a>
					        </p>
					        <div class="style-tab-content">
					            <ul>
					                <li>
					                    <a href="produlist.html" title="女子针织外套" target="_blank">针织外套</a>
					                    <a href="produlist.html" title="女子梭织外套" target="_blank">梭织外套</a>
					                    <a href="produlist.html" title="女子卫衣/编织衫/长T" target="_blank">卫衣/长T</a>
					                    <a href="produlist.html" title="女子短袖POLO衫" target="_blank">POLO衫</a>
					                    <a href="produlist.html" title="女子运动bra背心" target="_blank">运动bra</a></li>
					                <li>
					                    <a href="produlist.html" title="女子针织长裤/梭织长裤" target="_blank">运动长裤</a>
					                    <a href="produlist.html" title="女子短裤/七分裤" target="_blank">短裤/七分裤</a></li>
					                <li>
					                    <a href="produlist.html" title="女子针织运动套装" target="_blank">针织运动套装</a>
					                    <a href="produlist.htmlwww.anta.cn/list/f14-j2-k2" title="女子户外两件套" target="_blank">户外两件套</a></li>
					            </ul>
					            <div class="style-ad">
					                <h4>女装新品</h4>
					                <a href="produlist.html" title="运动让你爱自己" target="_blank" data-info=""><img src="images/daohang/xp_12082.jpg"></a>
					            </div>
					        </div>
					    </li>
					    <li>
					        <h3><a href="produlist.html" title="安踏儿童" target="_blank">儿童</a></h3>
					        <p>
					            <a href="produlist.html" title="男童鞋" target="_blank" class="style">男童鞋</a>
					            <a href="produlist.html" title="女童鞋" target="_blank" class="style">女童鞋</a>
					            <a href="produlist.html" title="男童装" target="_blank" class="style">男童装</a>
					            <a href="produlist.html" title="女童装" target="_blank" class="style">女童装</a></p>
					        <p>
					            <a href="produlist.html" title="跑步" target="_blank" class="style">跑步</a>
					            <a href="produlist.html" title="篮球" target="_blank" class="style">篮球</a>
					            <a href="produlist.html" title="足球" target="_blank" class="style">足球</a>
					            <a href="produlist.html" title="儿童配件" target="_blank" class="style">配件</a>
					            <a href="produlist.html" title="小童系列" target="_blank" class="style">小童</a></p>
					    </li>
					    <li>
					        <h3><a href="produlist.htmlwww.anta.cn/list/e3-k2" title="安踏配件" target="_blank">配件</a></h3>
					        <p>
					            <a href="produlist.html" class="style" title="男袜" target="_blank">男袜</a>
					            <a href="produlist.html" class="style" title="女袜" target="_blank">女袜</a>
					            <a href="produlist.html" class="style" title="儿童袜" target="_blank">儿童袜</a>
					            <a href="produlist.html" class="style" title="运动内裤" target="_blank">运动内裤</a></p>
					        <p>
					            <a href="produlist.html" class="style" title="包类" target="_blank">双肩包</a>
					            <a href="produlist.html" class="style" title="包类" target="_blank">跨包</a>
					            <a href="produlist.html" class="style" title="包类" target="_blank">腰包</a>
					            <a href="produlist.html" class="style" title="篮球/足球" target="_blank">篮球/足球</a></p>
					    </li>
					</ul>
				</div>
				<ul class="header_c">
					<li>
					<a href="index.html">首页</a>
					</li>
					<li>
					<a href="produlist.html" title="跑步系列">跑步</a>
					<div class="item-box">
					    <a class="line-nav-ad" href="produlist.html" target="_blank" rel="nofollow" data-info=""><img src="images/daohang/pb_1013.jpg"></a>
					    <ul>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="男子跑步">男子跑步</a></h4>
					            <a href="produlist.html" target="_blank" title="男子跑鞋">跑步鞋</a>
					            <a href="produlist.html" target="_blank" title="男子跑服">跑步服</a>
					            <a href="produlist.html" target="_blank" title="加大码跑鞋">加大码跑鞋</a>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="女子跑步">女子跑步</a></h4>
					            <a href="produlist.html" target="_blank" title="女子跑鞋">跑步鞋</a>
					            <a href="produlist.html" target="_blank" title="女子跑服">跑步服</a>
					        </li>
					        <li>
					            <h4><a href="produlist.html" title="跑步运动科技">跑步科技</a></h4>
					            <a href="produlist.html" target="_blank" title="弹力胶科技">弹力胶缓震</a>
					            <a href="produlist.html" target="_blank" title="透气呼吸网">透气呼吸网</a>
					            <a href="produlist.html" target="_blank" title="气垫科技">气垫科技</a>
					        </li>
					        <li>
					            <h4>系列推荐</h4>
					            <a href="produlist.html" target="_blank" title="儿童跑步系列">儿童跑步系列</a>
					            <a href="produlist.html" title="跑步系列新品" target="_blank">跑步新品</a>
					        </li>
					        <li>
					            <h4>优惠活动</h4>
					            <a href="produlist.html" target="_blank" title="关注商城微信领取50元专属优惠券！">领券满298减20 满398减30</a>
					        </li>
					    </ul>
					</div>
					</li>
					<li>
					<a href="produlist.html" title="篮球系列">篮球</a>
					<div class="item-box">
					    <a class="line-nav-ad" href="produlist.html" target="_blank" rel="nofollow" data-info=""><img src="images/daohang/lanqiu1.jpg"></a>
					    <ul>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="篮球鞋">篮球鞋</a></h4>
					            <a href="produlist.html" target="_blank" title="男子篮球鞋">篮球鞋</a>
					            <a href="produlist.html" target="_blank" title="加大码篮球鞋">加大码篮球鞋</a>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="篮球系列服装">篮球服</a></h4>
					            <a href="produlist.html" target="_blank" title="篮球上衣">上衣</a>
					            <a href="produlist.html" target="_blank" title="裤子">裤子</a>
					            <a href="produlist.html" target="_blank" title="男子篮球鞋">套装/比赛服</a>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="篮球运动科技">运动科技</a></h4>
					            <a href="produlist.html" title="五驱掌控科技" target="_blank">五驱掌控</a>
					            <a href="produlist.html" target="_blank" title="缓震弹力胶">弹力胶科技</a>
					        </li>
					        <li>
					            <h4>系列推荐</h4>
					            <a href="produlist.html" title="儿童篮球系列" target="_blank">儿童篮球系列</a>
					            <a href="produlist.html" title="篮球系列新品" target="_blank">篮球新品</a>
					            <a href="produlist.html" title="汤普森系列" target="_blank">汤普森系列</a>
					        </li>
					        <li>
					            <h4>优惠活动</h4>
					            <a href="produlist.html" target="_blank" title="关注商城微信领取50元专属优惠券！">领券满298减20 满398减30</a>
					        </li>
					    </ul>
					</div>
					</li>
					<li>
					<a href="produlist.html" title="足球系列">足球</a>
					<div class="item-box">
					    <a class="line-nav-ad" href="produlist.html" target="_blank" rel="nofollow" data-info=""><img src="images/daohang/zq_1013.jpg"></a>
					    <ul>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="安踏足球鞋">足球鞋</a></h4>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="安踏足球系列服装">足球服</a></h4>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="安踏足球系列配件">足球配件</a></h4>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="足球运动科技">运动科技</a></h4>
					        </li>
					        <li>
					            <h4>系列推荐</h4>
					            <a href="produlist.html" title="安踏儿童足球系列" target="_blank">儿童足球系列</a>
					            <a href="produlist.html" title="足球系列新品推荐" target="_blank">足球新品</a>
					        </li>
					        <li>
					            <h4>优惠活动</h4>
					            <a href="produlist.html" target="_blank" title="关注商城微信领取50元专属优惠券！">领券满298减20 满398减30</a>
					        </li>
					    </ul>
					</div>
					</li>
					<li>
					<a href="produlist.html" title="综训健身">健身</a>
					<div class="item-box">
					    <a class="line-nav-ad" href="produlist.html" target="_blank" rel="nofollow" data-info=""><img src="images/daohang/sz_1013.jpg"></a>
					    <ul>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="男子健身">男子健身</a></h4>
					
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="女子综训">女子健身</a></h4>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="综训运动科技">运动科技</a></h4>
					            <a href="produlist.html" target="_blank" title="适足科技">适足科技</a>
					            <a href="produlist.html" target="_blank" title="弹力胶缓震">弹力胶缓震</a>
					        </li>
					        <li>
					            <h4>系列推荐</h4>
					            <a href="produlist.html" target="_blank" title="儿童综训系列">儿童综训系列</a>
					            <a href="produlist.html" target="_blank" title="综训系列新品">健身新品</a>
					        </li>
					        <li>
					            <h4>优惠活动</h4>
					            <a href="produlist.html" target="_blank" title="关注商城微信领取50元专属优惠券！">领券满298减20 满398减30</a>
					        </li>
					    </ul>
					</div>
					</li>
					<li>
					<a href="produlist.html" title="生活系列">休闲</a>
					<div class="item-box">
					    <a class="line-nav-ad" href="produlist.html" target="_blank" rel="nofollow" data-info=""><img src="images/daohang/xx_10133.jpg"></a>
					    <ul>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="男子生活">男子生活</a></h4>
					            <p>鞋：
					                <a href="produlist.html" target="_blank" title="男子休闲鞋">休闲鞋</a>
					                <a href="produlist.html" target="_blank" title="男子板鞋">板鞋</a>
					                <a href="produlist.html" -k2="" target="_blank" title="帆布硫化鞋">帆布硫化鞋</a>
					            </p>
					            <p>服：
					                <a href="produlist.html" target="_blank" title="男子休闲运动上装/套装">衣服</a>
					                <a href="produlist.html" target="_blank" title="男子休闲运动下装">裤子</a></p>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="女子生活">女子生活</a></h4>
					            <p>鞋：
					                <a href="produlist.html" target="_blank" title="女子休闲鞋">休闲鞋</a>
					                <a href="produlist.html" target="_blank" title="女子板鞋">板鞋</a>
					                <a href="produlist.html" target="_blank" title="帆布硫化鞋">帆布硫化鞋</a>
					            </p>
					            <p>服：
					                <a href="produlist.html">衣服</a>
					                <a href="produlist.html" target="_blank" title="女子休闲运动下装">裤子</a></p>
					        </li>
					        <li>
					            <h4>系列推荐</h4>
					            <a href="produlist.html" title="儿童生活系列" target="_blank">儿童生活系列</a>
					            <a href="produlist.html" title="生活系列新品" target="_blank">生活系列新品</a>
					        </li>
					        <li>
					            <h4>优惠活动</h4>
					            <a href="produlist.html" target="_blank" title="关注商城微信领取50元专属优惠券！">领券满298减20 满398减30</a>
					        </li>
					    </ul>
					</div>
					</li>
					<li>
					<a href="produlist.html" title="配件系列">配件</a>
					<div class="item-box" style="left:-152px;">
					    <a class="line-nav-ad" href="produlist.html" rel="nofollow" data-info=""><img src="images/daohang/pj_1013.jpg"></a>
					    <ul>
					        <li>
					            <h4><a href="produlist.html" target="_blank">运动袜</a></h4>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank">运动内裤</a></h4>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank">篮球/足球</a></h4>
					        </li>
					        <li>
					            <h4><a href="produlist.html" title="运动包包" target="_blank">运动包包</a></h4>
					        </li>
					        <li>
					            <h4>系列推荐</h4>
					            <a href="produlist.html" title="儿童配件" target="_blank">儿童配件</a>
					            <a href="produlist.html" title="配件系列新品" target="_blank">配件新品</a>
					        </li>
					        <li>
					            <h4>优惠活动</h4>
					            <a href="produlist.html" target="_blank" title="关注商城微信领取50元专属优惠券！">领券满298减20 满398减30</a>
					        </li>
					    </ul>
					</div>
					</li>
					<li>
					<a href="produlist.html" title="安踏儿童">儿童</a>
					<div class="item-box" style="left:-228px;">
					    <a class="line-nav-ad" href="produlist.html" target="_blank" rel="nofollow" data-info=""><img src="images/daohang/et_1013.jpg"></a>
					    <ul>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="童鞋">童鞋</a></h4>
					            <a href="produlist.html" target="_blank" title="男童鞋">男童鞋</a>
					            <a href="produlist.html" target="_blank" title="女童鞋">女童鞋</a>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="童装">童装</a></h4>
					            <a href="produlist.html" target="_blank" title="男童装">男童装</a>
					            <a href="produlist.html" target="_blank" title="女童装">女童装</a>
					        </li>
					        <li>
					            <h4><a href="produlist.html" target="_blank" title="儿童配件">配件</a></h4>
					        </li>
					        <li>
					            <h4>系列推荐</h4>
					            <a href="produlist.html" target="_blank" title="安踏儿童新品推荐">新品推荐</a>
					            <a href="produlist.html" target="_blank" title="小童系列">小童系列</a>
					            <a href="produlist.html" target="_blank" title="安踏儿童足球系列产品推荐">足球系列</a>
					        </li>
					        <li>
					            <h4>优惠活动</h4>
					            <a href="produlist.html" target="_blank" title="关注商城微信领取50元专属优惠券！">领券满298减20 满398减30</a>
					        </li>
					    </ul>
					</div>
					</li>
					<li><a href="produlist.html"><img src="images/uni_logo.png"></a></li>
				</ul>
				<div class="header_b_search">
					<input type="text">
					<a href="###"></a>
				</div>
			</div>
</body>
</html>