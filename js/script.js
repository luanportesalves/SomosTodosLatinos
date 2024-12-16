function toggle(el) {
    if(display == "none") {
        document.getElementsByClassName(el).style.display = 'block';
        document.getElementsByClassName(el).style.justifyContent = 'center';
    }
    else {

        document.getElementsByClassName(el).style.display = 'none';
        document.getElementsByClassName(el).style.justifyContent = 'center';
    }
}