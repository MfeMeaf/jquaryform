// Reg Expression för email verifering
const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
);

// Hämtar knappen med id samt väntar på att den ska tryckas (Kör funktionen under)
$("#knapp").click(function () {
    // Skapar en const som är input av användarnamnet
    const user = $("#fname").val();
    // Avkollar längd "Om den är mindre än 3 så printar den ut att Användarnamn äf för kort"
    if (user.length < 3) {
        $("#Fel").text("Användarnamn är för kort");
    }
    // Avkollar längd "Om den är större än 3 kommer den att tömma en paragraph med id "Fel" och kära validering2
    if (user.length > 3) {
        $("#Fel").text("");
        validering2();
    };
});

function validering2() {
    // Hämtar bägga lösenorden som man angav
    const password = $("#psw").val();
    const password2 = $("#psw2").val();
    // Avkollar om de är samma eller om password är mindre än 5
    if (password != password2 || password < 5) {
        // If satser för bägge situationer "om de är samma eller för kort
        if (password.length < 5) {
            $("#Fel").text("Lösenord är för kort");
        } else if (password != password2) {
            $("#Fel").text("Lösenord är inte samma");
        }
    }
    // Kallar på validering3 om bägga är samma och första lösenord input är längre än 5
    if (password == password2 && password.length > 5) {
        validering3();
    }
}

function validering3() {
    // Hämtar email input
    const email = $("#mail").val();
    // Använder Reg Expression för att titta om email följer standarden
    // Om det ger sant skickar det användaren till sida 2
    if (emailRegexp.test(email) == true) {
        window.location.replace("sida2.html");
    // Om det ger falskt skriver den ut "Email formatet är fel" i paragraphen
    } else if (emailRegexp.test(email) == false) {
        $("#Fel").text("Email formatet är fel");
        // Sätter en röd linje under texten
        $("#mail").css("text-decoration", "underline red");
    }
}
