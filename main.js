const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "Sua gestão priorizou a formação de base e a capacitação dos cidadãos."
      },
      {
        texto: "Saúde.",
        afirmacao: "Você garantiu atendimento básico de qualidade para a população mais vulnerável."
      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "Modernizou a rede de abastecimento, reduzindo o desperdício."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "Mobilizou a população para um consumo responsável dos recursos hídricos."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "Manteve a cidade limpa rapidamente com serviços mais eficientes."
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "Criou novas oportunidades econômicas a partir do reaproveitamento de resíduos."
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: "Melhorar o transporte público.",
        afirmacao: "Incentivou a mobilidade urbana sustentável e reduziu o fluxo de carros."
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "Desafogou o tráfego nas regiões mais movimentadas do município."
      }
    ]
  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: "A cidade ficou mais sustentável.",
        afirmacao: "Ao final do mandato, a cidade tornou-se uma referência em equilíbrio socioambiental."
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "Ao final do mandato, o desenvolvimento financeiro se destacou, deixando novos desafios ecológicos para o futuro."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = ""; // Limpa os botões anteriores
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Resumo da sua gestão:";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();