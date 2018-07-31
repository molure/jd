$(function() {
	//字体颜色
	$('.head-nav>li').mouseenter(function(){
		$(this).children('a').css('color','#ff2d54');
	}).mouseleave(function(){
		$(this).children('a').css('color','#999');
	});
	
	$('.header-nav>li').mouseenter(function(){
		$(this).find('a').css('color','#ff2d54');
	}).mouseout(function(){
		$(this).find('a').css('color','#333');
	});
	
	$('.sm').mouseover(function() {
		$('.sm-hide').css('opacity', '1');
		$('.sm-hide').css('visibility', 'visible');
	}).mouseout(function() {
		$('.sm-hide').css('opacity', '0');
		$('.sm-hide').css('visibility', 'hidden');
	})
	
	$('.qbfl').mouseover(function(){
		$('.qbfl-hide').show();
		$('.qbfl-info').css('border-bottom','0')
	}).mouseout(function(){
		$('.qbfl-hide').hide();
		$('.qbfl-info').css('border','1px solid #ccc')
	})
	var now=0;
	var len=$('.yhq-box ul li').length;
	$('.next').click(function(){
		$('.yhq-box>ul>li').hide();
		now++;
		if(now>=len-1){
			now=0;
		}
	$('.yhq-box>ul>li:eq('+now+')').show();
	})
	$('.pre').click(function(){
		$('.yhq-box>ul>li').hide();
		now--;
		if(now<0){
			now=len-1;
		}
	$('.yhq-box>ul>li:eq('+now+')').show();
	})
	//banner 轮播
	var num=0
	var len=$('.banner-slider a').length;
	function run(){
		setInterval(function(){
		if(num>len-1){
			num=0;
		}else{
			num++;
		}
		$('.banner-slider a:eq('+num+')').css({'opacity':'1','z-index':'1'}).siblings().css({'opacity':'0','z-index':'0'});
	},2000)
	}
	run();
	/*隐藏的商品分类list*/
	$('.beauty-nav-menu .item-wp').mouseover(function(){
		$(this).children('.hide-item').show();
		$(this).addClass('bg');
		$(this).children('.item').css('border-bottom','1px solid #fff')
	}).mouseout(function(){
		$('.hide-item').hide();
		$(this).removeClass('bg');
		$(this).children('.item').css('border-bottom','1px solid #e1e1e1')
	})
	/*
	 	$('.con-list ul li').mouseenter(function(){
		var index=$(this).index();
		$('.con-list .li-hide').eq(index).show().siblings().hide();
	}).mouseleave(function(){
		$('.con-list .li-hide').hide();
	})	
	 */
	//brand-list
	$('.brand-head>ul>li').hover(function(){
		var index=$(this).index();
		$('.brand-list>ul>li').eq(index).show().siblings().hide();
		$(this).find('span').addClass('active');
		$(this).siblings().find('span').removeClass('active')
	})
	
	/*
	 	$('.con-list ul li').mouseenter(function(){
		var index=$(this).index();
		$('.con-list .li-hide').eq(index).show().siblings().hide();
	}).mouseleave(function(){
		$('.con-list .li-hide').hide();
	})
	 * */
	$('.bbci_list a').mouseover(function(){
		$(this).find('img').css('transform','translateY(-7px)')
	}).mouseout(function(){
		$(this).find('img').css('transform','translateY(0)')
	})
	//试用中心

	//热销榜单 tab
	$('.rxbd>ul>li').mouseover(function(){
		var index=$(this).index();
		$('.rxbd-list .list').eq(index).show().siblings().hide();
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active')
	})
	$('.rxbd-list .list .list-same').mouseover(function(){
		$(this).css('transform','translateY(-5px)');
	}).mouseout(function(){
		$(this).css('transform','translateY(0)')
	})
	//店铺精选
		$('.hot-sale>ul>li').mouseover(function(){
		var index=$(this).index();
		$('.dpjx .hot-sale .list>ul').eq(index).show().siblings().hide();
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active')
	})
	$('.hot-sale .list>ul>li .img-box').mouseenter(function(){
		$(this).find('img').css('transform','scale(1.1)');
	}).mouseout(function(){
		$(this).find('img').css('transform','scale(1)');
	})
	//基础护理
	$('.jchl-head>ul>li').mouseover(function(){
		var index=$(this).index();
		$('.jchl .jchl-list .jchl-main .main-list>ul').eq(index).show().siblings().hide();
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active')
	})
	$('.jchl-main .main-list>ul>li .list-img-box').mouseenter(function(){
		$(this).find('img').css('transform','scale(1.1)');
	}).mouseout(function(){
		$(this).find('img').css('transform','scale(1)');
	})
	//特殊护理
	$('.tshl-head>ul>li').mouseover(function(){
		var index=$(this).index();
		$('.tshl .tshl-list .tshl-main .main-list>ul').eq(index).show().siblings().hide();
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active')
	})
		$('.tshl-main .main-list>ul>li .list-img-box').mouseenter(function(){
		$(this).find('img').css('transform','scale(1.1)');
	}).mouseout(function(){
		$(this).find('img').css('transform','scale(1)');
	})
	
	/*彩妆香水*/
	$('.czxs-head>ul>li').mouseover(function(){
		var index=$(this).index();
		$('.czxs .czxs-list .czxs-main .main-list>ul').eq(index).show().siblings().hide();
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active')
	})
		$('.czxs-main .main-list>ul>li .list-img-box').mouseenter(function(){
		$(this).find('img').css('transform','scale(1.1)');
	}).mouseout(function(){
		$(this).find('img').css('transform','scale(1)');
	})
	
	//男士专区
	$('.nszq-head>ul>li').mouseover(function(){
		var index=$(this).index();
		$('.nszq .nszq-list .nszq-main .main-list>ul').eq(index).show().siblings().hide();
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active')
	})
		$('.nszq-main .main-list>ul>li .list-img-box').mouseenter(function(){
		$(this).find('img').css('transform','scale(1.1)');
	}).mouseout(function(){
		$(this).find('img').css('transform','scale(1)');
	})
	//侧边楼层
	
	$(function(){
		$('.beauty_elevator ul li').click(function(){
			var index=$(this).index()-1;
			var top=$('.floor').eq(index).offset().top;
			$('body,html').animate({
				scrollTop:top
			},500);
		
		})
		var heights=[];
		$('.floor').each(function(){
			heights.push($(this).offset().top);
		});
		$(window).scroll(function(){
			var top=$(window).scrollTop();
			var index;
			for(var i=0;i<heights.length;i++){
				if(top>=heights[i] && top<heights[i+1]){
					index=i+1;
					$('.beauty_elevator ul li').eq(index).find('a').css('color','red');
					$('.beauty_elevator ul li').eq(index).siblings().find('a').css('color','#666');
					break;
				}else if(top>=heights[heights.length-1]){
					index=heights.length+1;
					$('.beauty_elevator ul li').eq(index).find('a').css('color','red');
					$('.beauty_elevator ul li').eq(index).siblings().find('a').css('color','#666');
					break;
				}
			}
		});
	
	})

})