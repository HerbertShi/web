// JavaScript Document
$(function(){
	//选择jquery对象
	var _menuA = $("#menu a");
	var isNoMiddle = false;
	var menu = ["home","about","service","case","activity","contactus"]; //栏目文件名
	var menuUrl = ["home.html","about.html","service.html","case.html","activity.html","contact.html"]; //栏目地址
	var loading = '<div id="loading" style="position:absolute;top:0; left:0; width:100%; height:100%; z-index:1000; background:url(images/loading.gif) center center no-repeat;"></div>';

	$("#header").animate({
		"top": "80px"
	}, 400, function() {
		$(this).animate({
			"top": "0px"
		}, 'slow', function() {
			clearInterval(timer);
			_menuA.eq(1).addClass("active").siblings().removeClass("active");
			$("#" + menu[0]).append(loading).load(menuUrl[0], function() {
				//加载完页面后执行当页动画
				Execution(1);
			});
		});
	});
		
	$("#foot").animate({
		"bottom": "40px"
	}, 450, function() {
		$(this).animate({
			"bottom": "0px"
		}, 'slow');
	});
		
	_menuA.click(function() {
			clearInterval(timer);
			var _this = $(this);
			var aIndex = $("#menu a[position='middle']").index();
			var menuIndex = _this.index();
			var position = _this.attr("position");

			if ($("#" + menu[aIndex - 1]).is(":animated") || isNoMiddle) return false;
			else {

				if (aIndex == menuIndex || menuIndex == "0") {
					//$("#"+menu[aIndex-1]).load(menu[aIndex-1]+".html",function(){
					//加载完页面后执行当页动画
					//Execution(menuIndex);
					//})
					return false;
				} else {
					_this.addClass("active").siblings().removeClass("active");
					isNoMiddle = true;

					$("#menu .logo img").eq(aIndex-1).slideUp("slow", function() {
						$("#menu .logo img").eq(menuIndex-1).slideDown("slow");
					});

					$("#" + menu[menuIndex - 1]).append(loading).load(menuUrl[menuIndex - 1], function() {
						//加载完页面后执行当页动画
						Execution(menuIndex);
					});


					if (position == "right") {
						$("#" + menu[aIndex - 1]).animate({
							"left": "-100%"
						}, 'slow', function() {
							_menuA.eq(aIndex).attr("position", "left");
						});
						$("#" + menu[menuIndex - 1]).animate({
							"left": "-3%"
						}, 'slow', function() {
							$(this).animate({
								"left": "0%"
							}, 'slow', function() {
								_this.attr("position", "middle");
								isNoMiddle = false;
							});
						});
					} else {
						$("#" + menu[aIndex - 1]).animate({
							"left": "100%"
						}, 'slow', function() {
							_menuA.eq(aIndex).attr("position", "right");
						});
						$("#" + menu[menuIndex - 1]).animate({
							"left": "3%"
						}, 'slow', function() {
							$(this).animate({
								"left": "0%"
							}, 'slow', function() {
								_this.attr("position", "middle");
								isNoMiddle = false;
							});
						});
					}
				}
			}
	});
		
	//foot qq
	$("#foot .end_qq").hover(function() {
		$(this).find("img").stop(true, true).animate({
			"top": "-31px"
		}, 300);
	}, function() {
		$(this).find("img").stop(true, true).animate({
			"top": "0"
		}, 300);
	});
});

//执行的动画
function Execution(i) {
	$("#foot").slideDown();
	switch (i) {
		case 1:
			homeContent();
			break;
		case 2:
			aboutAnimate();
			break;
		case 3:
			serviceAnimate();
			break;
		case 4:
		$("#foot").slideUp();
			caseAnimate();
			break;
		case 5:
			activityAnimate();
			break;
		case 6:
			contactUsAnimate();
			break;
		default:
			return false;
			break;
	}
}