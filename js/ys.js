//侧边栏
var divs = document.getElementsByClassName('aside-box');
var em = document.getElementsByTagName('em');
for(var i = 0; i < divs.length; i++) {
	divs[i].onmouseover = function() {
		this.style.backgroundColor = '#c81623';
		this.lastElementChild.className = 'hover';
	}
	divs[i].onmouseout = function() {
		this.style.backgroundColor = '';
		this.lastElementChild.className = '';
	}

}
//倒计时
setInterval(function() {
	var d1 = new Date();
	var d2 = new Date('2018/6/15');
	var cha = d2.valueOf() - d1.valueOf();
	var hour = Math.floor(cha / (1000 * 60 * 60));
	cha %= 1000 * 60 * 60;
	djs1.innerHTML = hour + " ";
});
setInterval(function() {
	var d1 = new Date();
	var d2 = new Date('2019/6/15');
	var cha = d2.valueOf() - d1.valueOf();
	var hour = Math.floor(cha / (1000 * 60 * 60));
	cha %= 1000 * 60 * 60;
	var minute = Math.floor(cha / (1000 * 60));
	cha %= 1000 * 60;
	djs2.innerHTML = minute + " ";
});
setInterval(function() {
	var d1 = new Date();
	var d2 = new Date('2018/6/15');
	var cha = d2.valueOf() - d1.valueOf();
	var hour = Math.floor(cha / (1000 * 60 * 60));
	cha %= 1000 * 60 * 60;
	var minute = Math.floor(cha / (1000 * 60));
	cha %= 1000 * 60;
	var second = Math.floor(cha / (1000));
	cha %= 1000;
	djs3.innerHTML = second + " ";
});

//轮播
var lis = document.getElementById('img').getElementsByTagName('li');
var num_lis = document.getElementById('num').getElementsByTagName('li');
var left = document.getElementById('left');
var right = document.getElementById('right');
var i = 0;

function autoRun() {
	run = setInterval(function() {
		lis[i].removeAttribute('class');
		num_lis[i].firstElementChild.removeAttribute('class');
		i++;
		if(i == lis.length) {
			i = 0;
		}
		lis[i].setAttribute('class', 'active');
		num_lis[i].firstElementChild.setAttribute('class', 'active_num');
	}, 1000);

}
autoRun();
for(var j = 0; j < lis.length; j++) {
	lis[j].onmouseover = function() {
		clearInterval(run);
		left.style.display = "block";
		right.style.display = "block";
	}
	lis[j].onmouseout = function() {
		autoRun();
		left.style.display = "none";
		right.style.display = "none";
	}
}
for(var k = 0; k < lis.length; k++) {
	num_lis[k].index = k;
	num_lis[k].onmouseover = function() {
		clearInterval(run);
		lis[i].removeAttribute('class');
		num_lis[i].firstElementChild.removeAttribute('class');
		i = this.index;
		lis[i].setAttribute('class', 'active');
		num_lis[i].firstElementChild.setAttribute('class', 'active_num');
	}
	num_lis[k].onmouseout = function() {
		autoRun();
	}
}
right.onmouseover = function() {
	clearInterval(run);
	left.style.display = "block";
	right.style.display = "block";

}
right.onmouseout = function() {
	autoRun();
	left.style.display = "none";
	right.style.display = "none";
}
right.onclick = function() {
	lis[i].removeAttribute('class');
	num_lis[i].firstElementChild.removeAttribute('class');
	i++;
	if(i == lis.length) {
		i = 0;
	}
	lis[i].setAttribute('class', 'active');
	num_lis[i].firstElementChild.setAttribute('class', 'active_num');
}
left.onmouseover = function() {
	clearInterval(run);
	left.style.display = "block";
	right.style.display = "block";

}
left.onmouseout = function() {
	autoRun();
	left.style.display = "none";
	right.style.display = "none";
}
left.onclick = function() {
	lis[i].removeAttribute('class');
	num_lis[i].firstElementChild.removeAttribute('class');
	i--;
	if(i < 0) {
		i = lis.length - 1;
	}
	lis[i].setAttribute('class', 'active');
	num_lis[i].firstElementChild.setAttribute('class', 'active_num');
}

var hmgg = document.getElementById('hmgg');
var addul = document.getElementById('pbl');
var addli = addul.getElementsByTagName('li');
var lilen = addli.length;
var bool = true;
window.onscroll = function() {
	var sh = document.documentElement.clientHeight || document.body.clientHeight;
	var wh = document.body.scrollHeight || document.documentElement.scrollHeight;
	var scroll = Math.ceil(document.documentElement.scrollTop || document.body.scrollTop) + 500;
	if(Math.floor(wh - sh) <= scroll) {
		pbl();

	}
	if(scroll >= 10000) {
		
					bool = false;
				}

}

function pbl() {

	if(bool) {
		for(var j = 0; j < 1; j++) {
			for(var i = 1; i <= 5; i++) {
				add();

			}
		}
	}
}

function add() {
	var li = document.createElement('li');
	addul.appendChild(li);
	var a = document.createElement('a');
	var zxs_div = document.createElement('div');
	li.appendChild(a);
	li.appendChild(zxs_div);
	zxs_div.setAttribute('class', 'zxs');

	var zxsbox_div = document.createElement('div');
	zxsbox_div.setAttribute('class', 'zxs-box');
	zxs_div.appendChild(zxsbox_div);
	var zxsspan = document.createElement('span');
	zxsbox_div.appendChild(zxsspan);
	var span_text = document.createTextNode('找相似');
	zxsspan.appendChild(span_text);
	var boxtopdiv = document.createElement('div');
	boxtopdiv.setAttribute('class', 'box-top');
	a.appendChild(boxtopdiv);
	var img = document.createElement('img');
	img.src = 'img/' + arrImg[randomImg()];
	boxtopdiv.appendChild(img);
	var boxbotdiv = document.createElement('div');
	boxbotdiv.setAttribute('class', 'box-bot');
	a.appendChild(boxbotdiv);
	var titlep = document.createElement('p');
	titlep.setAttribute('class', 'title');
	boxbotdiv.appendChild(titlep);
	var titlew = document.createTextNode('【买一送四】悦宝莱撕拉式吸去黑头面膜套装 清洁去粉刺收缩毛孔祛黑头鼻贴竹炭面膜泥男士女士');
	titlep.appendChild(titlew);
	var pricep = document.createElement('p');
	pricep.setAttribute('class', 'price');
	boxbotdiv.appendChild(pricep);
	var pricew = document.createTextNode('28.00');
	pricep.appendChild(pricew);
	var span = document.createElement('span');
	var spanw = document.createTextNode('￥');
	pricew.before(span);
	span.appendChild(spanw);

}
var arrImg = [
	'cols09-list-01.jpg',
	'cols09-list-02.jpg',
	'cols09-list-03.jpg',
	'cols09-list-14.jpg',
	'cols09-list-05.jpg',
	'cols09-list-06.jpg',
	'cols09-list-07.jpg',
	'cols09-list-08.jpg',
	'cols09-list-09.jpg',
	'cols09-list-10.jpg',
	'cols09-list-11.jpg',
	'cols09-list-12.jpg',
	'cols09-list-13.jpg'
]

function randomImg() {
	var iImg = Math.floor(Math.random() * 13)
	return iImg
}