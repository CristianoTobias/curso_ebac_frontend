$(document).ready(function () {
   let valida = false
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
  $.validator.addMethod(
    "cpf",
    function (value, element) {
      value = jQuery.trim(value);

      value = value.replace(".", "");
      value = value.replace(".", "");
      cpf = value.replace("-", "");
      while (cpf.length < 11) cpf = "0" + cpf;
      let expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
      let a = [];
      let b = new Number();
      let c = 11;
      for (i = 0; i < 11; i++) {
        a[i] = cpf.charAt(i);
        if (i < 9) b += a[i] * --c;
      }
      if ((x = b % 11) < 2) {
        a[9] = 0;
      } else {
        a[9] = 11 - x;
      }
      b = 0;
      c = 11;
      for (y = 0; y < 10; y++) b += a[y] * c--;
      if ((x = b % 11) < 2) {
        a[10] = 0;
      } else {
        a[10] = 11 - x;
      }

      var retorno = true;
      if (cpf.charAt(9) != a[9] || cpf.charAt(10) != a[10] || cpf.match(expReg))
        retorno = false;

      return this.optional(element) || retorno;
    },
    "CPF inválido"
  );

  $.validator.addMethod("cep",function(value){
    
   
    return valida
    
      
  })
  
  
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
  $("#cep").keyup(function () {
    let cep = $(this).val().replace(/\D/g, "");

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;
     
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        //Preenche os campos com "..." enquanto consulta webservice.
        $("#rua").addClass("my-valid-class");
        $("#bairro").addClass("my-valid-class");
        $("#cidade").addClass("my-valid-class");
        $("#uf").addClass("my-valid-class");

        //Consulta o webservice viacep.com.br/
       $.getJSON(
          "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
           function (dados) {
            if (!("erro" in dados)) {
              //Atualiza os campos comcep os valores da consulta.
              $("#rua").val(dados.logradouro);
              $("#bairro").val(dados.bairro);
              $("#cidade").val(dados.localidade);
              $("#uf").val(dados.uf);
              valida = true
              $('#numero').focus();
              
            } else {
              limpa_formulario_cep();
              valida = false
              
            }
            
          }
          
        );
       
        
      } else {
        
        limpa_formulario_cep();
      }
      
      
    }
    
  });
  $("form").validate({
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
      },
      cpf: {
        required: true,
        minlength: 14,
        cpf: true
      },
      cep: {
        required: true,
        minlength: 9,
        cep: true
      },

      numero: {
        required: true,
      },
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
      },
      cpf: {
        cpf: "CPF inválido!",
        required: "CPF inválido!",
        minlength: "CPF inválido",
      },
      cep: {
        required: "CEP inválido!",
        minlength: "CEP inválido!",
        cep: "CEP inválido"
      },
      
      numero: "Numero inválido!",
    },
    submitHandler: function (form) {
      form.submit();
      alert("enviado com sucesso");
      $("#formulario").each(function () {
        this.reset();
      });
    },
  });

  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");
  $("#numero").mask("00000");

  function limpa_formulario_cep() {
    // Limpa valores do formulário de cep.

    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
  }
  
  
});
