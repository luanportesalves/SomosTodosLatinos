function toggle(el) {
    var display = document.getElementById(el).style.display;
    document.getElementById(el).style.display = 'none';
    if(display == "none") {
        document.getElementById(el).style.display = 'block';
    }
    else {
        document.getElementById(el).style.display = 'none';
    }
}