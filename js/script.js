function toggle(conteudo) {
    var display = document.getElementById("conteudo").style.display;
    if(display == "none") {
        document.getElementById("conteudo").style.display = 'block';
        document.getElementById("conteudo").style.justifyContent = 'center';
    }
    else {

        document.getElementById("conteudo").style.display = 'none';
        document.getElementById("conteudo").style.justifyContent = 'center';
    }
}