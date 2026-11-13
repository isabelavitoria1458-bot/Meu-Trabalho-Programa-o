// recebe as três notas e DEVOLVE a média 
function calcularMedia (nota1, nota2, nota3) {,
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}
function definirsituacao (media) {
 if (media >= 7) {
    return "Aprovado";
 }  else if (media >= 5) {
    return  "Recuperacao";
  }  else { 
    return  "Reprovado";
  } 

}
function classeDaSituacao (situacao) {
    if (situacao === "Aprovado") {
        return "aprovado"
    } else if (situacao === "Reprovado") {
        return "reprovado";
    } else {
        return "recuperado";
    }
}
function mostraMensagem (texto, classe) {
    let resultado = document.getElementById ("resultado");
    resultado.innerText = texto;
    resultado.className = classe;
}
function processarAluno() {
  let nome = document.getElementById("nome").value.trim();
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;
}
