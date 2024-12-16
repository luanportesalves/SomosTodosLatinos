function toggle(el) {
    var display = getElementsByClassName(el).style.display;
    if(display == "none") {
        document.getElementsByClassName(el).style.display = 'block';

    }
    else {

        document.getElementsByClassName(el).style.display = 'none';

    }
}