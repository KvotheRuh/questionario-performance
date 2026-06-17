const questoes = [
{
    id: 1,
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
    question: "A Troca de Contexto é uma operação estrutural essencial em sistemas operacionais multitarefa. Quais são os três passos sequenciais que a compõem?",
    options: [
      "Bloquear a thread atual, acionar o compilador e aguardar a interrupção do hardware.",
      "Salvar o contexto da tarefa em execução, escolher a próxima tarefa a executar e restaurar o contexto da próxima tarefa.",
      "Limpar a memória RAM, transferir o código do disco rígido e reiniciar o Program Counter (PC).",
      "Executar o código na Unidade Lógica Aritmética, gravar os dados e liberar os semáforos."
    ],
    correct: 1,
    explanation: "A troca de contexto consiste estritamente em três etapas administrativas essenciais: (1) Salvar o contexto da tarefa atual (registradores, PC, SP) para não perder seu estado; (2) Escolher a próxima tarefa a executar (função do escalonador); e (3) Restaurar o contexto da próxima tarefa escolhida, para que ela assuma a CPU exatamente de onde havia parado anteriormente."
  }
];



export default questoes;