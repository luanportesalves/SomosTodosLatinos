function toggle(qrcode) {
    document.getElementsByClassName("qrcode").style.justifyContent = 'center';
    if(display == "none") {
        document.getElementsByClassName("qrcode").style.display = 'block';
        document.getElementsByClassName("qrcode").style.justifyContent = 'center';
    }
    else {

        document.getElementsByClassName("qrcode").style.display = 'none';
        document.getElementsByClassName("qrcode").style.justifyContent = 'center';
    }
}