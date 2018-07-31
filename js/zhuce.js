$(function() {
		$('.tox').click(function() {

			if ($('.hide-country').css("display") == "none") {
				$('.hide-country').show();
			} else {
				$('.hide-country').hide();
			}
		})

	})
//遮罩	
$(window).load(function() {
var q = setInterval(function() {
		$('.mask').css("height", $(document).height());
		$('.mask').css("width", $(document).width());
		$('.mask').show();
		$('.zcxy').show();
		$('.no,.yes').click(function(){
			$('.mask').fadeOut();
			$('.zcxy').fadeOut();
			clearInterval(q);
		})
	}, 1000)
});
//验证