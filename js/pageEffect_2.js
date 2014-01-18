// JavaScript Document
var timer =null;
/*home*/
function homeContent() {
	homeContentTitle();
	$("#home #homeMain").animate({
		"top": "60%",
		"opacity": 1
	}, 400, function() {
		$("#home #homeShadow").fadeIn(1000, function() {
			$("#home .dotted.quality").slideDown(800, function() {
				$("#home .dotted.quality .text").fadeIn(500, function() {
					homeContetAnimate();
				});
			});
		});
		$(this).animate({
			"top": "45%",
			"opacity": 1
		}, 'slow');
		$(this).animate({
			"top": "50%"
		}, 'slow');
	});
}

function homeContentTitle(){
	$("#home .title.idea").animate({"margin-left":"-290px"},1000,function(){
		$(this).animate({"margin-left":"-270px"},500);
	});
	$("#home .title.quality").animate({"top":"20px"},1000,function(){
		$(this).animate({"top":"40px"},500);
	});
	$("#home .title.ser").animate({"margin-left":"216px"},1000,function(){
		leftRightPic();
		$(this).animate({"margin-left":"196px"},500);
	});
}

function leftRightPic(){
	$("#home #homeLeftPic").animate({"left":"5%"},500,function(){
		$(this).animate({"left":"0"},'slow')
	});
	$("#home #homeRightPic").animate({"right":"5%"},500,function(){
		$(this).animate({"right":"0"},'slow')
	});
}
/*home content move*/
function homeContetAnimate() {
	//初始化
	var aIndex = 0;

	function move() {
		aIndex++;
		$("#home .dotted .text").fadeOut();
		$("#home .dotted").fadeOut();
		switch (aIndex) {
			case 1:
				$("#home .dotted.idea .text").fadeIn();
				$("#home .dotted.idea").fadeIn();
				break
			case 2:
				$("#home .dotted.ser .text").fadeIn();
				$("#home .dotted.ser").fadeIn();
				break;
			case 3:
				$("#home .dotted.quality .text").fadeIn();
				$("#home .dotted.quality").fadeIn();
				aIndex = 0;
				break;
		}
	}

	$("#home .title").bind("click", function() {
		clearInterval(timer);
		aIndex = $(this).attr("titleIndex");
		move();
		timer = setInterval(move, 3000);
	});

	timer = setInterval(move, 3000);
}


/*about*/
function aboutAnimate(){
	$("#about .right_quality").animate({
		"margin-left": "310px",
		"opacity": 1
	}, 1000, function() {
		$(this).animate({
			"margin-left": "340px"
		}, 500);
	});

	$("#about .right_idea").animate({
		"margin-left": "220px",
		"opacity": 1
	}, 1000, function() {
		$(this).animate({
			"margin-left": "250px"
		}, 500);
	});

	$("#about .right_service").animate({
		"margin-left": "340px",
		"opacity": 1
	}, 1000, function() {
		$(this).animate({
			"margin-left": "370px"
		}, 500);
	});
	$("#about .about_text").animate({
		"margin-right": "-10px",
		"opacity": 1
	}, 1500, function() {
		$(this).animate({
			"margin-right": "-30px"
		}, 500);
	});

	$("#about .title").animate({
		"margin-right": "98px",
		"opacity": 1
	}, 1500, function() {
		$(this).animate({
			"margin-right": "68px"
		}, 500);
	});

}


/*service*/
function serviceAnimate(){
	$("#serviceTitle").animate({
		"right": "120px"
	}, 1000, function() {
		$(this).animate({
			"right": "86px"
		}, 500);
	});

	$("#service #serviceLeft").animate({
		"margin-left": "-230px",
		"opacity": 1
	}, 1000, function() {
		$(this).animate({
			"margin-left": "-200px",
			"opacity": 1
		}, 500);
	});

	$("#service #serviceRight").animate({
		"margin-left": "138px",
		"opacity": 1
	}, 1000, function() {
		$(this).animate({
			"margin-left": "100px",
			"opacity": 1
		}, 500);
		serviceHover()
	});
	
}

