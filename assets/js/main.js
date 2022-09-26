function menuMobile() {
  let exibirMenu = document.getElementById("menu");
  let display = window.getComputedStyle(exibirMenu, null).display;
  if (display == "none") {
    exibirMenu.style.display = "block";
    document.getElementsByClassName("menu-principal").style.height = "300px;";
  } else {
    exibirMenu.style.display = "none";
  }
  console.log(`Valor do display ${display}`);

  //exibirMenu.style.display = "flex";
  console.log("clicou");
}
