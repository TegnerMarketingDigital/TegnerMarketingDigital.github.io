function ativarDiferencial() {
  const tagLista = document.querySelectorAll(".diferencial ul li");
  const tagConteudo = document.querySelectorAll(".diferencial-conteudo-bg");

  if (tagLista.length && tagConteudo.length) {
    tagConteudo[0].classList.add("diferencial-conteudo-ativo");
    tagLista[0].classList.add("lista-ativa");

    function ativacao(index) {
      tagConteudo.forEach((div) => {
        div.classList.remove("diferencial-conteudo-ativo");
      });
      tagLista.forEach((item) => {
        item.classList.remove("lista-ativa");
      });

      tagConteudo[index].classList.add("diferencial-conteudo-ativo");
      tagLista[index].classList.add("lista-ativa");
    }
    tagLista.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativacao(index);
      });
    });
  }
}
ativarDiferencial();
