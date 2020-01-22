// capa
const nomeCarga = 'Manual Carga – WOBD0072 Programação de chaves Ford Pats4 (Ecosport 2015-2017)';
const revCarga = 'Rev. 2';
const dataManual = 'Dezembro 2019';
const imgTopPath = '../public/images/obd.png';
const imgObdPath = '../public/images/obdEquip.png';
const imgChipPath = '../public/images/chip.png';

// introdução
const introTitle = 'Introdução';
const introSubtitle = 'Esta carga realiza as seguintes funções:';
const lstFunc = [
    'Realiza teste de compatibilidade do veículo',
    'Apagamento com reprogramação de 2 chaves para o veículo. ',
    'Programação de até 8 chaves para o veículo. ',
    'Apaga falhas passadas no imobilizador e na ECU.',
    'Exibe o número de falhas presentes no imobilizador e na ECU',
    'Exibe o número de chaves programadas. '
];
const descIntroObs = 'Teste'
const introObs = createObs();

// aplicação
const applicationTitle = 'Aplicação:';
const applicationTable = '<th>Marca</th><th>Modelo</th><th>Ano</th>';
const models = [
    {
        manufacturer: 'Ford',
        model: 'Ecosport 1.6',
        years: '2015 a 2017'
    },
    {
        manufacturer: 'Ford',
        model: 'Ecosport 2.0',
        years: '2015 a 2017'
    }
];
const descObs = `Podem existir veículos que estejam na faixa de anos da aplicação, mas que não pertencem ao 
    sistema desta carga. O modelo de painel desta carga NÃO possui presença de luz de code conforme indicado 
    na figura abaixo:`;

const applicationObs = createObs('Observação', descObs, '../public/images/painelEcosport15.png');

// recursos
const resources = [
    {
        title: 'Transponder utilizado:',
        description: '',
        ballon: 'O transponder utilizado no sistema, pode ser tanto o <br /> ID 4D63 como o ID 4D63 DST+.<br /> <br /> A dedicação pode ser feita com a carga OBD0206.<br />',
        image: '../public/images/Transponders/ID 4D63 DST Dedicado para Ford.jpg'
    },
    {
        title: 'Acessórios utilizados:',
        description: '',
        ballon: 'Utilize o cabo universal <br />  + adaptador A3.<br />',
        image: '../public/images/acessory/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg'
    }, {
        title: 'Todos os acessórios conectados:',
        description: '',
        ballon: 'Todos os acessórios conectados  <br /> para procedimento via diagnose. <br />',
        image: '../public/images/acessory/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg'
    }
]

// localização
const local = {
    title: 'Localizando a tomada de diagnóstico do veículo:',
    description: 'A tomada de diagnóstico fica localizada na posição A5.',
    image: '../public/images/obdConnector/Car/A5.jpg'
};

// instruções
const descWebService = `Durante a execução das funções Web Service, existem diversas mensagens que apresentam
    informações sobre as possíveis condições do usuário no sistema. Reforçando que as funções agendadas não
    possuem parcelas e sempre serão cobradas.
    <br /><br /><span class="bold">Saldo:***.***c:</span>
    Informa o saldo total disponível para realização de qualquer função.
    <br /><br /><span class="bold">Parcelas:**/**:</span>
    Informa a parcela atual de uso da função, e a quantidade total de parcelas, sendo
    que ao atingir a quantidade total de uso, o serviço será totalmente liberado.
    <br /><br /><span class="bold">Valor do servico ***c:</span>
    Informa o valor do serviço atual selecionado.
    <br /><br /><span class="bold">Serao debitados ***c do saldo:</span>
    Informa o valor a ser debitado dos créditos, pedindo a confirmação para a
    realização da cobrança. Caso não ocorra a confirmação, nada será debitado.
    <br /><br /><span class="bold">Servico Web Liberado!:</span>
    Informa que o serviço atual selecionado, está liberado para uso sem cobranças de créditos.
    <br /><br /><span class="bold">Saldo Web Service Insuficiente!:</span>
    Informa que o saldo está abaixo do necessário para a realização do serviço atual selecionado.
    <br /><br /><span class="bold">Conecte o mobile!:</span>
    Informa que o OBDMap está aguardando a conexão via bluetooth com o aplicativo no
    dispositivo mobile.
    <br /><br /><span class="bold">Servico nao autorizado:</span>
    Contate o suporte técnico.`;

const instruction = [
    {
        title: 'Web Service',
        description: descWebService
        //pode conter imagens. Ex: image: '../public/images/acessory/Obdmap mais pinça mais painel.jpg'
    }
];


// serviços
const services = [
    {
        title: 'Realizando teste de compatibilidade',
        description: 'Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap',
        screens: [{
            lines: [
                'Selecione',
                '>Web Service',
                '</br>',
                '</br>'
            ],
            help: 'Selecione a montadora e <br> Tecle OK! <br> Tecle OK! <br> Tecle OK!'
        },
        {
            lines: [
                'Web Service',
                '>Ford',
                '</br>',
                '</br>'
            ],
            help: 'Tecle OK!'
        },
        {
            lines: [
                'Ford',
                '>Ecosport',
                '</br>',
                '</br>'
            ],
            help: 'Tecle OK!'
        }
        ]
    },
    {
        title: 'Realizando programação de chaves',
        description: 'Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap',
        screens: [{
            lines: [
                'Selecione',
                '>Web Service',
                '</br>',
                '</br>'
            ],
            help: 'Tecle OK!'
        },
        {
            lines: [
                'Web Service',
                '>Ford',
                '</br>',
                '</br>'
            ],
            help: 'Tecle OK!'
        }
        ]
    }
];


//Outras mensagens
const othersMessageTitle = 'Outras Mensagens';
const othersMessage = [
    {
        label: 'Acesso Negado',
        screen: 'Acesso Negado!<br />      **<br /><br />Tecle (OK)',
        cause: '<li>BCM não compatível com a aplicação, </li><li>OBDMAP desatualizado</li>',
        solution: '<li>Verificar aplicação (isso implica nos modelos, anos, sistemas e hardware)</li><li>Verificar com suporte técnico uma possível atualização</li>'
    },
    {
        label: 'Erro de comunicação',
        screen: 'Erro comunicacao <br/> ou veiculo <br/> incompativel! <br/>Tecle (OK) <br/>Tecle (OK) <br/>Tecle (OK) <br/>Tecle (OK)',
        cause: '<li>Defeito no veículo, parte elétrica,, </li><li>Software do OBDMap desatualizado</li>',
        solution: '<li>Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,</li><li>Conferir parte elétrica do veículo, fusíveis, etc,</li><li>Caso não esteja, fique atento as próximas atualizações </li>'
    }
]


//footer
const foot = 'Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.';