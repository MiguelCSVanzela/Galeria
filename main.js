$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });
  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });
  $("form").on("submit", function (event) {
    event.preventDefault();

    const enderecoNovaImagem = $("#endereco-nova-imagem").val();
    const novoItem = $('<li style="display: none;" class="image-item"></li>');

    $(`<img src="${enderecoNovaImagem}" class="image"/>`).appendTo(novoItem);
    $(`
        <div class="descricao-imagem">
            <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real" class="img-link">
            IMAGEM COMPLETA
            </a>
        </div> 
        `).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000);
    $("#endereco-nova-imagem").val("");
  });
});
