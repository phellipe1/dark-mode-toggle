// pega valor de darkmode
let tela_escura = localStorage.getItem("darkmode");
// pega valor do botão
let troca_tema = document.getElementById('troca-tema');

troca_tema.addEventListener("click", toggleTema);

// ao clicar ele vê se o darkmode está 'ligado' ou nulo
function toggleTema(){
    tela_escura = localStorage.getItem('darkmode');
    tela_escura != 'ligado' ? darkmode() : lightmode();
}
// liga darkmode
function darkmode(){
    document.body.classList.add('darkmode');
    localStorage.setItem("darkmode", 'ligado');
}
// volta pro lightmode
function lightmode(){
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}
// quando atualizar o site, garante q o darkmode irá ligar
if(tela_escura == 'ligado'){
    darkmode();
}