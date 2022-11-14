let form = document.getElementById("form-validacao");
let campoA = document.getElementById("campo-A");
let campoB = document.getElementById("campo-B");
let containerMessageSuccess =  document.querySelector('.success-message');
let formValido = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let mensagemSucesso = `Validação completada com sucesso!`;
  if (formValido) {
    containerMessageSuccess.innerHTML = mensagemSucesso;
    containerMessageSuccess.style.display = "block";
    campoA.value = ""
    campoB.value = ""
    
  } 
});

campoA.addEventListener("keyup", function(e){
   formValido = parseFloat(e.target.value) < parseFloat(campoB.value);
   console.log(campoB.value)
   console.log(campoA.value)
   if (!formValido) {
    campoA.classList.add('error');
    document.querySelector('.error-message').style.display = "block";
    containerMessageSuccess.style.display = "none";
  }else {
    campoA.classList.remove('error');
    campoB.classList.remove('error');
    document.querySelector('.error-message').style.display = "none";
  }
})

campoB.addEventListener("keyup", function(e){
  formValido = parseFloat(e.target.value) > parseFloat(campoA.value);
  console.log(campoB.value)
  console.log(campoA.value)
  if (!formValido) {
   campoB.classList.add('error');
   document.querySelector('.error-message').style.display = "block";
   containerMessageSuccess.style.display = "none";
 }else {
   campoB.classList.remove('error');
   campoA.classList.remove('error')
   document.querySelector('.error-message').style.display = "none";
 }
})