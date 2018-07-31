$(function(){
		//字体颜色
	$('.head-nav>li').mouseenter(function(){
		$(this).children('a').css('color','#ff2d54');
	}).mouseleave(function(){
		$(this).children('a').css('color','#999');
	});
	$('.head-nav>li .myjd-hide a,.khfw-hide a,.wzdh-hide a').mouseenter(function(){
		$(this).css('color','#ff2d54');
	}).mouseleave(function(){
		$(this).css('color','#999');
	});
	//定位二级框
	$('.dw>li.wz').mouseover(function(){
		$('.dw-hide').show();
		$(this).addClass('bd');
	}).mouseout(function(){
		$('.dw-hide').hide();
		$('.dw li.wz').removeClass('bd');
	})
	/*购物车隐藏*/
	$('.mycar').mouseover(function(){
		$('.mycar-hide').show();
		$(this).css({'background-color':'#fff','border':'1px solid #ccc','border-bottom':'none'});
	}).mouseout(function(){
		$('.mycar-hide').hide();
		$(this).css({'background-color':'','border':'','border-bottom':''});
	})
	
		$('.dw-hide ul.top li').mouseover(function(){
		$(this).children('a').addClass('bg');
	}).mouseout(function(){
		$(this).children('a').removeClass('bg');
	})
		$('.dw-hide ul.hide-bot li').mouseenter(function(){
		$(this).children('span').addClass('red');
	}).mouseleave(function(){
		$(this).children('span').removeClass('red');
	})
	
	//导航二级隐藏菜单
	$('.myjd').mouseover(function(){
		$('.myjd-hide').show();
		$(this).css({'background-color':'#fff','border':'1px solid #ccc','border-bottom':'none'});
	}).mouseout(function(){
		$('.myjd-hide').hide();
		$(this).css({'background-color':'','border':'','border-bottom':''});
	})
	$('.khfw').mouseover(function(){
		$('.khfw-hide').show();
		$(this).css({'background-color':'#fff','border':'1px solid #ccc','border-bottom':'none'});
	}).mouseout(function(){
		$('.khfw-hide').hide();
		$(this).css({'background-color':'','border':'','border-bottom':''});
	})
	$('.wzdh').mouseover(function(){
		$('.wzdh-hide').show();
		$(this).css({'background-color':'#fff','border':'1px solid #ccc','border-bottom':'none'});
	}).mouseout(function(){
		$('.wzdh-hide').hide();
		$(this).css({'background-color':'','border':'','border-bottom':''});
	})
	$('.sjjd').mouseover(function(){
		$('.sjjd-hide').show();
		
	}).mouseout(function(){
		$('.sjjd-hide').hide();
		
	})
})
