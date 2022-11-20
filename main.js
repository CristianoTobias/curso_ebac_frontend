$(document).ready(function () {
  let arrTarefas = [];
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#btn-cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoNovaTarefa = $("#endereco-tarefa-nova").val();
    if(!arrTarefas.includes(enderecoNovaTarefa.toUpperCase())){
      arrTarefas.push(enderecoNovaTarefa.toUpperCase())
      $("#lista-tarefas").append(`<li>${enderecoNovaTarefa}</li>`);
    $("#endereco-tarefa-nova").val("");
    }else{
      alert("Tarefa já adicionada!!!")
      $("#endereco-tarefa-nova").val("");
    }
    
  });
  $(document).on("click", "li", function () {
    $(this).toggleClass("riscado");
  });
});
