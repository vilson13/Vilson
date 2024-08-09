const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que a educação deve ser gratuita para todos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Uma população bem-educada é um ativo valioso, pois a educação gratuita resulta em uma força de trabalho qualificada, inovação tecnológica e crescimento econômico sustentável, fortalecendo a economia e a competitividade global do país"
            },
            {
                texto: "Não",
                afirmacao: "Quando as pessoas têm que investir financeiramente em sua educação, elas podem valorizar mais o aprendizado e estar mais motivadas a se destacar academicamente. A gratuidade total pode levar a um senso de complacência e desvalorização do ensino."
            }
        ]
    },
    {
        enunciado: "Com a descoberta da Inteligência Artificial, você acha que ficou melhor de estudar?",
        alternativas: [
            {
                texto: "Sim, a Inteligência Artificial (IA) melhorou significativamente os estudos.",
                afirmacao: "A IA permite a personalização do ensino, adaptando o conteúdo e o ritmo de aprendizagem às necessidades individuais dos alunos. Plataformas de aprendizado baseadas em IA podem identificar áreas onde os estudantes precisam de mais ajuda e fornecer recursos específicos para melhorar sua compreensão."
            },
            {
                texto: "Não, a Inteligência Artificial não necessariamente melhorou os estudos.",
                afirmacao: "A dependência excessiva da IA pode levar a uma diminuição das habilidades de pensamento crítico e resolução de problemas dos alunos. Ao confiar demasiadamente em ferramentas automatizadas, os estudantes podem não desenvolver plenamente suas capacidades analíticas e criativas."
            }
        ]
    },
    {
        enunciado: "Você é a favor ensino à distância é uma alternativa eficaz ao ensino presencial",
        alternativas: [
            {
                texto: "A favor",
                afirmacao: "O ensino à distância oferece flexibilidade para que os alunos aprendam no seu próprio ritmo e no seu próprio horário, o que pode ser especialmente benéfico para aqueles com compromissos de trabalho ou familiares."
            },
            {
                texto: "Contra",
                afirmacao: "Nem todos os alunos têm acesso a uma internet de alta qualidade ou a dispositivos adequados, o que pode aumentar as desigualdades educacionais."
            }
        ]
    },
    {
        enunciado: "O uso de tecnologia em sala de aula melhora a qualidade do ensino?",
        alternativas: [
            {
                texto: "Sim, é muito importante",
                afirmacao: "Tecnologias interativas podem tornar as aulas mais interessantes e engajantes, aumentando a motivação dos alunos e melhorando a retenção de informações."
            },
            {
                texto: "Não faz diferença",
                afirmacao: "A presença de dispositivos eletrônicos em sala de aula pode distrair os alunos, diminuindo sua concentração e produtividade."
            }
        ]
    },
    {
        enunciado: "Deveriam os alunos ter um papel mais ativo na definição do currículo escolar?",
        alternativas: [
            {
                texto: "Concordo",
                afirmacao: "Envolver os alunos na criação do currículo promove habilidades de liderança, tomada de decisão e responsabilidade, importantes para seu desenvolvimento pessoal e profissional."
            },
            {
                texto: "Discordo",
                afirmacao: "Um currículo definido majoritariamente pelos alunos pode levar à inconsistência na qualidade e no conteúdo da educação, comprometendo a formação acadêmica básica que é necessária para todos."
            }
        ]
    },
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
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();