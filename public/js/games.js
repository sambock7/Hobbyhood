$(function () {
    console.log("page is ready!");

    // GET all sports and append to drop-down select for sports
    $.ajax({
        url: "/api/sports",
        method: "GET"
    }).done(function(response) {
        console.log(response);

        $(".create-sport-dropdown").empty();
        for (i = 0; i < response.length; i++) {
            var option = $("<option>");
            option.addClass("option-sport");
            option.attr("data-sportId", response[i].id);
            option.text(response[i].name);
            $(".create-sport-dropdown").append(option);
        }
    });


});