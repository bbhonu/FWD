var counter = 0;



$("document").ready(function() {
    $("section").hide();
    $("#intro").show();
    $(".next").show();
    $(".fact").hide();
    $("#sources").hide();
    $("#theboard").hide();
    $(".answers p").click(function() {
        // $(".next").delay(5000).show(0);
        $(".next").delay(2000).slideDown();

        $(".fact").show();



    });

    $(".next").click(function() {
        $(".next").hide();
        $(".fact").hide();
        $(".answers p").css("backgroundColor", "#343ea2");
        // $("section").prev().hide();




    });

    $(".answers p").click(function() {
        $(".right").css("backgroundColor", "#8bc34a");
        $(".wrong").css("backgroundColor", "#eb142c");

    });


    $(".right").click(function() {
        counter = counter + 1;
        console.log(counter);
        clicked = true;

        if (counter = counter + 1) {
            counter--;
        }

    });

        $('#letsgo').click(function() {
        $("#q1").fadeIn(1500);
        $("#intro").hide();
        $("#header").attr("width", "300px");


    });




    $('#next1').click(function() {
        $("#q2").fadeIn(1500);
        $("#q1").hide();


    });

    $('#next2').click(function() {
        $("#q3").fadeIn(1500);
        $("#q2").hide();


    });

    $('#next3').click(function() {
        $("#q4").fadeIn(1500);
        $("#q3").hide();


    });


    $('#next4').click(function() {
        $("#q5").fadeIn(1500);
        $("#q4").hide();


    });

    $('#next5').click(function() {
        $("#q6").fadeIn(1500);
        $("#q5").hide();


    });

    $('#next6').click(function() {
        $("#q7").fadeIn(1500);
        $("#q6").hide();


    });

    $('#next7').click(function() {
        $("#q8").fadeIn(1500);
        $("#q7").hide();


    });


    $('#next8').click(function() {
        $("#q9").fadeIn(1500);
        $("#q8").hide();


    });

        $('#finish').click(function() {
        $("#done").show();
        $("#q9").hide();

document.getElementById("score").innerHTML=counter;




    });

                $('#showsources').click(function() {
        $("#sources").toggle();




    });




});


