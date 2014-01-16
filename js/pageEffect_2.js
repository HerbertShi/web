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
	$("#home .title.idea").animate({"margin-left":"-270px"},'slow');
	$("#home .title.quality").animate({"top":"40px"},'slow');
	$("#home .title.ser").animate({"margin-left":"196px"},'slow',function(){
		leftRightPic();
		$("#page").fadeIn();
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
	$("#aboutRight_radus").animate({"margin-left":"150px"},1000);
	$("#aboutLeft_text").animate({"margin-left":"-520px","opacity":1},1000,function(){
		$(this).animate({"margin-left":"-500px"},500);
	});
	$("#aboutLeft_text h1").animate({"margin-left":"-28px","opacity":1},1000,function(){
		$(this).animate({"margin-left":"-3px"},500);
	});
	$("#aboutLeft_text .textStyle").animate({"opacity":1},1000);
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
		"margin-left": "-280px",
		"opacity": 1
	}, 1000, function() {
		$(this).animate({
			"margin-left": "-200px",
			"opacity": 1
		}, 500);
	});

	$("#service #serviceRight").animate({
		"margin-left": "158px",
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
	
	$("#serviceRight .serviceTip").hover(function(){
		var obg = $(this); index++;
		obg.css("z-index",index);
		obg.find(".service_detail").show(0).stop(true, false).delay(400).animate({"right":"-38px","opacity":0.3},300,function(){
				$(this).animate({"right":"0","opacity":1},'slow');
			});
			obg.addClass("active").find("em").stop(true, false).fadeIn();
			
			$("#service #serviceLeft").stop(true, false).animate({"left":"55%","opacity":0.5},300,function(){
				$(this).animate({"left":"0%","opacity":0},'slow');
			});
			$("#service .service_txt").stop(true, false).animate({"margin-left":"-85px"},300,function(){
				$(this).animate({"margin-left":"0px"},'slow');
			});
	},function(){
		var obg = $(this); 
		obg.find(".service_detail").show(0).stop(true, false).animate({"right":"-38px","opacity":0.7},'slow',function(){
				$(this).animate({"right":"0","opacity":0},300,function(){
					$(this).hide();
					obg.removeClass("active").find("em").fadeOut();
				});
			});
			
			$("#service .service_txt").stop(true, false).delay(500).animate({"margin-left":"20px"},'slow',function(){
				$(this).animate({"margin-left":"0px"},500);
			});
			$("#service #serviceLeft").stop(true, false).delay(500).animate({"left":"55%","opacity":0.6},'slow',function(){
				$(this).animate({"left":"50%","opacity":1},400);
			});
	})

}


/*case*/
function caseAnimate(){
	init();
	$("#caseTitle").animate({"margin-left":"290px","opacity":1},1000,function(){
		$(this).animate({"margin-left":"270px"},500);
	});
	$("#case .caseTip").eq(0).animate({"margin-left":"-325px","opacity":1},1000,function(){
		$(this).animate({"margin-left":"-275px"},500);
	});
	$("#case .caseTip").eq(1).animate({"margin-left":"210px","opacity":1},1000,function(){
		$(this).animate({"margin-left":"160px"},500);
		caseShow();
	});
	
	$("#case_sj").animate({"margin-left":"-503px","opacity":1},1000);
	$("#casePrev").animate({"margin-left":"-560px"},1300);
	$("#caseNext").animate({"margin-left":"520px"},1300);
}
function init(){
	n = $("#caseContent ul").size();
	count = $("#caseDetailContent li").size();
	$("#case_sj #caseContent").css({"width":n*1016+"px","left":"0px"});
	$("#caseDetailContent ul").css({"width":count*848+"px","left":"0px"});
	
	$("#casePrev,#caseDetailPrev").animate({"opacity":0.2},'slow').css("cursor","default");
	$("#caseNext,#caseDetailNext").animate({"opacity":1},'slow').css("cursor","pointer");
	
	listIndex=0;
	detailIndex=0;
}
function caseShow(){
	caseListShow();
	//$("#case .caseTip").unbind().bind("click",function(){
//		init();
//		$(this).addClass("active").find("em").fadeIn().parent().siblings(".caseTip").removeClass("active").find("em").fadeOut();
//		$("#case_detail_sj").animate({"top":"-380px","opacity":0},'slow');
//		
//		$("#case_sj").animate({"top":"40%","opacity":1},500,function(){
//			$(this).animate({"top":"60%"},300,function(){
//				$(this).animate({"top":"50%"},200);
//				caseListShow();
//			});
//		});
//		$("#casePrev,#caseNext").animate({"top":"40%"},550,function(){
//			$(this).animate({"top":"60%"},300,function(){
//				$(this).animate({"top":"50%"},200);
//			});
//		});
//	});
	$("#case #backList").unbind().bind("click",function(){
		//init();
		$("#case_detail_sj").animate({"top":"-380px","opacity":0},'slow');
		
		$("#case_sj").animate({"top":"40%","opacity":1},500,function(){
			$(this).animate({"top":"60%"},300,function(){
				$(this).animate({"top":"50%"},200);
				caseListShow();
			});
		});
		$("#casePrev,#caseNext").animate({"top":"40%"},550,function(){
			$(this).animate({"top":"60%"},300,function(){
				$(this).animate({"top":"50%"},200);
			});
		});
	});
	
	$("#case_sj li").hover(function(){
			$(this).find("p").stop(true,true).animate({"bottom":"0px"},500);
	},function(){
			$(this).find("p").stop(true,true).animate({"bottom":"-32px"},500);
	}).click(function(){
		//var detailPic = $(this).attr("detailPic");
//		var detailTitle = $(this).attr("detailTitle");
//		var detailLink = $(this).attr("detailLink");
//		var datailContent = $(this).attr("datailContent");
//		
//		$("#case_detail_sj").find("img").attr("src",detailPic);
//		$("#case_detail_sj").find(".case_detail_text").find("h1").text(detailTitle);
//		$("#case_detail_sj").find(".case_detail_text").find("a").text(detailLink).attr("href",detailLink);
//		$("#case_detail_sj").find(".case_detail_text").find("div").html(datailContent);
		
		var index = $(this).attr("index");
		//alert($("#case_sj li").eq(8).attr("src"));
		if(index){
			detailIndex = index;
			$("#caseDetailContent ul").css({"left":-detailIndex*848+"px"});
			if(index<=0){
				$("#caseDetailPrev").animate({"opacity":0.2},'slow').css("cursor","default");
			}else if(index>=count-1){
				$("#caseDetailNext").animate({"opacity":0.2},'slow').css("cursor","default");
			}else{
				$("#caseDetailPrev,#caseDetailNext").animate({"opacity":1},'slow').css("cursor","pointer");
			}
		}else{
			window.open("http://www.bangdream.com/works.aspx");
			return false;
		}
		$("#case_detail_sj").delay(200).animate({"top":"60%","opacity":1},500,function(){
			$(this).animate({"top":"48%"},200,function(){
				$(this).animate({"top":"50%"},200)
			})
		});
		$("#caseDetailPrev,#caseDetailNext").delay(200).animate({"top":"60%"},520,function(){
			$(this).animate({"top":"48%"},200,function(){
				$(this).animate({"top":"50%"},200);
				detailClick();
			})
		});
		$("#case_sj").animate({"top":"40%"},200,function(){
			$(this).animate({"top":"150%","opacity":0},500);
		});
		$("#casePrev,#caseNext").animate({"top":"40%"},210,function(){
			$(this).animate({"top":"150%"},500);
		});
	});
	
	
}
var listIndex = 0;
var n;
function caseListShow(){
	$("#casePrev").click(function(){
		if($("#case_sj #caseContent").is(":animated")) return false;
		else{
			if(listIndex<=0) return false;
			else{
				listIndex--;
				listMove("right",listIndex);
				if(listIndex<=0){
					$(this).animate({"opacity":0.2},'slow').css("cursor","default");
				}
				$("#caseNext").animate({"opacity":1},'slow').css("cursor","pointer");
			}
		}
	});
	$("#caseNext").click(function(){
		if($("#case_sj #caseContent").is(":animated")) return false;
		else{
			if(listIndex>=n-1) return false;
			else{
				listIndex++;
				listMove("left",listIndex);
				if(listIndex>=n-1){
					$(this).animate({"opacity":0.2},'slow').css("cursor","default");
				}
				$("#casePrev").animate({"opacity":1},'slow').css("cursor","pointer");
			}
		}
	});
}
function listMove(f,n){
	if(f=="left"){
		$("#case_sj #caseContent").animate({"left":-n*1016-80+"px"},"slow",function(){
			$(this).animate({"left":-n*1016+"px"},"slow");
		});
	}else{
		$("#case_sj #caseContent").animate({"left":-n*1016+80+"px"},"slow",function(){
			$(this).animate({"left":-n*1016+"px"},"slow");
		});
	}
}
var detailIndex = 0;
var count;
function detailClick(){
	var spacing = 848;
	$("#caseDetailPrev").click(function(){
		if($("#caseDetailContent ul").is(":animated")) return false;
		else{
			if(detailIndex<=0){ return false}
			else{
				detailIndex--;
				detailMove("right",detailIndex);
				if(detailIndex<=0){
					$(this).animate({"opacity":0.2},'slow').css("cursor","default");
				}
				$("#caseDetailNext").animate({"opacity":1},'slow').css("cursor","pointer");
			}
		}
	});
	$("#caseDetailNext").click(function(){
		if($("#caseDetailContent ul").is(":animated")) return false;
		else{
			if(detailIndex>=count-1){ return false}
			else{
				
				detailIndex++;
				detailMove("left",detailIndex);
				if(detailIndex>=count-1){
					$(this).animate({"opacity":0.2},'slow').css("cursor","default");
				}
				$("#caseDetailPrev").animate({"opacity":1},'slow').css("cursor","pointer");
			}
		}
	});
}
function detailMove(f,j){
	if(f=="left"){
		$("#caseDetailContent ul").animate({"left":-j*848-80+"px"},"slow",function(){
			$(this).animate({"left":-j*848+"px"},"slow");
		});
	}else{
		$("#caseDetailContent ul").animate({"left":-j*848+80+"px"},"slow",function(){
			$(this).animate({"left":-j*848+"px"},"slow");
		});
	}
}
/*contact us*/
function contactUsAnimate(){
	$("#contactUsMap").animate({"margin-left":"105px"},1500,function(){
		$(this).animate({"margin-left":"125px"},'slow');
	});
	$("#contactInformation").animate({"margin-left":"-520px"},1000,function(){
		$(this).animate({"margin-left":"-490px"},500);
	});
	$("#contactUsTitle").animate({"margin-left":"-265px"},1500,function(){
		$(this).animate({"margin-left":"-235px"},500)
	});
}

