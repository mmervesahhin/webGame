//alert("imported!");

$(function(){
    var preventShuffle=false;

    $("#shuffle").click(function(){
        if(!preventShuffle){
            let arr=["first","second","third","fourth","fifth"];

        let rand=Math.floor(Math.random()*5);
        $("#first").attr("id" , arr[rand]);
        $("#"+arr[rand]).attr("id" , "first");
        arr.splice(rand,1);

        rand=Math.floor(Math.random()*4);
        $("#second").attr("id" , arr[rand]);
        $("#"+arr[rand]).attr("id" , "second");
        arr.splice(rand,1);

        rand=Math.floor(Math.random()*3);
        $("#third").attr("id" , arr[rand]);
        $("#"+arr[rand]).attr("id" , "third");
        arr.splice(rand,1);

        rand=Math.floor(Math.random()*2);
        $("#fourth").attr("id" , arr[rand]);
        $("#"+arr[rand]).attr("id" , "fourth");
        arr.splice(rand,1);

        rand=Math.floor(Math.random()*1);
        $("#fifth").attr("id" , arr[rand]);
        $("#"+arr[rand]).attr("id" , "fifth");
        } else{
            $("#shuffle").effect( "shake", { direction: "right", times: 2, distance: 10}, 500 );
        }
    })

    $("#bulb").mouseenter(function(){
        $(this).removeClass("fa-solid fa-lightbulb fa-xl").addClass("fa-solid fa-lightbulb fa-2xl");
    })
    .mouseleave(function(){
        $(this).removeClass("fa-solid fa-lightbulb fa-2xl").addClass("fa-solid fa-lightbulb fa-xl");
    })

    var bulbClick=false;
    $("#bulb").click(function(){
        clickAudio.play();
        
        bulbClick=!bulbClick;

        if(bulbClick){
            $(".block").animate({color:"#d3d3d3"},1000);
        } else{
            $(".block").animate({color:"#FFF"},1000);
        }
    })

    var firstClick=true;
    $("#first").click(function(e){
        if(firstClick){
            $(this).css("background","brown").css("color","white");
            $(".word").css("padding-left","10px").append("S").css("left", 125-$(".word").width()/2);
            firstClick=false;
            preventShuffle=true;
        } else{
            $(this).effect( "shake", { direction: "up", times: 2, distance: 10}, 500 );
        }
    })

    var secondClick=true;
    $("#second").click(function(){
        if(secondClick){
            $(this).css("background","brown").css("color","white");
            $(".word").css("padding-left","10px").append("A").css("left", 125-$(".word").width()/2);
            secondClick=false;
            preventShuffle=true;
        } else{
            $(this).effect( "shake", { direction: "up", times: 2, distance: 10}, 500 );
        }
    })

    var thirdClick=true;
    $("#third").click(function(){
        if(thirdClick){
            $(this).css("background","brown").css("color","white");
            $(".word").css("padding-left","10px").append("Y").css("left", 125-$(".word").width()/2);
            thirdClick=false;
            preventShuffle=true;
        }else{
            $(this).effect( "shake", { direction: "up", times: 2, distance: 10}, 500 );
        }
    })

    var fourthClick=true;
    $("#fourth").click(function(){
        if(fourthClick){
            $(this).css("background","brown").css("color","white");
            $(".word").css("padding-left","10px").append("I").css("left", 125-$(".word").width()/2);
            fourthClick=false;
            preventShuffle=true;
        }else{
            $(this).effect( "shake", { direction: "up", times: 2, distance: 10}, 500 );
        }
    })

    var fifthClick=true;
    $("#fifth").click(function(){
        if(fifthClick){
            $(this).css("background","brown").css("color","white");
            $(".word").css("padding-left","10px").append("M").css("left", 125-$(".word").width()/2);
            fifthClick=false;
            preventShuffle=true;
        }else{
            $(this).effect( "shake", { direction: "up", times: 2, distance: 10}, 500 );
        }
    })

    var arr=["SAYIM","SAYI","MAYIS","AYI","YAS"];

    $(".widget").contextmenu(function(e){
        preventShuffle=false;
        e.preventDefault();
        
        firstClick=true;
        secondClick=true;
        thirdClick=true;
        fourthClick=true;
        fifthClick=true;

        var foundClass="";
        for(let i=0;i<5;i++){
            if($(".word").text()===arr[i])
                foundClass+=$(".word").text();
         }
         if(foundClass!="") {
            if($("."+foundClass).hasClass("initial")){
                trueAudio.play();
                $("."+foundClass).css("background","white").animate({backgroundColor:"#A52A2A"},1000).removeClass("initial");
                $("#first").css("background","white").css("color","black");
                $("#second").css("background","white").css("color","black");
                $("#third").css("background","white").css("color","black");
                $("#fourth").css("background","white").css("color","black");
                $("#fifth").css("background","white").css("color","black");
                $(".word").text("").css("padding-left","0px");
            } else{
                againAudio.play();
                $("."+foundClass).fadeOut(100,function(){
                    $("."+foundClass).fadeIn(100, function(){
                        $("."+foundClass).fadeOut(100, function(){
                            $("."+foundClass).fadeIn(100);
                        });
                    });
                });
                $(".word").effect( "shake", { direction: "right", times: 2, distance: 10}, 500, function(){
                    $(".word").text("").css("padding-left","0px");
                    $("#first").css("background","white").css("color","black");
                    $("#second").css("background","white").css("color","black");
                    $("#third").css("background","white").css("color","black");
                    $("#fourth").css("background","white").css("color","black");
                    $("#fifth").css("background","white").css("color","black");
                });
            }
         } else{
            falseAudio.play();
            $(".word").effect( "shake", { direction: "right", times: 2, distance: 10}, 500, function(){
                $(".word").text("").css("padding-left","0px");
                $("#first").css("background","white").css("color","black");
                $("#second").css("background","white").css("color","black");
                $("#third").css("background","white").css("color","black");
                $("#fourth").css("background","white").css("color","black");
                $("#fifth").css("background","white").css("color","black");
            } );
         }
    })
})