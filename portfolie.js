$("#p2_sprite").on("click", startP2);
function startP2() {
    console.log("startP2");

    $("#p2_sprite").off("click", startP2);

    $("#p2_sprite").removeClass("p2_start");
    $("#p2_sprite").addClass("p2_chok");

    $("#p2_sprite").on("animationend", slutP2);
}
function slutP2() {
    console.log("slutP2");

    $("#p2_sprite").off("animationend", slutP2);

    $("#p2_sprite").removeClass("p2_chok");
    $("#p2_sprite").addClass("p2_start");

    $("#p2_sprite").on("click", startP2);
}


$("#indianer_sprite").on("click", startIndianer);
function startIndianer() {
    console.log("startIndianer");

    $("#indianer_sprite").off("click", startIndianer);

    $("#indianer_sprite").removeClass("indianer_start");
    $("#indianer_sprite").addClass("indianer_glad");

    $("#indianer_sprite").on("animationend", slutIndianer);
}
function slutIndianer() {
    console.log("slutIndianer");

    $("#indianer_sprite").off("animationend", slutIndianer);

    $("#indianer_sprite").removeClass("indianer_glad");
    $("#indianer_sprite").addClass("indianer_start");

    $("#indianer_sprite").on("click", startIndianer);
}

