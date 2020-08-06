// richiesta nome
var nome = prompt("Come ti chiami?");
// richiesta sesso
var sesso = prompt("Sei maschio o femmina? (Scrivi tutto minuscolo)")
// elemento HTML
var elemento = document.getElementById('nome');
// elaborazione informazioni
if ((nome == "") || ((sesso != "maschio") && (sesso != "femmina"))) {
  alert("Qualcosa é andato storto");
} else if (sesso == "maschio") {
  elemento.innerHTML = nome;
  elemento.className = elemento.classList + "nomeAzzurro";
} else if (sesso == "femmina") {
  elemento.innerHTML = nome;
  elemento.className = elemento.classList + "nomeRosa";
}
