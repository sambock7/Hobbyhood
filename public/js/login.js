$(function () {
    // Add User to DB when signing up
    $("#signup-btn").on("click", function (event) {
        event.preventDefault();
        console.log("You clicked a button!");

        var newUser = {
            email: $("#emailInput").val().trim(),
            password_hash: $("#passwdInput").val().trim()
        }

        $.ajax("/api/users", {
            type: "POST",
            data: newUser
        }).then(
            function () {
                console.log("Added new User!");
                window.location.href = "/login";
                return false;
            }
        )
    });

    $("#login-btn").on("click", function (event) {
        event.preventDefault();
        console.log("You clicked another button!");

        $.ajax("/login", {
            type: "POST",
            dataType: "json",
            data: {
                email: $("#emailInput").val().trim(),
                password_hash: $("#passwdInput").val().trim()
            }
        }).then(
            function() {
                console.log("You logged in!");
            }
        )
    })

});

/*
$.ajax({
            type: "POST",
            dataType: 'json',
            data: { "email": un.val(), "password": pwd.val() },
            url: "/rest/login/?format=json",
            success: function (data) {
                window.location.href = '/somewhereElse'
            }
        });
    }
    */