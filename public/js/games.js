$(function () {
    console.log("page is ready!");

    // GET all sports and append to drop-down select for sports
    $.ajax({
        url: "/api/sports",
        method: "GET"
    }).done(function(response) {
        $(".create-sport-dropdown").empty();
        for (i = 0; i < response.length; i++) {
            var option = $("<option>");
            option.addClass("option-sport");
            option.attr("data-sportId", response[i].id);
            option.text(response[i].name);
            $(".create-sport-dropdown").append(option);
        }
    });

    // GET all neighborhoods and append to drop-down select for neighborhoods
    $.ajax({
        url: "/api/neighborhoods",
        method: "GET"
    }).done(function(response) {
        $(".create-neighorhood-dropdown").empty();
        for (i = 0; i <response.length; i++) {
            var option = $("<option>");
            option.addClass("option-neighborhood");
            option.attr("data-neighborhoodId", response[i].id);
            option.text(response[i].name);
            $(".create-neighorhood-dropdown").append(option);
        }
    });

    // GET all parks and append to drop-down select for parks
    $.ajax({
        url: "/api/parks",
        method: "GET"
    }).done(function(response) {
        console.log(response);
        $(".create-park-dropdown").empty();
        for (i = 0; i <response.length; i++) {
            var option = $("<option>");
            option.addClass("option-park");
            option.attr("data-parkId", response[i].id);
            option.text(response[i].name);
            $(".create-park-dropdown").append(option);
        }
    });

});