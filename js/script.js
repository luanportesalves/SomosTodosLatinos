function toggle(conteudo) {
    var display = document.getElementById("conteudo").style.display;
    document.getElementById("conteudo").style.display = 'none';
    document.getElementsByClassName("qrcode").style.justifyContent = 'center';
    if(display == "none") {
        document.getElementById("conteudo").style.display = 'block';
        document.getElementsByClassName("qrcode").style.justifyContent = 'center';
    }
    else {

        document.getElementById("conteudo").style.display = 'none';
        document.getElementsByClassName("qrcode").style.justifyContent = 'center';
    }
}