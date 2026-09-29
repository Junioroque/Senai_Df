$(document).ready(function () {
  $("#btn-novidades").on("click", function () {
    $("#mensagem-novidades").hide().html("<div class='alert alert-info mb-0'>🎮 Novidades disponíveis! Continue acompanhando a Só Games.</div>").fadeIn(400);
  });

  $(".nav-link").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".galeria-img").on("click", function () {
    const descricao = $(this).attr("alt");
    $("#mensagem-novidades").html("<div class='alert alert-secondary mb-0'>Imagem selecionada: " + descricao + "</div>").fadeIn();
  });
});
