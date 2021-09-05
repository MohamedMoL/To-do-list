function remove(val) {
    document.getElementById(val).value = "";
}
function finish(val) {
    var doc = document.getElementById(val);
    if(doc.style.textDecoration == "line-through") {
        doc.style.textDecoration = "";
    }
    else {
        doc.style.textDecoration = "line-through";
    }
}