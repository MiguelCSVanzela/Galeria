$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })
    $('form').on('submit', function (event) {
        event.preventDefault();

        const enderecoNovaImagem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li style="display: none;"></li>');

        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="descricao-imagem">
            <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
            Ver Imagem em Tamanho Real
            </a>
        </div> 
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $("#endereco-nova-imagem").val('');

    })
})