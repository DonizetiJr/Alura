var atualizaDados = function(){
            var items = $(".item-total:visible");
                var total = 0;
                for(var i=0; i < items.length; i++) {
                    var conteudo = $(items[i]).text();
                    var preco = parseFloat(conteudo);
                    total += preco;
                    }
                $("#valor-total").text(total);
                $("#quantidade-de-itens").text(items.length);

        };

  var undo = function(){
      $("tr:visible").removeClass("recuperado");
      var trs = $("tr:hidden");
      trs.addClass("recuperado");
      trs.show();
  };

  var removeItem = function(event) {
    event.preventDefault();

    var quantidadeComoString = $("#quantidade-de-itens").text();
    var atual = parseInt(quantidadeComoString);
    var novaQuantidade = atual - 1;
    $("#quantidade-de-itens").text(novaQuantidade);

    var self = $(this);
    self.closest("tr").hide();
    atualizaDados();
  };

  var aposInicializado = function() {

    $(".remove-item").click(removeItem);
    atualizaDados();
  };
  $(aposInicializado);
