const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
);

$("#knapp").click(function () {
    const user = $("#fname").val();
    if (user.length < 3) {
        $("#Fel").text("Användarnamn är för kort");
    }

    if (user.length > 3) {
        $("#Fel").text("");
        validering2();
    };
});

function validering2() {
    console.log("Bruh")
    const password = $("#psw").val();
    const password2 = $("#psw2").val();
    if (password != password2 || password < 5) {
        if (password.length < 5) {
            $("#Fel").text("Lösenord är för kort");
        } else if (password != password2) {
            $("#Fel").text("Lösenord är inte samma");
        }
    }

    if (password == password2 && password.length > 5) {
        validering3();
    }
}

function validering3() {
    const email = $("#mail").val();
    if (emailRegexp.test(email) == true) {
        window.location.replace("sida2.html");
    } else if (emailRegexp.test(email) == false) {
        $("#Fel").text("Email formatet är fel");
        $("#mail").css("text-decoration", "underline red");
    }
}