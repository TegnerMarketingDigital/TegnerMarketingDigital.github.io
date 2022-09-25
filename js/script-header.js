function menuModal() {
  const fechar = document.querySelector(".cotainer-mobile div img");
  const modal = document.querySelector(".modal-menu-mobile");
  const btn = document.querySelector(".menu-mobile");
  console.log(fechar);
  console.log(modal);
  console.log(btn);

  function abrirModal() {
    modal.classList.add("menu-mobile-ativo");
  }

  function fecharModal() {
    modal.classList.remove("menu-mobile-ativo");
  }

  btn.addEventListener("click", abrirModal);
  fechar.addEventListener("click", fecharModal);
}
menuModal();
