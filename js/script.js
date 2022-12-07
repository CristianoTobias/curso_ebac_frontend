$(document).ready(function () {
  $('#telefone').mask("(00) 00000-0000")  
  $.validator.addMethod(
    "wordCount",
    function (value, element, wordCount) {
      let temp = [...value.split(" ")];

      if (temp.length > 1) {
        console.log(temp[1]);
        if (temp[1].length < 2 || temp[temp.length - 1].length <= 2) {
          return false;
        }
      }
      return value.split(" ").length > wordCount;
    },
    "Nome completo!"
  );
  $.validator.addMethod(
    "validaEmail",
    function (value) {
      var regex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
      return regex.test(value);
    },
    "E-mail inválido!"
  );
  $("#nome").keyup(function () {
    let $this = $(this);
    let valor = $this.val();
    valor = valor
      .toLowerCase()
      .replace(/[^a-z ]+/g, "")
      .replace(/[( )]+/g, " ");
    if (valor.indexOf(" ") > 0) {
      temp = [];
      for (word of valor.split(" ")) {
        if (word.length > 2) {
          temp.push(word[0].toUpperCase() + word.substring(1));
        } else {
          temp.push(word);
        }
      }
      $(this).val(temp.join(" "));
    } else {
      if (valor.length > 1) {
        $(this).val((valor[0].toUpperCase() + valor.substring(1)).trim());
      } else {
        $(this).val(valor);
      }
    }
  });
  $("#formulario").validate({
    //https://pt.stackoverflow.com/questions/162002/como-mudar-a-cor-do-input-usando-o-jquery-validate
    errorClass: "my-error-class",
    validClass: "my-valid-class",

    rules: {
      nome: {
        required: true,
        minlength: 3,
        wordCount: 1,
      },
      telefone: {
        required: true,
        minlength: 15,
      },
      email: {
        email: true,
        required: true,
        validaEmail: true,
      }
      
    },
    messages: {
      nome: {
        required: "Nome Completo!",
        minlength: "Nome completo!",
      },
      email: {
        email: "E-mail inválido!",
        required: "E-mail inválido!",
      },
      telefone: {
        required: "Telefone inválido!",
        minlength: "Telefone inválido!",
      }
    },
    submitHandler: function (form) {
      form.submit();
      alert("enviado com sucesso");
      $("#formulario").each(function () {
        this.reset();
      });
    },
  });
});
