$(document).ready(function () {
    $("#click").click(otoc);
})
var delka;
function otoc() {
    $("#vypis").text("");
    var veta = $("#veta").val();
    for (delka = veta.length; delka >= 0; delka = delka - 1) {
        if (delka % 2 != 0) {
            veta = veta.toUpperCase();
            $("#vypis").append(veta.charAt(delka));
        }
        else {
            veta = veta.toLowerCase();
            $("#vypis").append(veta.charAt(delka))
        }
    }
}
