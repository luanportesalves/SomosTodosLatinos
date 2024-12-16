function toggle(el) {
    var display = getElementById(el).style.display;
    if(display == "none") {
        document.getElementById(el).style.display = 'block';

    }
    else {

        document.getElementById(el).style.display = 'none';

    }
}