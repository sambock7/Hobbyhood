// Add User to DB when signing up
$("#signup-btn").on("click", function (event) {
    event.preventDefault();

    var newUser = {
        email: ("#emailInput").val().trim(),
        password: ("#passwdInput").val().trim()
    }

    $.ajax("/api/users", {
        type: "POST",
        data: newUser
    }).then(
        function () {
            console.log("Added new User!");
            window.location.href = '/login';
            return false;
        }
    )
});

