$(function(){
	//透明度
	$('img').not('#img img , .aside-hide img,.aside-l img').mouseenter(function(){
		$(this).css('opacity','.8');
	}).mouseleave(function(){
		$(this).css('opacity','1');
	})
	
//顶部广告关闭	
	$('.close').click(function(){
		$('.top-gg').hide();
	})
	
//banner左侧
	$('.con-list ul li,.con-list .li-hide').mouseover(function(){
		var index=$(this).index();
		$('.con-list .li-hide').eq(index).show().siblings().hide();
	}).mouseout(function(){
		$('.con-list .li-hide').hide();
	})
//侧边栏
	$('.aside .aside-box,.aside .aside-box em').mouseenter(function(){
		$(this).children('em').animate({left:-61},500).css('background','red');
		$(this).siblings().children('em').hide()
	})
	$('.aside .aside-box').mouseleave(function(){
		$(this).siblings().children('em').show()
		$(this).children('em').animate({left:35},500).css('background','');
	})
//tab 切换
	$('.nav-list').mouseenter(function(){
		var index=$(this).index();
		$('.tab-body-item').eq(index).show().siblings().hide();
	})
	$('.dian-list-two').mouseenter(function(){
		$('.slider-box').css('transform','translateX(-390px)');
		$('.slider-list-two').show();
		$(this).addClass('active').siblings().removeClass('active');
		
	})
	$('.dian-list-one').mouseenter(function(){
		$('.slider-box').css('transform','translateX(0px)');
		$(this).addClass('active').siblings().removeClass('active');
	})
	//right
	$('.r-dian-list-two').mouseenter(function(){
		$('.r-slider-box').css('transform','translateX(-350px)');
		$('.r-slider-list-two').show();
		$(this).addClass('active').siblings().removeClass('active');
		
	})
	$('.r-dian-list-one').mouseenter(function(){
		$('.r-slider-box').css('transform','translateX(0px)');
		$(this).addClass('active').siblings().removeClass('active');
	})
//促销 公告tab 切换
	$('.r-cen-head a.cx,.head-detail1').mouseenter(function(){
		/*var index=$(this).index();
		$('.head-detail').eq(index).show().siblings().hide();*/
		$('.head-detail').show();
		$('.head-detail2').hide();
		$('.bd').addClass('lpy');
		$('.bd').removeClass('rpy');
	})
	$('.r-cen-head a.gg,.head-detail2').mouseenter(function(){
		/*var index=$(this).index();
		$('.head-detail').eq(index).show().siblings().hide();*/
		$('.head-detail').hide();
		$('.head-detail2').show();
		$('.bd').addClass('rpy');
		$('.bd').removeClass('lpy');
	})
	//自动切换
	
	//
	$('.hmgg ul li').mouseover(function(){
		$('.zxs-box').show();
	})
	//ajax 瀑布流
	//还没逛够 透明度
	$('.hmgg #pbl').on("mouseenter","li",function(){
		$(this).find('a').css('opacity','.7');
		$(this).find('.zxs').show();
	})
	$('.hmgg #pbl').on("mouseleave","li",function(){
		$(this).find('a').css('opacity','');
		$(this).find('.zxs').hide();
	})
	$('.zxs-box').mouseenter(function(){
		$(this).css('opacity','0.8')
	}).mouseleave(function(){
		$(this).css('opacity','')
	})
	//左侧边栏
	$('.aside-l,.aside-hide').mouseenter(function(){
		$('.aside-hide').width(790);
		$('.asideClose').show();
		//$('.aside-hide').css('width','790px');
	})
	$('.aside-hide ,.aside-l').mouseleave(function(){
		//$('.aside-hide').css('width','0');
		$('.aside-hide').width(0);
		$('.asideClose').hide();
	})
	$('.asideClose').click(function(){
		$('.aside-hide').width(0);
		$('.asideClose').hide();
	})
	
	var now = 0;
	//获取li标签的长度
	var len = $('.bannerto>.banne>img').length;
	//console.log(len)

	function zo() {
		//自动轮播
		s = setInterval(function() {
			//当前隐藏 图片数字
			$('.bannerto>.banne>img').hide();
			$('.bannerto>.shuzi>ul>li').css('background', '');

			//下一张显示 
			//判断now
			if (now >= len - 1) {
				now = 0;
			} else {
				now++;
			}

			//显示数字和图片
			$('.bannerto>.banne>img:eq(' + now + ')').show();
			$('.bannerto>.shuzi>ul>li:eq(' + now + ')').css('background', '#fff');
		}, 1000)
	}

	zo();

	//鼠标移入移出事件
	$('.bannerto').mouseover(function() {
		//清除定时 显示箭头
		clearInterval(s);
		$('.zjtt,.yjtt').css('display', 'block');
	}).mouseout(function() {
		zo();
		$('.zjtt,.yjtt').css('display', 'none');
	})

	//数字对应图片
	$('.bannerto>.shuzi>ul>li').mouseover(function() {
		//清除定时 
		clearInterval(s);
		//当前隐藏 图片数字
		$('.bannerto>.banne>img').hide();
		$('.bannerto>.shuzi>ul>li').css('background', '');

		//获取当前li的下标
		now = $(this).index();
		$('.bannerto>.banne>img:eq(' + now + ')').show();
		$('.bannerto>.shuzi>ul>li:eq(' + now + ')').css('background', '#fff');
	})

	//left right的点击
	$('.zjtt').click(function() {
		//当前隐藏 图片数字
		$('.bannerto>.banne>img').hide();
		$('.bannerto>.shuzi>ul>li').css('background', '');

		now--;

		//往左点 --
		if (now < 0) {
			now = len - 1;
		}
		//显示图片数字
		$('.bannerto>.banne>img:eq(' + now + ')').show();
		$('.bannerto>.shuzi>ul>li:eq(' + now + ')').css('background', '#fff');
	})

	//right的点击
	$('.yjtt').click(function() {
		//当前隐藏 图片数字
		$('.bannerto>.banne>img').hide();
		$('.bannerto>.shuzi>ul>li').css('background', '');
		now++;
		//往左点 --
		if (now > len - 1) {
			now = 0;
		}
		//显示图片数字
		$('.bannerto>.banne>img:eq(' + now + ')').show();
		$('.bannerto>.shuzi>ul>li:eq(' + now + ')').css('background', '#fff');

	})
	
	/*京东秒杀右侧 平移*/
	$('.huadong').mouseenter(function(){
		$('.dong').css('transform','translateX(-801px)');
	}).mouseleave(function(){
		$('.dong').css('transform','translateX(0)');
	})
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll>200){
			$('#form-scoll').css({"display":"block","position":"fixed"});
			$('#div1').css({"display":"block"});
		}else{
			$('#form-scoll').css({"display":"none"});
			$('#div1').css({"dispihgh lay":"nonez"});
		}
	})
	
})
