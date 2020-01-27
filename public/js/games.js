$(function () {

    // GET all games to append to join-game page
    $.ajax({
        url: "/api/games",
        method: "GET"
    }).done(function (response) {
        $("#game-div").empty();
        for (i = 0; i < response.length; i ++) {

            var game = $("<div>");
            var gameName = $("<p>");
            var gameTime = $("<p>");
            var button = $("<button class='join-game-btn'>Join Game</button>");
            button.attr("data-game-id", response[i].id);
            button.addClass("button");
            game.addClass("row");
            gameName.text(response[i].name);
            gameTime.text(response[i].time);
            game.append("<hr>");
            game.append(gameName);
            game.append(gameTime);
            game.append("<br>");
            game.append(button);
            $("#game-div").append(game);

        }
    })

    // GET all sports and append to drop-down select for sports
    $.ajax({
        url: "/api/sports",
        method: "GET"
    }).done(function (response) {
        $(".create-sport-dropdown").empty();
        for (i = 0; i < response.length; i++) {
            var option = $("<option>");
            option.addClass("option-sport");
            option.attr("data-sportId", response[i].id);
            option.attr("data-sportName", response[i].name);
            option.text(response[i].name);
            $(".create-sport-dropdown").append(option);
        }
    });

    // GET all neighborhoods and append to drop-down select for neighborhoods
    $.ajax({
        url: "/api/neighborhoods",
        method: "GET"
    }).done(function (response) {
        $(".create-neighborhood-dropdown").empty();
        for (i = 0; i < response.length; i++) {
            var option = $("<option>");
            option.addClass("option-neighborhood");
            option.attr("data-neighborhoodId", response[i].id);
            option.attr("data-neighborhoodName", response[i].name);
            option.text(response[i].name);
            $(".create-neighborhood-dropdown").append(option);
        }
    });

    // GET all parks and append to drop-down select for parks
    $.ajax({
        url: "/api/parks",
        method: "GET"
    }).done(function (response) {
        $(".create-park-dropdown").empty();
        for (i = 0; i < response.length; i++) {
            var option = $("<option>");
            option.addClass("option-park");
            option.attr("data-parkId", response[i].id);
            option.attr("data-parkName", response[i].name);
            option.text(response[i].name);
            $(".create-park-dropdown").append(option);
        }
    });

    // Loop through array for # of players for matchup and append to dropdown select for matchup
    x = [1, 2, 3, 4, 5];
    for (i = 0; i < x.length; i++) {
        var option = $("<option>");
        option.addClass("option-matchup");
        option.attr("data-matchup", x[i]);
        option.text(x[i] + " on " + x[i]);
        $(".create-matchup-dropdown").append(option);

    }

    // on-click event to POST new game
    $("#create-game-btn").on("click", function (event) {
        event.preventDefault();

        var gameTime = $("#create-game-date").val() + " " + $("#appt").val();

        var newGame = {
            name: $("#game-name").val().trim(),
            time: gameTime,
            parkId: $(".create-park-dropdown option:selected").attr("data-parkId")
        }

        $.ajax("/api/games", {
            type: "POST",
            data: newGame
        }).then(
            function () {
                console.log("Added new Game!");
                window.location.href = "/neighborhood";
                return false;
            }
        )
    });

});