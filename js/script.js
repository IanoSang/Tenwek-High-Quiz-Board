//Mark Calculation
var sum = 0;
function scoreCalculator(userValue) {
    var names = ["js","year","framework","known","type","function","dom","link","programming","element"];
    names.forEach(function(name) {
        var userValue = $("input:radio[name=" + name + "]:checked").val();
        if(userValue === "10") {
            sum+=10;
        }
    });
}


$(function() {
    $("#start-btn").click(function(event) {
        event.preventDefault();
        var userFirstName = $("#firstName").val();
        var userSecondName = $("#secondName").val();
        if(userFirstName.length === 0 || userSecondName.length === 0) {
            $("#no-name").show();
            $("#firstName").addClass("enter-name");
            $("#secondName").addClass("enter-name");
        } else {
            $("#student-details").hide();
            $("#page1").show();
        }
    })
    $("#arrow-right").click(function() {
        $("#page1").hide();
        $("#page2").show();
    })
    $("#arrow-left").click(function() {
        $("#page1").show();
        $("#page2").hide();
    })
    $("#submit").click(function(event) {
        event.preventDefault();
        $("#score").show();
        $("#page2").hide();
        scoreCalculator();
        var userFirstName = $("#firstName").val();
        var userSecondName = $("#secondName").val();

        $(".scoreDisplay").text(sum + "%/100%");
        if(sum < 50) {
            $(".name-display").text(`Dear ${userFirstName} ${userSecondName},
            You have scored poorly, Please Retake the Test`);
        }
        else if(sum >=50 && sum <80) {
            $(".name-display").text(`${userFirstName} ${userSecondName},
            You have Fairly Passed.`);
        }
        else {
            $(".name-display").text(`Congratulations ${userFirstName} ${userSecondName},
            You have excellently passed`);
        }

    })
    $("#retake").click(function(event) {
        event.preventDefault();
        location.reload();
    })
})
