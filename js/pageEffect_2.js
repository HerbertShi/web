// JavaScript Document
var timer =null;
/*home*/
function homeContent(){
	 preNext();
	$("#home #homeContent").animate({"top":"60%","opacity":1},400,function(){
		$(this).animate({"top":"45%","opacity":1},'slow',function(){
			$(this).animate({"top":"50%"},'slow',function(){
			 	 homeContetAnimate();
			});
		});
	});	
}
function preNext(){
	$("#home #prev").animate({"margin-left":"-300px"},'slow');
	$("#home #next").animate({"margin-left":"270px"},'slow',function(){
		leftRightPic();
		$("#page").fadeIn();
	});
}
function leftRightPic(){
	$("#home #homeLeftPic").animate({"left":"53%"},500,function(){
		$(this).animate({"left":"50%"},'slow')
	});
	$("#home #homeRightPic").animate({"right":"53%"},500,function(){
		$(this).animate({"right":"50%"},'slow')
	});
}
/*home content move*/
function homeContetAnimate(){
	//初始化
	aIndex = 0;
	var spacing = 321;
		$("#homeContent ul").append($("#homeContent ul").html());
	var count = $("#homeContent ul li").size();
		$("#homeContent ul").css("width",count*321+"px");
	var ul_w = parseInt($("#homeContent ul").css("width"));
	
	timer = setInterval(function(){
			$("#next").trigger("click");
		},4000);
	
	$("#prev").bind("click",function(){
		clearInterval(timer);
		if($("#homeContent ul").is(":animated")) return false;
		else{
			
			var l = parseInt($("#homeContent ul").css("left"));
				if(l>=0){$("#homeContent ul").css("left",-ul_w/2+"px")}
				move(spacing);
		}
		timer = setInterval(function(){
			$("#next").trigger("click");
		},4000);
	});
	$("#next").bind("click",function(){
		clearInterval(timer);
		if($("#homeContent ul").is(":animated")) return false;
		else{
			
			var l = parseInt($("#homeContent ul").css("left"));
				if(l<=-ul_w/2){$("#homeContent ul").css("left","0px");} 
				move(-spacing);
		}
		timer = setInterval(function(){
			$("#next").trigger("click");
		},4000);
	})
}
var aIndex = 0;
function move(m){
	var l = parseInt($("#homeContent ul").css("left"));
	$("#homeContent ul").animate({"left":l+m+"px"},'slow');
	if(m<0){
		if(aIndex>=2) aIndex=0;
		else{
		aIndex++;
		}
	}else{
		if(aIndex<=0) aIndex=2;
		else{
		aIndex--;
		}
	}
		imgMove(aIndex);
}
function imgMove(aIndex){
	
	switch(aIndex){
		case 0: 
			$(".red").animate({"left":"0px"},1000,function(){
				$("#page a").eq(0).css({"background-position":"0 -22px"}).siblings().css({"background-position":"0 0"});
			});
			$(".blue").animate({"left":"900px"},1000);
			$(".yellow").animate({"left":"-900px"},1000);
			
		 break;
		case 1:
			$(".red").animate({"left":"-900px"},1000);
			$(".blue").animate({"left":"0px"},1000,function(){
				$("#page a").eq(1).css({"background-position":"0 -46px"}).siblings().css({"background-position":"0 0"});
			});
			$(".yellow").animate({"left":"900px"},1000);
			
		 break;
		case 2:
			$(".red").animate({"left":"900px"},1000);
			$(".blue").animate({"left":"-900px"},1000);
			$(".yellow").animate({"left":"0px"},1000,function(){
				$("#page a").eq(2).css({"background-position":"0 -69px"}).siblings().css({"background-position":"0 0"});
			});
			
		 break;
	}
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
	$("#serviceTitle").animate({"margin-left":"-182px"},1000,function(){
		$(this).animate({"margin-left":"-162px"},500);
	});
	$("#service #serviceLeft").animate({"margin-left":"-450px","opacity":1},1000,function(){
		$(this).animate({"margin-left":"-400px","opacity":1},500);
	});
	$("#service #serviceRight").animate({"margin-left":"238px","opacity":1},1000,function(){
		$(this).animate({"margin-left":"188px","opacity":1},500);
		serviceHover()
	});
	
}

function serviceHover(){
	var index  = 10;
	$("#serviceLeft .serviceTip").hover(function(){
		var obg = $(this); index++;
		obg.css("z-index",index);
		obg.find(".service_detail").show(0).stop(true, false).delay(400).animate({"left":"-38px","opacity":0.3},300,function(){
				$(this).animate({"left":"0","opacity":1},'slow');
				
			});
			obg.addClass("active").find("em").stop(true, false).fadeIn();
				
			$("#service #serviceRight").stop(true, false).animate({"left":"45%","opacity":0.5},300,function(){
				$(this).animate({"left":"100%","opacity":0},'slow');
			});
			$("#service .service_txt2").stop(true, false).animate({"margin-left":"-35px"},300,function(){
				$(this).animate({"margin-left":"0px"},'slow');
			});
			return false;	
		
		
	},function(){
		var obg = $(this);
		obg.find(".service_detail").show(0).stop(true, false).animate({"left":"-38px","opacity":0.7},'slow',function(){
				$(this).animate({"left":"58px","opacity":0},300,function(){
					$(this).hide();
					obg.removeClass("active").find("em").fadeOut();
				});
			});

			$("#service .service_txt2").stop(true, false).delay(500).animate({"margin-left":"-35px"},'slow',function(){
				$(this).animate({"margin-left":"0px"},500);

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