function serviceHover(){
	var index  = 10;
	$("#serviceLeft>label").hover(function(){
		var obg = $(this); index++;
		obg.css("z-index",index);
			obg.siblings(".circle_text").show(0).stop(true, false).delay(400).animate({"left":"180px","opacity":0.3},300,function(){
				$(this).animate({"left":"200px","opacity":1},'slow');
				
			});
			obg.addClass("active");
			//obg.addClass("active").find("em").stop(true, false).fadeIn();
				
			$("#service #serviceRight").stop(true, false).animate({"left":"45%","opacity":0.5},300,function(){
				$(this).animate({"left":"100%","opacity":0},'slow');
			});
			$("#service #serviceRight .s_title").stop(true, false).animate({"margin-left":"-35px"},300,function(){
				$(this).animate({"margin-left":"0px"},'slow');
			});
			return false;
	},function(){
		var obg = $(this);
		obg.siblings(".circle_text").show(0).stop(true, false).animate({"left":"180px","opacity":0.7},'slow',function(){
				$(this).animate({"left":"230px","opacity":0},300,function(){
					$(this).hide();
					obg.removeClass("active");
					//obg.removeClass("active").find("em").fadeOut();
				});
			});

			$("#service #serviceRight .s_title").stop(true, false).delay(500).animate({"margin-left":"-35px"},'slow',function(){
				$(this).animate({"margin-left":"-70px"},500);

			});
			$("#service #serviceRight").stop(true, false).delay(500).animate({"left":"45%","opacity":0.5},'slow',function(){
				$(this).animate({"left":"50%","opacity":1},400);
			});
	});
	
	$("#serviceRight>label").hover(function(){
		var obg = $(this); index++;
		obg.css("z-index",index);
		obg.siblings(".circle_text").show(0).stop(true, false).delay(400).animate({"right":"180px","opacity":0.3},300,function(){
				$(this).animate({"right":"200px","opacity":1},'slow');
			});
			obg.addClass("active");
			//obg.addClass("active").find("em").stop(true, false).fadeIn();
			
			$("#service #serviceLeft").stop(true, false).animate({"left":"55%","opacity":0.5},300,function(){
				$(this).animate({"left":"0%","opacity":0},'slow');
			});
			$("#service #serviceLeft .s_title").stop(true, false).animate({"margin-left":"-85px"},300,function(){
				$(this).animate({"margin-left":"0px"},'slow');
			});
	},function(){
		var obg = $(this); 
		obg.siblings(".circle_text").show(0).stop(true, false).animate({"right":"180px","opacity":0.7},'slow',function(){
				$(this).animate({"right":"230px","opacity":0},300,function(){
					$(this).hide();
					obg.removeClass("active");
					//obg.removeClass("active").find("em").fadeOut();
				});
			});
			
			$("#service #serviceLeft .s_title").stop(true, false).delay(500).animate({"margin-left":"20px"},'slow',function(){
				$(this).animate({"margin-left":"-70px"},500);
			});

			$("#service #serviceLeft").stop(true, false).delay(500).animate({"left":"55%","opacity":0.6},'slow',function(){
				$(this).animate({"left":"50%","opacity":1},400);
			});
	})

}


