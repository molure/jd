//验证
$(function(){
	
		/**/
		//回调函数
		function msg(msga,bool){
			//设置信息变量
			var info='';
			
			if(bool){
				//真的显示真的图片
				info=msga;
				$('.msg-error').hide();
			}else{
				info=msga;
				$('.msg-error').show();
			}

			return info;
		
		}
		
		
		//用户失去焦点
		$('#loginname').blur(function(){
			//获取input的值
			var value=$(this).val();
			//alert(value);
			
			//声明正则表达式
			var reg=/^\d{6,20}$/;
			//判断
			if(reg.test(value)){
				//显示对应的信息和图片
				$('.login-box .msg-wrap .msg-error').html(msg('格式正确',true));
			}else{
				//显示对应的信息和图片
				$('.login-box .msg-wrap .msg-error').html(msg('格式不正确',false));
			}
		});
		
		//密码失去焦点
		$('#password').blur(function(){
			//获取input的值
			var value=$(this).val();
			//alert(value);
			
			//声明正则表达式
			var reg=/^[a-zA-Z0-9]{6,}$/;
			//判断
			if(reg.test(value)){
				//显示对应的信息和图片
				$('.login-box .msg-wrap .msg-error').html(msg('格式正确',true));
			}else{
				//显示对应的信息和图片
				$('.login-box .msg-wrap .msg-error').html(msg('格式不正确',false));
			}
		});
	})
