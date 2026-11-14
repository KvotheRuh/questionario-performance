const questoes = [
  {
    id: 1,
    IDProva: 1,
    question: "No contexto de processamento, qual é a principal responsabilidade do escalonador de CPU?",
    options: [
      "Gerenciar a memória virtual dos processos bloqueados.",
      "Definir a ordem de execução das tarefas que estão na fila de prontas.",
      "Traduzir o código fonte para linguagem de máquina.",
      "Garantir que a energia estática do processador não seja desperdiçada."
    ],
    correct: 1,
    explanation: "A principal função do escalonador (scheduler) do Sistema Operacional é gerenciar a 'Fila de Prontos'. Ele utiliza algoritmos (como FCFS, Round Robin, SJF) para decidir qual processo que já está carregado na memória receberá o controle da CPU no próximo instante de execução."
  },
  {
    id: 2,
    IDProva: 1,
    question: "A métrica de 'Tempo de Espera' é definida como:",
    options: [
      "O tempo entre a chegada de um evento ao sistema e a resposta a ele.",
      "O tempo total entre a criação de uma tarefa e o seu encerramento.",
      "O tempo que a tarefa gasta utilizando as unidades de E/S.",
      "O tempo perdido pela tarefa na fila de prontas aguardando o processador."
    ],
    correct: 3,
    explanation: "O Tempo de Espera ($t_w$) contabiliza exclusivamente o período em que o processo está apto a executar (estado 'Pronto'), mas não pode avançar porque a CPU está alocada para outra tarefa. Tempos de processamento e tempos bloqueados aguardando I/O não entram no cálculo de espera da CPU."
  },
  {
    id: 3,
    IDProva: 1,
    question: "Como funciona um modo de escalonamento cooperativo?",
    options: [
      "O escalonador interrompe forçadamente as tarefas em intervalos regulares.",
      "Múltiplas tarefas cooperam para rodar simultaneamente na mesma unidade lógica (pipeline).",
      "A tarefa libera o processador ao terminar, solicitar E/S ou liberá-lo explicitamente.",
      "O compilador divide as tarefas cooperativamente antes da execução."
    ],
    correct: 2,
    explanation: "No escalonamento cooperativo (não-preemptivo), o Sistema Operacional não possui o poder de retirar a CPU de um processo à força. O sistema depende de que o próprio programa devolva o controle ao SO de forma voluntária, seja por finalizar sua rotina, fazer chamadas de sistema ou realizar operações de E/S."
  },
  {
    id: 4,
    IDProva: 1,
    question: "O que define o modo de escalonamento Preemptivo?",
    options: [
      "O escalonador reavalia a fila a cada interrupção ou chamada de sistema e pode retirar a CPU da tarefa atual.",
      "As tarefas são escalonadas apenas baseadas na quantidade de memória que consomem.",
      "O processador prevê (preempts) o resultado de saltos condicionais.",
      "As tarefas liberam a CPU explicitamente por meio de funções no código."
    ],
    correct: 0,
    explanation: "Diferente do modelo cooperativo, no escalonamento Preemptivo o Sistema Operacional mantém o controle absoluto. Através de interrupções de hardware (como o relógio do sistema), o SO pode suspender um processo em andamento contra a sua vontade para alocar a CPU a um processo mais prioritário ou garantir justiça de tempo."
  },
  {
    id: 5,
    IDProva: 1,
    question: "Qual é a lógica principal do algoritmo FCFS (First Come, First Served)?",
    options: [
      "A tarefa mais curta é executada primeiro.",
      "Cada tarefa ganha um intervalo de tempo fixo para executar.",
      "A execução ocorre na ordem exata de chegada das tarefas",
      "As tarefas de maior prioridade furam a fila."
    ],
    correct: 2,
    explanation: "O FCFS (Primeiro a Chegar, Primeiro a Ser Servido) é o algoritmo mais simples. Ele organiza os processos em uma fila estrita do tipo FIFO (First-In, First-Out). O processo que solicita a CPU primeiro a obtém e não sofre preempção por tempo; ele roda até finalizar ou solicitar E/S."
  },
  {
    id: 6,
    IDProva: 1,
    question: "Considere 3 processos: A (chega em 0, dura 5), B (chega em 2, dura 3) e C (chega em 4, dura 4). No FCFS, em que instante o processo C terminará sua execução?",
    options: [
      "12",
      "10",
      "8",
      "14"
    ],
    correct: 0,
    explanation: "Desenhando a linha do tempo sem interrupções: Processo A roda do instante 0 ao 5. B começa no 5 e dura 3, terminando no 8. C começa no 8 e dura 4, terminando no instante 12. O processo fica esperando na fila até que os anteriores terminem."
  },
  {
    id: 7,
    IDProva: 1,
    question: "Ainda considerando A (chega em 0, dura 5), B (chega em 2, dura 3) e C (chega em 4, dura 4) no FCFS, qual é o Tempo Médio de Execução dos processos?",
    options: [
      "5,00",
      "7,66",
      "6,33",
      "8,00"
    ],
    correct: 2,
    explanation: "O Tempo de Execução é (Instante de Fim - Instante de Chegada). A terminou em 5 (chegou em 0), Retorno = 5. B terminou em 8 (chegou em 2), Retorno = 6. C terminou em 12 (chegou em 4), Retorno = 8. A soma é 5 + 6 + 8 = 19. Dividindo por 3 processos, a média é 6,33."
  },
  {
    id: 8,
    IDProva: 1,
    question: "Nos processos escalonados em FCFS: A (chega em 0, dura 4), B (chega em 1, dura 5) e C (chega em 2, dura 6), qual é o Tempo de Espera do processo C?",
    options: [
      "9",
      "7",
      "5",
      "2"
    ],
    correct: 1,
    explanation: "O Tempo de Espera é `Início da Execução - Chegada na Fila`. Linha do tempo: A roda de 0 a 4. B roda de 4 a 9. C inicia no instante 9, mas havia chegado na fila no instante 2. Portanto, o tempo parado esperando foi 9 - 2 = 7."
  },
  {
    id: 9,
    IDProva: 1,
    question: "Qual é o Tempo Médio de Espera para os processos A, B e C usando o escalonador FCFS? Utilize os mesmos processos da questão anterior: A (chega em 0, dura 4), B (chega em 1, dura 5) e C (chega em 2, dura 6).",
    options: [
      "4,00",
      "3,33",
      "5,20",
      "2,50"
    ],
    correct: 1,
    explanation: "As esperas individuais (Início - Chegada) são: A não esperou (0-0=0); B iniciou no 4 (chegou 1), esperou 3; C iniciou no 9 (chegou 2), esperou 7. A soma total das esperas é 0 + 3 + 7 = 10. Dividindo por 3, a média exata é 3,33."
  },
  {
    id: 10,
    IDProva: 1,
    question: "Uma desvantagem clássica do algoritmo FCFS evidenciada pelo critério de 'Justiça' é que:",
    options: [
      "Ele gasta muito tempo realizando trocas de contexto desnecessárias.",
      "Tarefas curtas podem ficar presas muito tempo na fila aguardando uma tarefa longa terminar.",
      "Ele ignora totalmente a ordem de chegada das requisições.",
      "Ele não pode ser implementado em processadores com arquitetura superescalar."
    ],
    correct: 1,
    explanation: "Como não há preempção, se uma tarefa massiva de 100 horas chegar um milissegundo antes de uma tarefa de 1 segundo, a tarefa rápida será forçada a esperar as 100 horas inteiras, arruinando o tempo médio de resposta do sistema."
  },
  {
    id: 11,
    IDProva: 1,
    question: "Qual é a principal inovação do algoritmo de escalonamento Round Robin (RR) em relação ao FCFS?",
    options: [
      "A execução baseada exclusivamente na prioridade externa da tarefa.",
      "O uso de preempção baseada no tempo de duração mais curto.",
      "A limitação do uso da CPU através de um 'Quantum' de tempo.",
      "Ele funciona exclusivamente em sistemas cooperativos."
    ],
    correct: 2,
    explanation: "O Round Robin introduz o conceito de Quantum. Ele atende a fila por ordem de chegada, mas força a tarefa a liberar a CPU após esgotar o quantum estabelecido, enviando-a para o final da fila de prontos. Isso garante que todos os processos avancem um pouco de forma simultânea."
  },
  {
    id: 12,
    IDProva: 1,
    question: "Considere 5 processos: P1 (chega em 0, dura 6), P2 (chega em 1, dura 4), P3 (chega em 2, dura 5), P4 (chega em 4, dura 2) e P5 (chega em 5, dura 3) escalonados em Round Robin com Quantum=3. No instante t=3, o que acontece?",
    options: [
      "P1 sofre preempção, vai para o final da fila de prontos e P2 começa a executar.",
      "P1 continua executando pois tem a maior duração geral.",
      "O processo P3 fura a fila e inicia sua execução imediatamente.",
      "P1 finaliza permanentemente sua execução."
    ],
    correct: 0,
    explanation: "No instante t=0, P1 entra na CPU. Como o Quantum é 3, a fatia de tempo de P1 se esgota exatamente no instante t=3 (restando ainda 3 unidades de trabalho). O Sistema Operacional paralisa P1. Neste meio tempo (em t=1 e t=2), os processos P2 e P3 chegaram e entraram na fila. O SO passa a CPU para P2 (o próximo da fila) e coloca P1 no final para aguardar um novo turno."
  },
  {
    id: 13,
    IDProva: 1,
    question: "Considere 5 processos num cenário RR (Quantum=2): A (chega em 0, dura 4), B (chega em 1, dura 5), C (chega em 2, dura 2), D (chega em 3, dura 3) e E (chega em 4, dura 4). Qual será a ordem correta dos primeiros 5 blocos de execução da CPU?",
    options: [
      "A, B, C, A, D",
      "A, B, A, C, D",
      "A, B, C, D, E",
      "A, A, B, B, C"
    ],
    correct: 0,
    explanation: "Passo a passo (Q=2): 1) t=0 a 2: A executa. A fila fica [B, C]. A vai pro fim: [B, C, A]. 2) t=2 a 4: B executa. D e E chegam nesse período. Fila antes de B voltar: [C, A, D, E]. B vai pro fim. 3) t=4 a 6: C executa e finaliza permanentemente (pois dura exatamente 2). Fila fica: [A, D, E, B]. 4) t=6 a 8: A executa. 5) t=8 a 10: D executa. A sequência correta dos primeiros blocos é A, B, C, A, D."
  },
  {
    id: 14,
    IDProva: 1,
    question: "Calcule o tempo de execução do processo T1 no escalonador RR com Quantum=4. Os 5 processos são: T1 (chega em 0, dura 7), T2 (chega em 2, dura 3), T3 (chega em 3, dura 5), T4 (chega em 5, dura 2) e T5 (chega em 6, dura 4).",
    options: [
      "14",
      "11",
      "18",
      "7"
    ],
    correct: 0,
    explanation: "T1 roda de t=0 a 4 (restando 3 unidades). A fila nesse momento é [T2, T3]. T1 vai para o fim da fila: [T2, T3, T1]. T2 roda de t=4 a 7 e termina. Com as chegadas de T4 e T5, a fila em t=7 é [T3, T1, T4, T5]. T3 roda de t=7 a 11 e é interrompido ao fim do quantum. A fila fica [T1, T4, T5, T3]. Em t=11, T1 volta a executar e, como restam apenas 3 unidades de CPU, termina em t=14. Portanto, o instante de término (e o tempo de retorno de T1) é 14."
  },
  {
    id: 15,
    IDProva: 1,
    question: "Em um cenário RR (Quantum=2), temos 5 processos: X (chega em 0, dura 5), Y (chega em 2, dura 4), Z (chega em 4, dura 2), W (chega em 5, dura 3) e V (chega em 6, dura 1). Qual o Tempo de Espera calculado especificamente para a tarefa Y?",
    options: [
      "4",
      "8",
      "6",
      "2"
    ],
    correct: 0,
    explanation: "X roda de 0 a 2. Y roda de 2 a 4 (restam 2). X roda de 4 a 6 e Z de 6 a 8. Nesse período, Y fica aguardando na fila. Em t=8, Y volta a executar e termina em t=10. Assim, Y esperou de t=4 até t=8, totalizando 4 ciclos de espera."
  },
  {
    id: 16,
    IDProva: 1,
    question: "Em Round-Robin, o que ocorre com um processo quando o quantum se esgota antes do término de sua execução?",
    options: [
      "Ele passa imediatamente para o estado 'terminado'.",
      "Ele transita para o estado de 'processo bloqueado'.",
      "Ele retorna ao estado de 'processo pronto', aguardando nova chance no fim da fila.",
      "Ele paralisa o escalonador até receber mais quantum."
    ],
    correct: 2,
    explanation: "O vencimento do quantum não significa que a tarefa precisa de I/O (então ela não vai para 'Bloqueado'), e também não indica que terminou seu código (estado 'Terminado'). A preempção simplesmente tira a tarefa do processador e a devolve ao estado de 'Pronto', recolocando-a no fim da fila para aguardar um novo turno."
  },
  {
    id: 17,
    IDProva: 1,
    question: "Do ponto de vista teórico, o que acontece se configurarmos o 'Quantum' do Round Robin com um valor extremamente grande (tendendo ao infinito)?",
    options: [
      "O escalonador se degenera, comportando-se na prática como o algoritmo FCFS.",
      "O tempo de troca de contexto aumenta exponencialmente.",
      "As tarefas entrarão todas no estado bloqueado simultaneamente.",
      "O sistema utilizará múltiplas unidades funcionais em paralelo."
    ],
    correct: 0,
    explanation: "Se o Quantum for maior que o tempo de execução de todas as tarefas, o cronômetro nunca atingirá o limite antes do processo terminar espontaneamente. Consequentemente, as preempções por tempo nunca ocorrerão, e os processos serão rodados do início ao fim por ordem de chegada, exatamente o comportamento do FCFS."
  },
  {
    id: 18,
    IDProva: 1,
    question: "Sobre o Paralelismo em Nível de Instrução (ILP), quem é o principal responsável por identificar e executar instruções ao mesmo tempo?",
    options: [
      "O programador, ao utilizar bibliotecas de threads manualmente no código.",
      "O hardware e o compilador, de forma automática e transparente ao programador.",
      "O sistema operacional, por meio do escalonador de CPU Round Robin.",
      "O usuário final, ao configurar o clock do processador na BIOS."
    ],
    correct: 1,
    explanation: "O ILP é uma combinação de esforços do compilador e do hardware. A capacidade de executar múltiplas instruções ao mesmo tempo é feita automaticamente por eles, não exigindo que o programador controle isso diretamente."
  },
  {
    id: 19,
    IDProva: 1,
    question: "Por que a linguagem Python apresenta dificuldades nativas para explorar paralelismo real em múltiplos núcleos?",
    options: [
      "Porque o interpretador executa o código fora de ordem por padrão.",
      "Porque Python exige que o programador gerencie a memória cache manualmente.",
      "Porque o GIL (Global Interpreter Lock) impede a execução paralela de bytecode Python.",
      "Porque linguagens interpretadas não podem acessar a Unidade Lógica Aritmética."
    ],
    correct: 2,
    explanation: "Python não oferece controle direto sobre o ILP porque é uma linguagem interpretada, executando as instruções de forma sequencial[cite: 15, 16, 17]. Além disso, o GIL (Global Interpreter Lock) impede explicitamente a execução paralela do bytecode Python em múltiplos núcleos[cite: 18]."
  },
  {
    id: 20,
    IDProva: 1,
    question: "O que caracteriza uma 'dependência real de dados' que limita o paralelismo no processador?",
    options: [
      "A competição de duas instruções pelo mesmo barramento de memória.",
      "A necessidade de postergar a execução de uma instrução até que o valor de um parâmetro seja calculado pela instrução anterior.",
      "A ocorrência de um salto condicional (branch) que altera o fluxo do código.",
      "O bloqueio do processador causado por uma falha de hardware."
    ],
    correct: 1,
    explanation: "A 'dependência real de dados' (também chamada de leitura após escrita) ocorre quando uma instrução utiliza um dado que está sendo computado por uma instrução imediatamente anterior. Sendo assim, a execução da instrução seguinte precisa ser postergada até que os valores de seus parâmetros tenham sido calculados."
  },
  {
    id: 21,
    IDProva: 1,
    question: "Como os saltos condicionais afetam o desempenho do pipeline no processador?",
    options: [
      "Eles resolvem conflitos de memória ao pular instruções com erro.",
      "Eles melhoram a vazão forçando o hardware a acelerar o clock.",
      "Eles exigem que o programador reescreva o código para a linguagem C.",
      "Eles causam dependência procedural, impedindo que instruções seguintes sejam executadas até a condição ser resolvida."
    ],
    correct: 3,
    explanation: "A existência de saltos condicionais dificulta o uso do pipelining porque geram 'dependência procedural'. As instruções dispostas após os saltos não podem ser processadas até que a própria instrução condicional seja resolvida, ocasionando uma grande perda de oportunidade de paralelização."
  },
  {
    id: 22,
    IDProva: 1,
    question: "Diferentemente da dependência de dados, como a arquitetura do processador pode resolver fisicamente um 'conflito de recursos'?",
    options: [
      "Convertendo as instruções para operações de Entrada e Saída.",
      "Utilizando o GIL para bloquear o acesso simultâneo.",
      "Ignorando a instrução conflitante e passando para a próxima.",
      "Duplicando os recursos de hardware, como as unidades funcionais."
    ],
    correct: 3,
    explanation: "O conflito de recursos acontece quando há uma competição de instruções simultâneas pelo mesmo componente, como memória, barramento ou unidades funcionais (ex: somador da ULA). Diferentemente das lógicas de dados, esse tipo de conflito pode ser resolvido com engenharia, duplicando os recursos físicos na pastilha."
  },
  {
    id: 23,
    IDProva: 1,
    question: "Nas arquiteturas modernas, o conceito de 'Power-wall' representa qual limite físico imposto aos fabricantes de processadores?",
    options: [
      "A incapacidade de criar fontes de alimentação potentes o suficiente para computadores.",
      "A dificuldade em alimentar todos os transistores que cabem no chip sem gerar superaquecimento.",
      "A redução drástica da velocidade de acesso à memória RAM.",
      "O limite de instruções simultâneas que o ILP consegue extrair."
    ],
    correct: 1,
    explanation: "O termo 'Power-wall' define a barreira em que se tornou possível colocar mais transístores em um chip do que a capacidade física de conseguir alimentá-los (devido aos limites de resfriamento e dissipação). Além disso, tornou o consumo de 'energia estática' (em circuitos inativos) uma enorme preocupação de projeto."
  },
  {
    id: 24,
    IDProva: 1,
    question: "Diante dos limites físicos alcançados (como o Power-wall e o ILP-wall), qual passou a ser a principal estratégia para aumento de desempenho das CPUs?",
    options: [
      "O paralelismo de processadores, utilizando múltiplos núcleos.",
      "O aumento contínuo da frequência do clock de um único núcleo.",
      "A criação de programas puramente sequenciais sem threads.",
      "A substituição de processadores por HDDs de alta velocidade."
    ],
    correct: 0,
    explanation: "No passado, a principal estratégia consistia no aumento da frequência do clock do núcleo único. Devido aos novos limites, a estratégia contemporânea focou inteiramente no paralelismo de processadores, sendo que ninguém mais constrói processadores com apenas um único núcleo."
  },
  {
    id: 25,
    IDProva: 1,
    question: "Sobre o funcionamento do 'Pipeline' clássico no processamento de instruções, é correto afirmar que:",
    options: [
      "Ele sobrepõe a execução de múltiplas etapas, melhorando o aproveitamento de tempo.",
      "Ele diminui a frequência do clock para poupar energia.",
      "Ele reduz o tempo de latência de cada instrução individualmente.",
      "Ele bloqueia a busca de instruções até a gravação da instrução atual terminar."
    ],
    correct: 0,
    explanation: "O pipeline não deixa as etapas de uma instrução mais rápidas individualmente, mas permite a execução de múltiplas instruções de forma sobreposta, de modo que várias possam estar ativas simultaneamente em estágios diferentes (como busca, decodificação e execução), otimizando a vazão de todo o conjunto."
  },
  {
    id: 26,
    IDProva: 1,
    question: "A evolução para o modelo de 'Superpipeline' baseia-se fundamentalmente em:",
    options: [
      "Executar duas instâncias inteiras de cada estágio paralelamente em caminhos duplos.",
      "Aumentar o número de estágios encurtando o tempo de cada um e utilizar um clock interno com o dobro da velocidade.",
      "Diminuir a velocidade do clock para garantir maior precisão nos cálculos lógicos.",
      "Remover a necessidade de um decodificador de instruções no processador."
    ],
    correct: 1,
    explanation: "A técnica de Superpipelining é útil quando as etapas de segmentação exigem menos que um ciclo de clock. Ela aumenta o número de estágios e usa um clock interno com o dobro da velocidade, permitindo despachar 2 ou mais tarefas em um único ciclo do clock 'oficial'."
  },
  {
    id: 27,
    IDProva: 1,
    question: "O que distingue a Arquitetura Superescalar do Superpipeline?",
    options: [
      "O uso de interpretadores em vez de compiladores nativos.",
      "O processamento puramente sequencial, ignorando o ILP.",
      "A duplicação do pipeline de instrução, executando múltiplas instruções concorrentes usando múltiplas unidades funcionais.",
      "O bloqueio automático do código devido a gargalos procedurais."
    ],
    correct: 2,
    explanation: "Enquanto o Superpipeline lida com a subdivisão extrema do tempo, a arquitetura superescalar duplica literalmente a via de execução. Ela usa múltiplas unidades funcionais paralelas, permitindo executar instâncias inteiras de cada estágio em paralelo."
  },
  {
    id: 28,
    IDProva: 1,
    question: "Qual a principal diferença entre um 'Programa' e uma 'Tarefa' (ou Processo), conforme o material?",
    options: [
      "Um programa reside apenas na memória RAM, enquanto a tarefa reside no disco rígido.",
      "Um programa é uma entidade estática armazenada em disco, enquanto uma tarefa é dinâmica e representa a execução do programa.",
      "O programa é executado diretamente pelo usuário, enquanto a tarefa é executada exclusivamente pelo compilador.",
      "Não há diferença, os termos são sinônimos e indicam fluxos de código executados pela GPU."
    ],
    correct: 1,
    explanation: "Um Programa é um conjunto estático de instruções armazenado em disco ou memória secundária. Já a Tarefa (ou Processo) é dinâmica, representando a execução desse programa com estado, contexto mutável e interação constante com o sistema operacional."
  },
  {
    id: 29,
    IDProva: 1,
    question: "O que caracteriza o 'Pseudoparalelismo' no nível de Sistemas Operacionais?",
    options: [
      "A capacidade do processador de possuir vários núcleos físicos para executar código simultaneamente.",
      "O uso de GPUs para processar grandes matrizes de dados de aprendizado de máquina ao mesmo tempo.",
      "A rápida alternância de processos controlada pelo SO (escalonamento), dando a ilusão de que executam ao mesmo tempo.",
      "A reescrita manual do código pelo programador utilizando bibliotecas matemáticas avançadas."
    ],
    correct: 2,
    explanation: "O pseudoparalelismo ocorre quando o Sistema Operacional distribui (escalona) processos ou threads, trocando muito rapidamente a tarefa em execução. Isso dá ao usuário a sensação de paralelismo contínuo, mesmo que os processos estejam na verdade alternando o uso de um mesmo processador no tempo."
  },
  {
    id: 30,
    IDProva: 1,
    question: "Quais são os 3 estados principais de um processo?",
    options: [
      "Inativo, Paralelo e Finalizado.",
      "Kernel, Usuário e Despachante.",
      "Leve, Híbrido e Distribuído.",
      "Pronto, Em Execução e Bloqueado."
    ],
    correct: 3,
    explanation: "'Pronto' (aguardando o escalonador selecionar), 'Em Execução' (utilizando de fato o processador) e 'Bloqueado' (aguardando uma entrada de dados ou evento de E/S para poder voltar a ficar pronto)."
  },
  {
    id: 31,
    IDProva: 1,
    question: "Durante a execução de uma tarefa, o que compõe o seu 'Contexto de Execução' que precisa ser armazenado na memória?",
    options: [
      "A posição atual da execução (como PC e SP), áreas de memória, recursos em uso  e flags.",
      "Exclusivamente as variáveis globais e o código-fonte original escrito pelo programador.",
      "As ferramentas de hardware isoladas, como disco rígido, teclado e mouse conectados ao processo.",
      "O número de núcleos físicos disponíveis na GPU e a quantidade bruta de memória RAM do sistema."
    ],
    correct: 0,
    explanation: "O contexto de execução representa o estado interno da tarefa, englobando elementos críticos como registradores do processador (PC - Program Counter, SP - Stack Pointer), flags do SO (nível kernel/user), os valores das variáveis alocadas nas áreas de memória e os descritores de recursos utilizados (arquivos abertos, redes e semáforos)."
  },
  {
    id: 32,
    IDProva: 1,
    question: "Na troca de contexto, há uma separação de responsabilidades. Qual é a função do 'Despachante' (Dispatcher)?",
    options: [
      "Avaliar todas as tarefas prontas e calcular inteligentemente qual será a ordem justa de execução.",
      "Salvar o código do programa no disco rígido a cada ciclo para evitar perdas de dados em caso de falha elétrica.",
      "Transferir fisicamente o controle da CPU para o processo selecionado, implementando a troca em baixo nível.",
      "Isolar as áreas de memória dos usuários através da MMU (Memory Management Unit)."
    ],
    correct: 2,
    explanation: "Enquanto o Escalonador (Scheduler) é quem toma a decisão teórica de qual será o próximo processo a executar, o Despachante (Dispatcher) é o mecanismo de baixo nível encarregado de realizar a ação prática: salvar e restaurar contextos e transferir o controle da CPU para o processo selecionado."
  },
  {
    id: 33,
    IDProva: 1,
    question: "Qual a definição de 'Thread' na arquitetura de sistemas operacionais?",
    options: [
      "Um contêiner isolado de recursos (como arquivos e sockets) gerido diretamente pelo hardware do disco.",
      "Um fluxo de execução operando dentro de um processo ou dentro do próprio núcleo do sistema operacional.",
      "Uma linguagem de programação concorrente utilizada para criar sistemas distribuídos em clusters de rede.",
      "Um registrador interno do processador responsável por apontar o topo da pilha de memória (Stack Pointer)."
    ],
    correct: 1,
    explanation: "Threads são definidas essencialmente como fluxos de execução que operam compartilhando os recursos do processo que as contém (user threads) ou operando as atividades do núcleo do SO (kernel threads). Por padrão, todo processo recém-criado contém pelo menos uma thread executando suas instruções."
  },
  {
    id: 34,
    IDProva: 1,
    question: "Quais eventos fazem com que uma thread seja removida da fila de execução e entre no estado 'Bloqueada'?",
    options: [
      "Ser selecionada pelo escalonador para utilizar a CPU após ficar muito tempo no fim da fila.",
      "Terminar definitivamente todo o processamento de suas instruções lógicas predefinidas.",
      "Acionar a ferramenta de Program Counter (PC) para pular etapas lógicas do código por otimização.",
      "Esperar por operações de E/S, aguardar notificações, executar comandos de 'sleep' ou aguardar entrada em uma região sincronizada."
    ],
    correct: 3,
    explanation: "Uma Thread passa para o estado estado 'Bloqueada' quando necessita esperar por eventos externos imprevisíveis, tais como conclusão de Entrada/Saída, sinalizações de notificação de outras threads, pausas temporais ativas (sleep) ou ao tentar acessar blocos de código travados (sincronizados)."
  },
  {
    id: 35,
    IDProva: 1,
    question: "No modelo de threads N:1, qual é a principal desvantagem?",
    options: [
      "É um modelo extremamente pesado e complexo, inviabilizando aplicações que precisam de milhares de threads.",
      "Se uma thread de usuário realizar uma operação bloqueante, todo o processo trava, pois o núcleo enxerga apenas uma entidade.",
      "A gerência das threads é feita obrigatoriamente e exclusivamente pelo núcleo, atrasando o processamento das bibliotecas.",
      "Não permite o uso da linguagem Python em sistemas como Linux e FreeBSD."
    ],
    correct: 1,
    explanation: "O modelo N:1 é gerenciado via biblioteca inteiramente no nível do usuário, sendo muito rápido. O problema crítico é que o núcleo do SO é 'cego' para as múltiplas threads internas do processo; logo, se qualquer uma delas fizer uma chamada bloqueante, o núcleo suspende o processo inteiro, paralisando todas as outras threads."
  },
  {
    id: 36,
    IDProva: 1,
    question: "Sobre o modelo de threads 1:1, é correto afirmar que:",
    options: [
      "Gera um ambiente de nível de usuário onde as trocas de contexto são as mais rápidas possíveis e com custo nulo.",
      "É um modelo híbrido onde um pool dinâmico de threads do kernel é distribuído livremente sob demanda.",
      "Nesse modelo a gerência ocorre unicamente na biblioteca do usuário, sem qualquer interação de hardware ou do SO.",
      "Cada thread de usuário é mapeada diretamente em uma thread do núcleo, permitindo escalonamento independente em vários processadores."
    ],
    correct: 3,
    explanation: "No modelo 1:1, a gerência da thread é incorporada ao próprio núcleo. Como cada thread criada no espaço do usuário tem um representante no kernel, o SO pode alocá-las independentemente em vários núcleos de processamento físico. A desvantagem desse modelo é a escalabilidade menor, esbarrando em alguns milhares de threads."
  },
  {
    id: 37,
    IDProva: 1,
    question: "Quais são as características principais e os desafios do modelo de threads híbrido (N:M)?",
    options: [
      "Ele mapeia dinamicamente threads de usuário em um pool de threads de núcleo que varia com a demanda, mas sofre com alta complexidade e alto custo de gerência.",
      "Ele força N processadores físicos a agirem como 1 único processador virtual, simplificando a gerência do núcleo.",
      "Garante isolamento absoluto de memória, dispensando completamente o uso da MMU do hardware no processo.",
      "É de implementação extremamente simples, com custo de gerência nulo, sendo o padrão ouro dos sistemas modernos baseados em GNU."
    ],
    correct: 0,
    explanation: "O modelo N:M tenta extrair o melhor da leveza do modo usuário com o melhor da robustez do modo kernel . Ele mapeia múltiplas user threads para um pool variável de kernel threads. Contudo, essa elasticidade arquitetural eleva severamente a complexidade de implementação do sistema e o custo de gerenciamento."
  },
  {
    id: 38,
    IDProva: 1,
    question: "Segundo os critérios de avaliação de escalonadores, como é definida a métrica de 'Tempo de Resposta'?",
    options: [
      "O tempo gasto pela tarefa utilizando as unidades funcionais de Entrada e Saída.",
      "O tempo total decorrido entre a criação de uma tarefa e o seu encerramento.",
      "O tempo exato entre a chegada de um evento ao sistema e o momento em que ele emite a primeira resposta a esse evento.",
      "A soma de todos os períodos em que a tarefa aguardou na fila de processos prontos."
    ],
    correct: 2,
    explanation: "O Tempo de Resposta ($t_r$) é a métrica que avalia a interatividade do sistema, medindo o tempo exato entre a chegada de um evento ao sistema e o momento em que a primeira resposta a esse evento é gerada. Não deve ser confundido com o Tempo de Vida ($t_t$), que mede o tempo total até a conclusão do processo."
  },
  {
    id: 39,
    IDProva: 1,
    question: "Qual estratégia física permite que o hardware extraia paralelismo oculto ao buscar dados e instruções simultaneamente?",
    options: [
      "A unificação de todas as memórias cache em um único bloco de alta capacidade.",
      "A conversão automática do código fonte para instruções interpretadas por GPGPUs.",
      "A redução da frequência de clock interno para sincronizar a Unidade Lógica Aritmética.",
      "A separação física dos barramentos e das memórias cache dedicadas a dados e a instruções."
    ],
    correct: 3,
    explanation: "Uma das maiores oportunidades de paralelização ocultas exploradas pelos processadores modernos é a separação de barramentos e caches (Arquitetura Harvard). Ao ter vias e caches separadas para dados e para instruções, o processador consegue realizar a busca de ambos de forma totalmente independente e paralela, evitando o gargalo de acesso único."
  },
  {
    id: 40,
    IDProva: 1,
    question: "A Troca de Contexto é uma operação estrutural essencial em sistemas operacionais multitarefa. Quais são os três passos sequenciais que a compõem?",
    options: [
      "Bloquear a thread atual, acionar o compilador e aguardar a interrupção do hardware.",
      "Salvar o contexto da tarefa em execução, escolher a próxima tarefa a executar e restaurar o contexto da próxima tarefa.",
      "Limpar a memória RAM, transferir o código do disco rígido e reiniciar o Program Counter (PC).",
      "Executar o código na Unidade Lógica Aritmética, gravar os dados e liberar os semáforos."
    ],
    correct: 1,
    explanation: "A troca de contexto consiste estritamente em três etapas administrativas essenciais: (1) Salvar o contexto da tarefa atual (registradores, PC, SP) para não perder seu estado; (2) Escolher a próxima tarefa a executar (função do escalonador); e (3) Restaurar o contexto da próxima tarefa escolhida, para que ela assuma a CPU exatamente de onde havia parado anteriormente."
  },

  // ===========================================================================
  // RA 1
  // ===========================================================================

  {
    id: 41,
    IDProva: 2,
    question: "Utilizando a representação em complemento de dois com 8 bits, qual é a codificação binária correta para o número decimal -25?",
    options: [
      "1001 1001",
      "1110 0110",
      "1110 0111",
      "1110 1001"
    ],
    correct: 2,
    explanation: "Passo a passo: (1) Escreva o módulo 25 em binário de 8 bits: 25 = 16 + 8 + 1 = 0001 1001. (2) Obtenha o complemento de um invertendo todos os bits: 1110 0110. (3) Obtenha o complemento de dois somando 1 ao resultado: 1110 0110 + 1 = 1110 0111. Conferência: -128 + 64 + 32 + 4 + 2 + 1 = -25."
  },
  {
    id: 42,
    IDProva: 2,
    question: "Qual é o valor decimal correspondente à sequência binária 1101 0110, sabendo que ela está codificada em complemento de dois com 8 bits?",
    options: [
      "-42",
      "-41",
      "-86",
      "214"
    ],
    correct: 0,
    explanation: "Passo a passo: (1)Inverta todos os bits (complemento de um): 1101 0110 -> 0010 1001. (2) Some 1 para descobrir o módulo em binário: 0010 1001 + 1 = 0010 1010. (3) Converta 0010 1010 para decimal: 32 + 8 + 2 = 42. Aplicando o sinal negativo identificado no início, o resultado é -42."
  },
  {
    id: 43,
    IDProva: 2,
    question: "De que maneira a Arquitetura de Harvard supera o gargalo de acesso à memória característico da Arquitetura de von Neumann?",
    options: [
      "Armazenando dados e instruções em uma única memória unificada controlada por um barramento compartilhado.",
      "Separando fisicamente a memória de instruções da memória de dados, cada qual com seu próprio barramento independente.",
      "Eliminando a Unidade Lógica e Aritmética (ULA) e executando operações diretamente nos registradores de E/S.",
      "Utilizando exclusivamente discos magnéticos como extensão direta dos registradores internos da CPU."
    ],
    correct: 1,
    explanation: "Na arquitetura de von Neumann, dados e instruções compartilham a mesma memória e o mesmo barramento, impedindo buscas simultâneas. Na Arquitetura de Harvard, a unidade de controle acessa memórias distintas de instruções e dados por barramentos independentes, permitindo ler uma instrução e transferir um dado ao mesmo tempo."
  },
  {
    id: 44,
    IDProva: 2,
    question: "Na arquitetura de von Neumann, qual é a função conjunta dos registradores MAR (Memory Address Register) e MBR (Memory Buffer Register) durante uma operação de leitura na memória principal?",
    options: [
      "O MAR guarda a próxima instrução a executar e o MBR aponta para o topo da pilha do programa.",
      "O MAR define o limite máximo de memória do processo e o MBR armazena o endereço base da partição.",
      "O MAR decodifica o opcode da instrução atual e o MBR realiza somas e subtrações na ULA.",
      "O MAR recebe o endereço da célula de memória a ser lida e o MBR armazena temporariamente o dado transferido da memória."
    ],
    correct: 3,
    explanation: "Durante um acesso à RAM, a CPU coloca no MAR (Memory Address Register) o endereço exato da posição desejada. Em seguida, o dado lido dessa posição (ou o dado a ser gravado nela) trafega pelo barramento e fica armazenado temporariamente no MBR (Memory Buffer Register) para uso interno do processador."
  },
  {
    id: 45,
    IDProva: 2,
    question: "Na hierarquia dos níveis de transformação entre um problema computacional e o hardware físico (elétrons), o que distingue a camada ISA (Instruction Set Architecture) da camada de Microarquitetura?",
    options: [
      "A ISA trata apenas do sistema operacional, enquanto a Microarquitetura representa o código-fonte em alto nível.",
      "A ISA corresponde às portas lógicas físicas, enquanto a Microarquitetura define o algoritmo escolhido pelo programador.",
      "A ISA especifica o conjunto de instruções e a interface visível ao software, enquanto a Microarquitetura define o projeto dos blocos lógicos que implementam essa ISA.",
      "A ISA gerencia exclusivamente dispositivos externos de E/S, enquanto a Microarquitetura compila programas em tempo real."
    ],
    correct: 2,
    explanation: "A ISA funciona como o contrato entre software e hardware, definindo as instruções, registradores e modos de endereçamento que o compilador pode gerar. Já a Microarquitetura está um nível abaixo na abstração e descreve como os circuitos e blocos lógicos internos são organizados para executar aquelas instruções."
  },
  {
    id: 46,
    IDProva: 2,
    question: "Supondo que cada byte seja uma unidade individualmente endereçável, quantos bits são necessários para endereçar completamente uma memória principal de 32 GB?",
    options: [
      "32 bits",
      "35 bits",
      "36 bits",
      "40 bits"
    ],
    correct: 1,
    explanation: "Passo a passo: (1) Converta a unidade GB para potência de 2: 1 GB = 2^30 bytes. (2) Converta o multiplicador 32 para potência de 2: 32 = 2^5. (3) Multiplique as potências somando os expoentes: 32 GB = 2^5 * 2^30 = 2^35 bytes. (4) O expoente indica diretamente a quantidade de bits de endereço necessários: 35 bits."
  },
  {
    id: 47,
    IDProva: 2,
    question: "Considere uma variável inteira com sinal (assinada, em complemento de dois) armazenada em exatamente 6 bits. Qual é o intervalo completo entre o menor e o maior valor decimal que essa variável consegue representar?",
    options: [
      "-64 a +63",
      "-31 a +32",
      "-32 a +31",
      "0 a 63"
    ],
    correct: 2,
    explanation: "Passo a passo: Para uma variável assinada de n = 6 bits: (1) O menor valor possível é dado por -2^(n-1) = -2^(6-1) = -2^5 = -32. (2) O maior valor possível é dado por 2^(n-1) - 1 = 2^(6-1) - 1 = 2^5 - 1 = 32 - 1 = +31. Portanto, o intervalo válido vai de -32 a +31."
  },
  {
    id: 48,
    IDProva: 2,
    question: "Qual é a representação correta do número hexadecimal 0x2D nas bases binária (8 bits) e decimal, respectivamente?",
    options: [
      "Binário: 00101101 | Decimal: 45",
      "Binário: 00101110 | Decimal: 46",
      "Binário: 00111101 | Decimal: 61",
      "Binário: 00101011 | Decimal: 43"
    ],
    correct: 0,
    explanation: "Passo a passo: (1) Converta cada dígito hexadecimal para 4 bits: o dígito '2' equivale a 0010 em binário; o dígito 'D' (13 em decimal = 8 + 4 + 1) equivale a 1101 em binário. (2) Junte os dois blocos para formar o número de 8 bits: 00101101. (3) Para converter para decimal, multiplique pelas potências de 16: (2 * 16^1) + (13 * 16^0) = 32 + 13 = 45."
  },
  {
    id: 49,
    IDProva: 2,
    question: "Do ponto de vista do Sistema Operacional, o que ocorre quando um programa em execução no 'modo usuário' precisa acessar diretamente um dispositivo de Entrada/Saída (E/S)?",
    options: [
      "A CPU executa a instrução de E/S diretamente no modo usuário, pois periféricos não exigem proteção.",
      "O compilador altera automaticamente o bit de modo da CPU sem intervenção do núcleo do SO.",
      "A memória principal bloqueia permanentemente o Program Counter (PC) até que o usuário reinicie o processo.",
      "O programa deve realizar uma chamada de sistema para transferir o controle ao núcleo em modo kernel."
    ],
    correct: 3,
    explanation: "No modo usuário, a CPU restringe o conjunto de instruções permitidas e bloqueia o acesso direto ao hardware e às áreas protegidas de memória. Para utilizar serviços privilegiados como operações de E/S, a aplicação invoca uma chamada de sistema, fazendo com que o SO assuma o controle em modo kernel."
  },
  {
    id: 50,
    IDProva: 2,
    question: "Qual é o papel do registrador interno Stack Pointer (SP) durante a execução de um programa?",
    options: [
      "Guardar o código binário (opcode) da instrução que está sendo decodificada no ciclo atual.",
      "Apontar para o topo da pilha do programa na memória, onde ficam variáveis locais, parâmetros e endereços de retorno.",
      "Armazenar exclusivamente o endereço da próxima instrução a ser buscada na memória principal.",
      "Converter endereços virtuais em físicos antes de cada acesso à memória cache."
    ],
    correct: 1,
    explanation: "Enquanto o Program Counter (PC) guarda o endereço da próxima instrução a ser executada, o Stack Pointer (SP) aponta sempre para o topo da pilha ativa na memória RAM, região utilizada para empilhar parâmetros de entrada, variáveis locais e o endereço de retorno do PC nas chamadas de sub-rotinas."
  },
  {
    id: 51,
    IDProva: 2,
    question: "Em um sistema que utiliza memória virtual por partições, a tabela de partições indica que o processo ativo está alocado em uma partição com Base = 24.500 e Limite = 8.200. Se o processo gerar o endereço lógico 6.750, qual será o endereço físico acessado na RAM?",
    options: [
      "31.250",
      "17.750",
      "32.700",
      "Ocorrerá uma interrupção de violação de partição (partition violation)."
    ],
    correct: 0,
    explanation: "Passo a passo: (1) Verifique a regra de proteção da MMU: o endereço lógico (EL) deve ser estritamente menor que o Limite (L). Como 6.750 < 8.200, o acesso é válido. (2) Calcule o endereço físico somando o registrador Base ao endereço lógico: EF = Base + EL = 24.500 + 6.750 = 31.250."
  },
  {
    id: 52,
    IDProva: 2,
    question: "Considere um sistema com memória virtual por segmentação em que o processo ativo gera o endereço lógico bidimensional [2 : 4.300]. Na tabela de segmentos desse processo, a entrada do segmento 2 registra Base = 18.000 e Limite = 5.000. Qual será a ação da MMU?",
    options: [
      "Traduzir para o endereço físico 23.000, somando Base e Limite.",
      "Gerar uma interrupção de violação de segmento (segmentation violation).",
      "Traduzir para o endereço físico 22.300, pois o deslocamento está dentro do limite.",
      "Traduzir para o endereço físico 13.700, subtraindo o offset da base."
    ],
    correct: 2,
    explanation: "Passo a passo: (1) Localize a entrada S = 2 na tabela de segmentos, obtendo Limite L = 5.000 e Base B = 18.000. (2) Teste a condição de limite (O < L): como o offset O = 4.300 é menor que L = 5.000, não há violação de acesso. (3) Calcule o endereço físico: EF = B + O = 18.000 + 4.300 = 22.300."
  },
  {
    id: 53,
    IDProva: 2,
    question: "Em uma CPU de 32 bits com paginação e páginas de 4 KB (2^12 bytes), um processo gera o endereço lógico 0x004A21BC. Sabendo que a tabela de páginas mapeia essa página para o quadro físico 0x0007D, qual é o endereço físico resultante?",
    options: [
      "0x004A207D",
      "0x0007D1BC",
      "0x0007D4A2",
      "0x0051F1BC"
    ],
    correct: 1,
    explanation: "Passo a passo: (1) Como o tamanho da página é 4 KB = 2^12 bytes, os 12 bits menos significativos (3 últimos dígitos hexadecimais) formam o offset e os 20 bits mais significativos (5 primeiros dígitos hexadecimais) identificam a página. (2) Decomponha 0x004A21BC: página = 0x004A2 e offset = 0x1BC. (3) Substitua o número da página pelo quadro físico correspondente (0x0007D) mantendo o mesmo offset (0x1BC): o endereço físico final é 0x0007D1BC."
  },
  {
    id: 54,
    IDProva: 2,
    question: "Sobre o conceito de 'espaço de endereçamento' de um processador, qual afirmação está correta?",
    options: [
      "É determinado exclusivamente pela quantidade de pentes de memória RAM instalados na placa-mãe.",
      "Todo endereço pertencente ao espaço de endereçamento do processador aponta obrigatoriamente para um byte físico de RAM.",
      "Processadores de 64 bits possuem sempre espaço de endereçamento menor que processadores de 32 bits.",
      "Depende da arquitetura da CPU e da largura do barramento de endereços, dividindo-se em endereços válidos (com RAM) e inválidos (sem RAM)."
    ],
    correct: 3,
    explanation: "O espaço de endereçamento representa a faixa total de endereços que o processador é capaz de gerar (por exemplo, 2^32 ou 2^48 endereços), independentemente da quantidade de RAM instalada. Quando há memória RAM física mapeada naquela posição, o endereço é válido; caso contrário, é um endereço inválido."
  },
  {
    id: 55,
    IDProva: 2,
    question: "Em uma tabela de páginas, qual é a diferença funcional entre os bits de controle 'Present' e 'Dirty'?",
    options: [
      "'Present' indica se a página está carregada na memória RAM; 'Dirty' indica se a página foi modificada em RAM após ser carregada.",
      "'Present' autoriza operações de escrita na página; 'Dirty' indica que a página pertence ao código do núcleo (kernel).",
      "'Present' aponta para o endereço base da tabela de páginas; 'Dirty' sinaliza que o endereço lógico é inválido.",
      "'Present' informa que a página foi lida recentemente; 'Dirty' indica que a página nunca poderá ser removida da RAM."
    ],
    correct: 0,
    explanation: "A flag 'Present' informa à MMU se a página reside atualmente na RAM física (caso contrário, ocorrerá uma falta de página para buscá-la no disco). Já a flag 'Dirty' (página suja) marca que houve escrita naquela página em RAM, indicando ao SO que ela precisará ser gravada de volta no disco antes de ser substituída."
  },
  {
    id: 56,
    IDProva: 2,
    question: "Qual é a principal motivação e o principal custo associado ao uso de tabelas de páginas multiníveis em comparação com uma tabela de páginas linear de nível único?",
    options: [
      "Elas aceleram cada tradução individual eliminando a necessidade do TLB, mas aumentam o desperdício de RAM em processos pequenos.",
      "Elas impedem que processos grandes executem na RAM, mas reduzem o tamanho físico das páginas de 4 KB para 64 bytes.",
      "Elas economizam RAM em processos pequenos ao alocar apenas as subtabelas utilizadas, mas exigem mais acessos à memória por tradução quando ocorre erro no TLB.",
      "Elas eliminam completamente a fragmentação interna das páginas, mas inviabilizam o compartilhamento de bibliotecas entre processos."
    ],
    correct: 2,
    explanation: "Em uma tabela de 1 nível de 32 bits, cada processo ocupa 4 MB fixos mesmo que use poucas páginas. As tabelas multiníveis estruturam o mapeamento em árvore, alocando apenas as subtabelas necessárias (economizando muita RAM em processos pequenos), porém cobram o custo de exigir múltiplos acessos à RAM para percorrer os níveis da tabela."
  },
  {
    id: 57,
    IDProva: 2,
    question: "Sobre o Translation Lookaside Buffer (TLB), o que acontece com seu conteúdo quando o Sistema Operacional realiza uma troca de contexto entre dois processos distintos?",
    options: [
      "As entradas do TLB permanecem intactas, pois todos os processos compartilham exatamente os mesmos quadros físicos.",
      "O TLB é transferido integralmente para o disco rígido para liberar espaço para a pilha do novo processo.",
      "O TLB dobra automaticamente sua quantidade de entradas para comportar as páginas dos dois processos.",
      "As entradas do TLB precisam ser limpas, pois o novo processo utiliza uma tabela de páginas diferente."
    ],
    correct: 3,
    explanation: "O TLB é um cache interno à MMU que armazena traduções recentes Página -> Quadro do processo ativo. Como cada processo possui seu próprio espaço de endereçamento virtual e sua própria tabela de páginas, uma troca de contexto exige a limpeza do TLB para evitar traduções incorretas."
  },
  {
    id: 58,
    IDProva: 2,
    question: "Um sistema gerencia uma memória física inicialmente livre de 512 KB utilizando o alocador Buddy binário. Considere a sequência de requisições: (1) alocar 70 KB para P1; (2) alocar 35 KB para P2; (3) alocar 130 KB para P3. Ao final dessas três alocações, qual será o desperdício total por fragmentação interna e o que restará livre na memória?",
    options: [
      "213 KB de fragmentação interna e 1 bloco livre de 64 KB",
      "277 KB de fragmentação interna e nenhum bloco livre",
      "200 KB de fragmentação interna e 2 blocos livres de 64 KB",
      "213 KB de fragmentação interna e 1 bloco livre de 128 KB"
    ],
    correct: 0,
    explanation: "Dica: Desenhe uma árvore binária (quem ainda não estudou o assunto procure imagens da estrura dela) para a divisão dos blocos da memória, isso facilita a visualização e evita que se percam. Passo-a-passo da resolução: (1) Alocar P1 (70 KB): como 70 KB é maior que 64 KB, precisamos de um bloco de 128 KB. Para isso, dividimos a memória até conseguir um bloco desse tamanho. P1 ocupa os 128 KB, mas utiliza apenas 70 KB. Portanto, sobram 58 KB de fragmentação interna. (2) Alocar P2 (35 KB): precisamos de um bloco de 64 KB, pois 32 KB não são suficientes. Como temos um bloco livre de 128 KB, dividimos ele em dois blocos de 64 KB. P2 ocupa um deles e utiliza apenas 35 KB, sobrando 29 KB de fragmentação interna. (3) Alocar P3 (130 KB): precisamos de um bloco de 256 KB, pois 128 KB não são suficientes. Como já temos um bloco livre desse tamanho, alocamos diretamente para P3. Como ele utiliza apenas 130 KB, sobram 126 KB de fragmentação interna. (4) Resultado final: somamos os espaços que sobraram dentro dos blocos ocupados: 58 + 29 + 126 = 213 KB de fragmentação interna. Além disso, temos 64 KB de memória livre."
  },
  {
    id: 59,
    IDProva: 2,
    question: "Em uma memória de 512 KB gerenciada pelo alocador Buddy binário, onde ocorreu a seguite sequencia de alocação: Aloca A(118 GB) -> Aloca B(54 GB) -> Aloca C(176 GB). Se o sistema liberar B e depois liberar A, qual será o estado final da memória? ",
    options: [
      "[128 KB livre], [128 KB livre] e [C: 256 KB]",
      "[128 KB livre], [64 KB livre], [64 KB livre] e [C: 256 KB]",
      "[256 KB livre] e [C: 256 KB em uso]",
      "[512 KB livre]"
    ],
    correct: 2,
    explanation: "Passo a passo: Ao liberar B, seu bloco de 64 KB fica livre e pode ser unido ao bloco vizinho de 64 KB que já estava livre, formando um bloco de 128 KB livre. Em seguida, ao liberar A, seu bloco de 128 KB também fica livre e se une ao bloco de 128 KB formado anteriormente, criando um bloco de 256 KB livre. Como C continua em uso, o estado final é [256 KB livre] e [C: 256 KB em uso]."
  },
  {
    id: 60,
    IDProva: 2,
    question: "Imagine que a memória possui três blocos livres de tamanhos diferentes, em ordem: 180 MB, 95 MB e 310 MB. Se um programa precisar de 90 MB, qual bloco será escolhido por cada estratégia de alocação: First-Fit, Best-Fit e Worst-Fit?",
    options: [
      "First-Fit: Bloco 1 (180 MB) | Best-Fit: Bloco 3 (310 MB) | Worst-Fit: Bloco 2 (95 MB)",
      "First-Fit: Bloco 1 (180 MB) | Best-Fit: Bloco 2 (95 MB) | Worst-Fit: Bloco 3 (310 MB)",
      "First-Fit: Bloco 2 (95 MB) | Best-Fit: Bloco 1 (180 MB) | Worst-Fit: Bloco 3 (310 MB)",
      "First-Fit: Bloco 3 (310 MB) | Best-Fit: Bloco 2 (95 MB) | Worst-Fit: Bloco 1 (180 MB)"
    ],
    correct: 1,
    explanation: "Passo a passo: (1) First-Fit escolhe o primeiro bloco que consegue armazenar o programa. Como o primeiro bloco tem 180 MB, ele é selecionado. (2) Best-Fit escolhe o menor bloco que ainda consegue armazenar o programa. Nesse caso, é o bloco de 95 MB. (3) Worst-Fit escolhe o maior bloco disponível. Portanto, seleciona o bloco de 310 MB."
  },
  {
    id: 61,
    IDProva: 2,
    question: "Em relação aos fenômenos de fragmentação externa e interna e ao comportamento do alocador Buddy, qual afirmação é correta?",
    options: [
      "O alocador Buddy elimina a fragmentação interna porque aloca sempre o tamanho exato em bytes solicitado pelo processo.",
      "O alocador Buddy reduz bastante a fragmentação externa por meio da fusão de blocos livres pares, mas gera fragmentação interna ao arredondar pedidos para potências de 2.",
      "A fragmentação externa ocorre dentro de blocos já alocados, enquanto a fragmentação interna corresponde aos buracos livres entre processos.",
      "A desfragmentação periódica pode ser aplicada livremente tanto na memória física quanto diretamente nos endereços lógicos sem alterar ponteiros."
    ],
    correct: 1,
    explanation: "Fragmentação externa são áreas livres não contíguas entre blocos alocados, enquanto fragmentação interna é a sobra inutilizada dentro de um bloco já alocado. O alocador Buddy troca o problema da fragmentação externa (resolvido facilmente pela coalescência/junção de buddies livres) pela fragmentação interna decorrente do arredondamento para tamanhos 2^n."
  },

  // =========================================================================
  // PSCF.0204 - Memoria - BSI.pdf (7 questões - Algoritmos Ótimo, FIFO, LRU)
  // =========================================================================
  {
    id: 62,
    IDProva: 2,
    question: "Considere um sistema com 3 quadros de RAM inicialmente vazios e a seguinte cadeia de referências de páginas: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Aplicando o Algoritmo Ótimo (OPT) de substituição de páginas, qual será o número total de faltas de página?",
    options: [
      "6 faltas de página",
      "7 faltas de página",
      "9 faltas de página",
      "10 faltas de página"
    ],
    correct: 1,
    explanation: "No Algoritmo Ótimo (OPT), sempre que a memória estiver cheia e uma nova página precisar entrar, removemos aquela que demorará mais tempo para ser utilizada novamente. Passo a passo (3 quadros): t=1(1)->[1] (FP 1); t=2(2)->[1,2] (FP 2); t=3(3)->[1,2,3] (FP 3); t=4(4)->RAM cheia, no futuro 1 volta em t=5, 2 em t=6 e 3 apenas em t=10 (mais distante), então 4 substitui 3 -> [1,2,4] (FP 4); t=5(1)->Hit; t=6(2)->Hit; t=7(5)->no futuro 1 volta em t=8, 2 em t=9 e 4 em t=11 (mais distante), então 5 substitui 4 -> [1,2,5] (FP 5); t=8(1)->Hit; t=9(2)->Hit; t=10(3)->nem 1 nem 2 voltam a ser usados (5 volta em t=12), então 3 substitui 1 -> [3,2,5] (FP 6); t=11(4)->nem 3 nem 2 voltam a ser usados (5 volta em t=12), então 4 substitui 2 -> [3,4,5] (FP 7); t=12(5)->Hit. Total = 7 faltas de página."
  },
  {
    id: 63,
    IDProva: 2,
    question: "Para a cadeia de referências 2, 5, 1, 8, 2, 4, 1, 5, 8, 4 em um sistema com 4 quadros de RAM inicialmente vazios utilizando o Algoritmo Ótimo, qual página é escolhida como vítima no instante t=6 (acesso à página 4) e qual é o total de faltas de página?",
    options: [
      "Vítima: página 5 | Total: 6 faltas de página",
      "Vítima: página 8 | Total: 5 faltas de página",
      "Vítima: página 2 | Total: 5 faltas de página",
      "Vítima: página 1 | Total: 7 faltas de página"
    ],
    correct: 2,
    explanation: "Passo a passo (4 quadros): t=1(2)->[2] (FP 1); t=2(5)->[2,5] (FP 2); t=3(1)->[2,5,1] (FP 3); t=4(8)->[2,5,1,8] (FP 4); t=5(2)->Hit; t=6(4)->RAM cheia com [2,5,1,8]. Olhando as referências futuras (t=7: 1, t=8: 5, t=9: 8, t=10: 4), as páginas 1, 5 e 8 serão reutilizadas em breve, enquanto a página 2 não será mais acessada. Assim, a página 2 é escolhida como vítima, resultando em [4,5,1,8] (FP 5). Nos instantes t=7, t=8, t=9 e t=10 todas as páginas já estão na RAM (Hits). Total = 5 faltas de página."
  },
  {
    id: 64,
    IDProva: 2,
    question: "Dada a sequência de páginas 3, 1, 4, 2, 1, 3, 5, 1, 4, 2 e considerando que a memória possui 3 espaços inicialmente vazios, quantas faltas de página são geradas ao utilizar o algoritmo FIFO?",
    options: [
      "9 faltas de página",
      "8 faltas de página",
      "10 faltas de página",
      "7 faltas de página"
    ],
    correct: 0,
    explanation: "Passo a passo: No algoritmo FIFO, sempre removemos da memória a página que está há mais tempo nela, ou seja, a primeira que entrou. (1) Acessos 3, 1 e 4: as três páginas ocupam os espaços disponíveis, gerando 3 faltas de página. Memória: [3, 1, 4]. (2) Acesso 2: a memória está cheia, então removemos a página 3, que foi a primeira a entrar. Memória: [1, 4, 2]. (3) Acesso 1: a página já está na memória, então ocorre um acerto (hit). (4) Acesso 3: removemos a página 1, que é a mais antiga entre as que estão na memória. Memória: [4, 2, 3]. (5) Acesso 5: removemos a página 4. Memória: [2, 3, 5]. (6) Acesso 1: removemos a página 2. Memória: [3, 5, 1]. (7) Acesso 4: removemos a página 3. Memória: [5, 1, 4]. (8) Acesso 2: removemos a página 5. Memória: [1, 4, 2]. Resultado: ocorreram 9 faltas de página e 1 acerto (hit)."
  },
  {
    id: 65,
    IDProva: 2,
    question: "Em um sistema com 3 quadros de RAM inicialmente vazios, considere a cadeia de referências 4, 2, 7, 2, 5, 4, 7, 2, 5 executada sob o algoritmo LRU (Least Recently Used). Qual página é removida no instante t=5 (acesso à página 5) e qual é o total de faltas de página?",
    options: [
      "Vítima em t=5: página 7 | Total: 7 faltas de página",
      "Vítima em t=5: página 2 | Total: 9 faltas de página",
      "Vítima em t=5: página 4 | Total: 6 faltas de página",
      "Vítima em t=5: página 4 | Total: 8 faltas de página"
    ],
    correct: 3,
    explanation: "Passo a passo (3 quadros, ordenando do menos recente ao mais recente): t=1(4)->[4] (FP 1); t=2(2)->[4,2] (FP 2); t=3(7)->[4,2,7] (FP 3); t=4(2)->Hit, renova 2 -> [4,7,2]; t=5(5)->a menos recentemente usada é a página 4 (usada em t=1), então 5 substitui 4 -> [7,2,5] (FP 4); t=6(4)->substitui 7 -> [2,5,4] (FP 5); t=7(7)->substitui 2 -> [5,4,7] (FP 6); t=8(2)->substitui 5 -> [4,7,2] (FP 7); t=9(5)->substitui 4 -> [7,2,5] (FP 8). Total = 8 faltas de página."
  },
  {
    id: 66,
    IDProva: 2,
    question: "Em um sistema com paginação em disco, o tempo de acesso à RAM (ma) é de 50 ns e o tempo para atender uma falta de página (tf) é de 2 ms (2.000.000 ns). Se ocorrer 1 falta de página a cada 50.000 acessos à memória, qual será o tempo médio efetivo de acesso?",
    options: [
      "50 ns",
      "90 ns",
      "450 ns",
      "2.050 ns"
    ],
    correct: 1,
    explanation: "Passo a passo: (1) Converta o tempo de falta de página para nanossegundos: tf = 2 ms = 2.000.000 ns. (2) Calcule a probabilidade p de falta de página: p = 1 / 50.000 = 0,00002 (logo, 1 - p = 0,99998). (3) Aplique a fórmula t = (1 - p) * ma + p * tf: t = (0,99998 * 50) + (0,00002 * 2.000.000) = 49,999 + 40 = 89,999 ns, ou aproximadamente 90 ns."
  },
  {
    id: 67,
    IDProva: 2,
    question: "Por que o Algoritmo Ótimo (OPT) de substituição de páginas não é implementável em sistemas operacionais reais, mas continua fundamental no estudo de gerenciamento de memória?",
    options: [
      "Porque exige conhecimento prévio dos acessos futuros à memória.",
      "Porque consome mais memória RAM do que o tamanho total do disco rígido, sendo usado apenas em placas de vídeo.",
      "Porque escolhe sempre a página mais antiga na fila sem verificar permissões de leitura, gerando falhas de segmentação.",
      "Porque sofre severamente com a Anomalia de Belady sempre que o número de quadros de RAM é duplicado."
    ],
    correct: 0,
    explanation: "O critério do Algoritmo Ótimo consiste em remover a página que ficará mais tempo sem ser referenciada no futuro. Como o SO não consegue prever o comportamento futuro exato dos processos, o OPT não pode ser implementado na prática, mas funciona como padrão de referência: se ele gera N faltas de página, nenhum algoritmo real conseguirá gerar menos que N faltas."
  },
  {
    id: 68,
    IDProva: 2,
    question: "Comparando os algoritmos Ótimo, LRU e FIFO de substituição de páginas, qual afirmativa descreve corretamente suas propriedades?",
    options: [
      "Tanto o FIFO quanto o Ótimo sofrem com a Anomalia de Belady, enquanto o LRU é impossível de implementar.",
      "O LRU escolhe a página que será usada mais tarde no futuro, enquanto o Ótimo escolhe a página mais antiga na fila de chegada.",
      "Algoritmos como o FIFO podem sofrer a Anomalia de Belady ao aumentar os quadros de RAM.",
      "Aumentar o número de quadros de RAM reduz obrigatoriamente as faltas de página em todos os algoritmos, inclusive no FIFO."
    ],
    correct: 2,
    explanation: "O LRU é simétrico ao Ótimo no eixo do tempo: enquanto o Ótimo busca a página que será acessada mais longe no futuro, o LRU remove a que foi acessada mais longe no passado. Além disso, o FIFO pode apresentar a Anomalia de Belady (aumento de faltas de página mesmo aumentando a quantidade de quadros de RAM), fenômeno que não ocorre no Ótimo nem no LRU."
  },
  {
    id: 69,
    IDProva: 2,
    question: "Por que a representação numérica em complemento de dois é amplamente adotada na arquitetura de processadores modernos para lidar com números negativos?",
    options: [
      "Porque permite que operações de soma e subtração sejam executadas pelo mesmo circuito lógico, sem exigir tratamento separado para o sinal.",
      "Porque elimina completamente a possibilidade de estouro aritmético (overflow) em operações com inteiros de qualquer tamanho.",
      "Porque permite armazenar endereços de memória negativos diretamente nos registradores MAR e PC.",
      "Porque dobra a capacidade máxima de representação de números positivos em comparação com inteiros sem sinal."
    ],
    correct: 0,
    explanation: "A grande vantagem estrutural do complemento de dois no hardware é permitir que a Unidade Lógica e Aritmética (ULA) realize somas e subtrações utilizando exatamente o mesmo circuito somador, sem precisar de lógicas adicionais para tratar sinais negativos separadamente, o que simplifica o projeto do processador."
  },
  {
    id: 70,
    IDProva: 2,
    question: "Na Arquitetura de von Neumann, o que significa o princípio de que o conteúdo da memória é endereçável por localização, independentemente de seu conteúdo?",
    options: [
      "A memória identifica cada célula pela sua posição numérica (endereço), sem distinguir fisicamente se ali está guardado um dado ou uma instrução.",
      "O processador busca dados na memória pesquisando pelo valor armazenado dentro de cada palavra binária.",
      "Instruções e dados possuem tamanhos físicos distintos e só podem ser gravados em chips de memória separados.",
      "A execução de um programa ocorre sempre de forma aleatória, saltando endereços conforme o valor do dado lido."
    ],
    correct: 0,
    explanation: "Na arquitetura de von Neumann, dados e instruções coexistem na mesma memória principal de leitura e escrita. Cada posição é identificada unicamente pelo seu endereço numérico (localização), cabendo à CPU interpretar se os bits lidos daquele endereço representam uma instrução (via PC/IR) ou um dado."
  },
  {
    id: 71,
    IDProva: 2,
    question: "Como a memória principal (RAM) é estruturada logicamente em termos de palavras e unidades endereçáveis?",
    options: [
      "Como uma fila sequencial de instruções de tamanho variável, onde apenas o primeiro e o último endereço são acessíveis.",
      "Como uma matriz de bits organizada em W = 2^k palavras de N bits cada, sendo cada palavra ou byte identificado por um endereço único.",
      "Como um conjunto de registradores internos da CPU que armazenam exclusivamente variáveis do tipo ponto flutuante.",
      "Como uma árvore binária de blocos de tamanho fixo gerenciada diretamente pelo compilador C++."
    ],
    correct: 1,
    explanation: "A memória RAM funciona logicamente como uma matriz de bits dividida em W = 2^k palavras de N bits cada (onde k representa a quantidade de bits de endereço). Na maioria dos sistemas modernos, as unidades individualmente endereçáveis são bytes ou palavras."
  },
  {
    id: 72,
    IDProva: 2,
    question: "Qual é a relação entre uma instrução em linguagem Assembly (como 'MOV REG, 0x005678') e sua representação em código binário (linguagem de máquina)?",
    options: [
      "O Assembly é executado diretamente pelos transistores da ULA, enquanto o código binário serve apenas para documentação.",
      "Cada instrução Assembly possui um código numérico de operação (opcode) associado aos seus operandos, formando a sequência binária armazenada na memória.",
      "O código binário contém apenas os dados das variáveis, enquanto os opcodes permanecem armazenados no disco rígido.",
      "Uma única instrução Assembly é sempre convertida em um único bit de controle dentro do Stack Pointer."
    ],
    correct: 1,
    explanation: "O Assembly é uma representação simbólica legível por humanos da linguagem de máquina. Cada instrução Assembly corresponde a um código de operação binário (opcode) seguido dos bits de seus operandos (como endereços de memória ou registradores), que são gravados na memória e decodificados pela CPU."
  },
  {
    id: 73,
    IDProva: 2,
    question: "Ao projetar a arquitetura de memória de um computador, os engenheiros precisam lidar com um trade-off fundamental. Quais são as três variáveis principais envolvidas nesse equilíbrio?",
    options: [
      "Capacidade de armazenamento, taxa de transferência (velocidade) e custo de implementação.",
      "Quantidade de núcleos da CPU, frequência do monitor e tamanho do gabinete.",
      "Número de portas USB, velocidade da placa de rede e resolução gráfica.",
      "Tamanho do arquivo executável, linguagem de programação e sistema operacional."
    ],
    correct: 0,
    explanation: "O projeto de sistemas de memória exige equilibrar três fatores conflitantes (trade-off): capacidade (quanto pode armazenar), taxa de transferência/velocidade (quão rápido os dados são acessados) e custo (quanto custa implementar por megabyte), motivo pelo qual se adota uma hierarquia de memórias."
  },
  {
    id: 74,
    IDProva: 2,
    question: "Qual é a principal consequência de a memória principal não conseguir acompanhar a velocidade de processamento da CPU em um sistema computacional?",
    options: [
      "A CPU converte automaticamente a memória RAM em memória não-volátil para evitar perda de dados.",
      "Ocorrem atrasos no processamento, pois o processador precisa esperar pela entrega de dados e instruções da memória.",
      "A largura da palavra do processador é reduzida permanentemente de 64 bits para 8 bits.",
      "O consumo de energia da fita magnética supera o consumo dos registradores internos."
    ],
    correct: 1,
    explanation: "Como toda instrução e dado precisam ser buscados na memória para serem processados, se a memória for muito mais lenta que a CPU, o processador fica ocioso aguardando a chegada das informações (gargalo de memória), provocando atrasos diretos no desempenho geral."
  },
  {
    id: 75,
    IDProva: 2,
    question: "Além dos processos de aplicação em execução, quais outros elementos ocupam o espaço da memória física (RAM) de um computador?",
    options: [
      "Exclusivamente o código-fonte original dos programas antes de serem compilados.",
      "Apenas as tabelas de partições do disco rígido e os arquivos permanentes do usuário.",
      "O próprio Sistema Operacional, buffers de entrada/saída (E/S) e áreas de transferência direta de memória (DMA).",
      "Somente os registradores internos da CPU e a memória ROM da placa de vídeo."
    ],
    correct: 2,
    explanation: "A memória física (RAM) é dividida em regiões com diferentes finalidades: além das aplicações dos usuários, ela armazena o núcleo do Sistema Operacional, buffers utilizados para operações de Entrada/Saída (E/S) e áreas reservadas para transferência direta de memória (DMA)."
  },
  {
    id: 76,
    IDProva: 2,
    question: "Qual é a principal vantagem estrutural da memória virtual por segmentação em comparação com o modelo simples de partição única por processo?",
    options: [
      "Elimina totalmente a necessidade de verificar limites de endereço na MMU durante a execução.",
      "Permite dividir o processo em áreas lógicas distintas, cada uma com seu próprio limite e permissões de acesso.",
      "Converte todos os endereços lógicos em endereços unidimensionais de tamanho fixo de 4 KB.",
      "Impede que bibliotecas compartilhadas sejam carregadas na memória RAM por mais de um processo."
    ],
    correct: 1,
    explanation: "A segmentação estende o conceito de partições ao dividir o espaço de endereçamento do processo em múltiplos segmentos lógicos (código, dados, pilha, heap, bibliotecas compartilhadas), permitindo controlar individualmente o tamanho (limite) e as permissões (leitura, escrita, execução) de cada área."
  },
  {
    id: 77,
    IDProva: 2,
    question: "No modelo de memória virtual por paginação, qual é o papel do registrador PTBR (Page Table Base Register)?",
    options: [
      "Armazenar o deslocamento (offset) dentro da página atual que está sendo lida pela CPU.",
      "Contabilizar quantas faltas de página ocorreram desde a inicialização do sistema operacional.",
      "Bloquear operações de escrita em páginas marcadas como pertencentes ao núcleo (kernel).",
      "Apontar para o endereço inicial da tabela de páginas do processo que está ativo no momento."
    ],
    correct: 3,
    explanation: "Como cada processo possui sua própria tabela de páginas na RAM, a MMU utiliza o registrador PTBR (Page Table Base Register) para localizar rapidamente o endereço base da tabela de páginas pertencente ao processo atualmente em execução na CPU."
  },

  {
    id: 78,
    IDProva: 2,
    question: "Qual é a diferença conceitual entre a localidade de referências temporal e a localidade de referências espacial?",
    options: [
      "A temporal indica que um recurso usado recentemente tende a ser acessado novamente em breve; a espacial indica que recursos próximos a um endereço acessado têm maior chance de serem usados.",
      "A temporal ocorre apenas em discos rígidos SATA; a espacial ocorre exclusivamente nos registradores internos da CPU.",
      "A temporal refere-se ao tamanho em bytes da página; a espacial refere-se ao tempo de ciclo de clock do processador.",
      "A temporal aplica-se apenas a listas encadeadas; a espacial aplica-se exclusivamente a algoritmos recursivos."
    ],
    correct: 0,
    explanation: "A localidade temporal baseia-se na reutilização no tempo (por exemplo, variáveis de controle dentro de um laço de repetição usadas repetidamente). Já a localidade espacial baseia-se na proximidade física de endereços (acessar elementos vizinhos em um vetor na mesma página)."
  },
  {
    id: 79,
    IDProva: 2,
    question: "Além da localidade de referências do programa, quais características próprias do hardware e da política do TLB influenciam diretamente sua taxa de acertos (hit rate)?",
    options: [
      "A velocidade de rotação do disco rígido e a capacidade total da fita magnética de backup.",
      "O tamanho do TLB e a política de substituição utilizada quando o cache está cheio.",
      "A quantidade de cores do monitor e a latência do teclado conectado ao barramento E/S.",
      "O tamanho do código-fonte em texto e o número de comentários escritos pelo programador."
    ],
    correct: 1,
    explanation: "A eficiência do TLB depende tanto do comportamento do software (localidade de referências e frequência de trocas de contexto, que limpam o TLB) quanto de fatores de projeto do cache: o número de entradas suportadas pelo TLB e a política usada para substituir entradas antigas."
  },
  {
    id: 80,
    IDProva: 2,
    question: "Como se diferenciam os três níveis de alocação de memória existentes em um sistema operacional moderno (memória física, espaço de núcleo e espaço de usuário)?",
    options: [
      "O alocador físico gerencia apenas chamadas malloc/free; o de usuário organiza a RAM bruta; e o de núcleo controla somente o disco.",
      "Todos os três níveis são implementados exclusivamente fora do núcleo por bibliotecas da linguagem C.",
      "O alocador físico organiza os quadros da RAM; o de núcleo aloca estruturas internas como sockets e semáforos; e o de usuário gerencia o heap dos processos via bibliotecas.",
      "O espaço de usuário tem acesso direto aos endereços físicos da RAM, enquanto o núcleo depende do alocador de heap."
    ],
    correct: 2,
    explanation: "A gerência de memória atua em três camadas distintas: no nível físico (gerencia os quadros/endereços reais da RAM), no espaço de núcleo (aloca estruturas internas do SO como descritores de processos, sockets e semáforos) e no espaço de usuário (bibliotecas que gerenciam o heap da aplicação via malloc e free)."
  },
  {
    id: 81,
    IDProva: 2,
    question: "Por que a operação de desfragmentação periódica da memória é considerada complexa e custosa para o sistema operacional?",
    options: [
      "Porque altera a posição física dos blocos na memória, exige algoritmos de otimização combinatória para mover o mínimo de dados e só pode ser aplicada à RAM física.",
      "Porque obriga a reinicialização completa do processador e a formatação do disco rígido a cada execução.",
      "Porque transforma toda fragmentação interna em fragmentação externa, dobrando o consumo de memória dos processos.",
      "Porque só funciona em memórias não-voláteis como DVD-ROM e fita magnética."
    ],
    correct: 0,
    explanation: "Desfragmentar exige mover blocos ocupados na RAM física para concatenar lacunas livres. Isso altera os endereços físicos dos blocos, demanda algoritmos de otimização combinatória para minimizar a quantidade de bytes copiados e precisa ser rápido para não travar o sistema."
  },
  {
    id: 82,
    IDProva: 2,
    question: "Qual é a diferença fundamental entre as técnicas de Overlays, Swapping e Paging utilizadas para estender a capacidade da memória RAM com o auxílio do disco?",
    options: [
      "Overlays exige que o programador divida o programa em módulos; Swapping transfere processos inteiros suspensos para o disco; Paging move páginas individuais pouco usadas de forma transparente.",
      "Overlays é a técnica mais moderna usada no Linux atual; Swapping divide processos em blocos de 4 KB; Paging depende de divisão manual feita pelo programador.",
      "Overlays funciona sem disco rígido; Swapping ocorre apenas dentro dos registradores da CPU; Paging move apenas instruções do kernel.",
      "Não há diferença operacional entre elas, sendo apenas nomes históricos distintos para o algoritmo FIFO."
    ],
    correct: 0,
    explanation: "As três abordagens representam evoluções na extensão da memória: Overlays (antiga) obrigava o programador a modularizar manualmente o executável; Swapping move processos inteiros inativos entre RAM e disco; e Paging (padrão atual) gerencia páginas individuais sob demanda de forma transparente via MMU."
  },
  {
    id: 83,
    IDProva: 2,
    question: "Durante o tratamento de uma falta de página (page fault) pelo núcleo do Sistema Operacional, o que acontece caso a verificação indique que o endereço lógico acessado pelo processo não é válido (flag Valid = 0)?",
    options: [
      "O núcleo aloca imediatamente um quadro livre na RAM e cria uma nova página zerada para o processo continuar.",
      "O núcleo suspende o processo temporariamente até que outra tarefa libere espaço no disco de swap.",
      "O núcleo identifica um erro de endereço inválido e aborta a execução do processo.",
      "A MMU ignora a interrupção e redireciona o acesso para o endereço físico zero da memória."
    ],
    correct: 2,
    explanation: "Quando a MMU dispara uma interrupção de falta de página porque a página não está presente na RAM, o núcleo do SO verifica primeiro se a página é válida no espaço de endereçamento do processo. Se a flag 'Valid' indicar endereço inválido (fora da área mapeada), o SO aborta o processo por violação de acesso."
  },
  {
    id: 84,
    IDProva: 2,
    question: "Além da idade da página e da data do último acesso, quais outros critérios o núcleo do Sistema Operacional pode considerar ao escolher uma página 'vítima' para substituição?",
    options: [
      "Apenas a cor do gabinete e a ordem alfabética do nome do arquivo executável.",
      "A frequência de acessos, a prioridade do processo dono, o tipo de conteúdo (código ou dados) e se a página é especial (como buffers ou dados sensíveis).",
      "Exclusivamente o tamanho físico da página em bytes, removendo sempre as páginas maiores primeiro.",
      "Somente a temperatura interna da CPU, removendo páginas apenas quando o cooler atinge rotação máxima."
    ],
    correct: 1,
    explanation: "A escolha de uma boa página vítima envolve múltiplos fatores além do tempo na memória ou último acesso: frequência de uso, prioridade do processo proprietário, natureza do conteúdo (páginas de código somente-leitura não precisam ser reescritas no disco) e proteção de páginas especiais como buffers de DMA."
  },
  {
  id: 85,
  IDProva: 2,
  question: "Na hierarquia de memórias de um computador, considerando registradores, memória cache, RAM e HD/SSD, qual afirmação descreve corretamente a relação entre velocidade, custo por espaço armazenado e capacidade?",
  options: [
    "Quanto maior a velocidade da memória, menor é seu custo por espaço armazenado e maior é sua capacidade.",
    "Quanto maior a velocidade da memória, maior é seu custo por espaço armazenado e menor é sua capacidade.",
    "Quanto menor a velocidade da memória, maior é seu custo por espaço armazenado e menor é sua capacidade.",
    "A velocidade da memória não influencia seu custo nem sua capacidade de armazenamento."
  ],
  correct: 1,
  explanation: "Na hierarquia de memórias, existe uma relação geral entre velocidade, custo e capacidade. As memórias mais rápidas, como os registradores e a cache, possuem maior custo por espaço armazenado e menor capacidade. Já as memórias mais lentas, como RAM, SSD e HD, possuem menor custo por espaço armazenado e maior capacidade. Portanto, quanto mais rápida a memória, mais cara ela tende a ser e menor tende a ser sua capacidade."
  }
];

export default questoes;