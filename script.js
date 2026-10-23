
// Aguarda o carregamento do HTML
document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("btn-calcular");
    const resultado = document.getElementById("resultado");

    function calcularMedia() {
        const nome = document.getElementById("nome").value.trim();

        // Lê as quatro notas
        const camposNotas = [
            document.getElementById("nota1").value,
            document.getElementById("nota2").value,
            document.getElementById("nota3").value,
            document.getElementById("nota4").value
        ];

        // Lê a média mínima informada pelo usuário
        const campoMediaExigida =
            document.getElementById("media-exigida").value;

        // Verifica se os campos foram preenchidos
        if (
            nome === "" ||
            camposNotas.some(nota => nota === "") ||
            campoMediaExigida === ""
        ) {
            resultado.innerText = "Preencha todos os campos!";
            return;
        }

        // Converte os valores para números
        const notas = camposNotas.map(Number);
        const mediaExigida = Number(campoMediaExigida);

        // Valida as quatro notas
        if (notas.some(nota =>
            !Number.isFinite(nota) || nota < 0 || nota > 10
        )) {
            resultado.innerText =
                "As notas devem estar entre 0 e 10!";
            return;
        }

        // Valida a média mínima exigida
        if (
            !Number.isFinite(mediaExigida) ||
            mediaExigida < 0 ||
            mediaExigida > 10
        ) {
            resultado.innerText =
                "A média exigida deve estar entre 0 e 10!";
            return;
        }

        // Calcula a média das quatro notas
        const media =
            notas.reduce((soma, nota) => soma + nota, 0) / 4;

        // Compara a média do aluno com a exigida
        const aprovado = media >= mediaExigida;

        const situacao = aprovado ? "Aprovado" : "Reprovado";

        // Exibe o resultado
        resultado.innerText =
            "Aluno: " + nome +
            "\nMédia do aluno: " +
            media.toFixed(2).replace(".", ",") +
            "\nMédia exigida: " +
            mediaExigida.toFixed(2).replace(".", ",") +
            "\nSituação: " + situacao;
    }

    // Conecta o botão à função
    if (botao && resultado) {
        botao.addEventListener("click", calcularMedia);
    } else {
        console.error(
            "Não foi possível encontrar o botão ou a área de resultado."
        );
    }

});