/*case*/
function caseAnimate() {
	var detailsUrl = ["case_details.html", "case_details_green.html", "case_details_blue.html", "case_details_green_blue.html"]; //案例地址
	var loading = '<div id="loading" style="position:absolute;top:0; left:0; width:100%; height:100%; z-index:1000; background:url(images/loading.gif) center center no-repeat;"></div>';
	$("#case .case_next").bind("click", function() {
		$("#case .case_content a").eq(0).trigger("click");
	});

	$("#case .case_content a").bind("click", function() {
		$("#foot").slideDown();
		var detailsIndex = $(this).index();
		var details = $(".case_details").eq(detailsIndex);
		$(details).append(loading).load(detailsUrl[detailsIndex], function() {
			caseDetailAnimate(detailsIndex);
		});
		$(details).animate({
			"top": "-3%"
		}, 'slow', function() {
			$(this).animate({
				"top": "0%"
			}, 'slow');
		});
		$("#case .case").animate({
			"top": "-100%"
		}, 'slow');
	});

	function caseDetailAnimate(i) {
		var d = $(".case_details").eq(i);
		$(d).find(".dotted a").bind("click", function() {
			var detailsIndex = $(this).index();
			var details = $(".case_details").eq(detailsIndex);
			if ($(details).css("top").split("px")[0] > 0) {
				$(details).append(loading).load(detailsUrl[detailsIndex], function() {
					caseDetailAnimate(detailsIndex);
				});
				$(d).animate({
					"top": "-100%"
				}, 'slow',function(){
					$(this).empty();
				});
				$(details).animate({
					"top": "-3%"
				}, 'slow', function() {
					$(this).animate({
						"top": "0%"
					}, 'slow');
				});
			} else if ($(details).css("top").split("px")[0] < 0) {
				$(details).append(loading).load(detailsUrl[detailsIndex], function() {
					caseDetailAnimate(detailsIndex);
				});
				$(d).animate({
					"top": "100%"
				}, 'slow',function(){
					$(this).empty();
				});
				$(details).animate({
					"top": "3%"
				}, 'slow', function() {
					$(this).animate({
						"top": "0%"
					}, 'slow');
				});
			}
		});

		$(d).find(".case_details_content a").bind("click", function() {
			detailShow($(this).index());
			$(d).children(".title,.case_details_content").animate({
				"top": "45%"
			}, "slow", function() {
				$(this).animate({
					"top": "155%"
				}, "slow", function() {
					$(this).animate({
						"top": "150%"
					}, "slow");
				});
			});

			$(d).children(".case_show_content").animate({
				"top": "-155%"
			}, "slow", function() {
				$(this).animate({
					"top": "55%"
				}, "slow", function() {
					$(this).animate({
						"top": "50%"
					}, "slow");
				});
			});
		});

		var imgDivWidth = ($(d).find(".case_details_content .img a").width() + 10)*$(d).find(".case_details_content .img a").size()/2;

		$(d).find(".case_details_content .img").width(imgDivWidth+10).css("position","relative");
		$(d).find(".down_arrow").bind("click",function(){
			$(d).find(".case_details_content .img").animate({"left":$(d).find(".case_details_content").width()-imgDivWidth-100+"px"},"slow",function(){
				$(this).animate({"left":$(d).find(".case_details_content").width()-imgDivWidth+"px"},"slow");
			});
		});

		$(d).find(".up_arrow").bind("click",function(){
			$(d).find(".case_details_content .img").animate({"left":"100px"},"slow",function(){
				$(this).animate({"left":"0px"},"slow");
			});
		});

		

		function detailShow(currentIndex){
			$(d).find(".up_arrow,.down_arrow").unbind("click");
			$(d).find(".case_show_content:lt("+currentIndex+")").css("left","-150%");
			$(d).find(".case_show_content:eq("+currentIndex+")").css("left","50%");
			$(d).find(".up_arrow").bind("click",function(){
				if (currentIndex - 1 >= 0) {
					$(d).find(".case_show_content").eq(currentIndex).animate({
						"left": "155%"
					}, "slow", function() {
						$(this).animate({
							"left": "150%"
						}, "slow");
					});
					$(d).find(".case_show_content").eq(currentIndex - 1).animate({
						"left": "55%"
					}, "slow", function() {
						$(this).animate({
							"left": "50%"
						}, "slow");
					});
					currentIndex--;
				}
			});

			$(d).find(".down_arrow").bind("click",function(){
				if (currentIndex + 1 < $(d).find(".case_show_content").size()) {
					$(d).find(".case_show_content").eq(currentIndex).animate({
						"left": "-155%"
					}, "slow", function() {
						$(this).animate({
							"left": "-150%"
						}, "slow");
					});

					$(d).find(".case_show_content").eq(currentIndex+1).animate({
						"left": "45%"
					}, "slow", function() {
						$(this).animate({
							"left": "50%"
						}, "slow");
					});
					currentIndex++;
				}
			});
		}
	}
}

/*activity*/
function activityAnimate(){
	$("#activity .left_menu").animate({"margin-right":"280px"},1000,function(){
		$(this).animate({"margin-right":"180px"},500,function(){
			$(this).animate({"margin-right":"200px"},"slow");
		});
	});

	$("#activity .activity_content").animate({"margin-left":"-300px"},1000,function(){
		$(this).animate({"margin-left":"-120px"},800,function(){
			$(this).animate({"margin-left":"-160px"},"slow");
		});
	});

	$("#activity .left_menu ul a").bind("click",function(){
		$("#activity .left_menu ul a").removeClass("active");
		$(this).addClass("active");
	});


	$(".scroll span").bind("mousedown", function(e) {
		var currentY = e.clientY;
		$(document).bind("mousemove", function(ev) {
			var change = ev.clientY - currentY;
			if ($(e.target).css("top").split("px")[0] <= 0 && change < 0) {
				return;
			}
			if ($(e.target).css("top").split("px")[0] >= $(e.target).parent().height() - $(e.target).height() && change > 0) {
				return;
			}
			$(e.target).css("top", parseInt($(e.target).css("top").split("px")[0]) + change + "px");
			$(e.target).parent().next().scrollTop($(e.target).css("top").split("px")[0]);
			currentY = ev.clientY;
		});

		$(document).bind("mouseup", function() {
			$(document).unbind("mousemove");
		});
	});
}

/*contact us*/
function contactUsAnimate(){
	$("#contactUsMap").animate({"margin-left":"-30px"},1500,function(){
		$(this).animate({"margin-left":"0px"},'slow');
	});
	$("#contactInformation").animate({"margin-right":"80px"},1000,function(){
		$(this).animate({"margin-right":"50px"},500);
	});
	$("#contactUsTitle").animate({"margin-right":"250px"},1500,function(){
		$(this).animate({"margin-right":"220px"},500)
	});
}

