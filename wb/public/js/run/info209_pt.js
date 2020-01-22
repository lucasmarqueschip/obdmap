//Capa
const nomeCarga = "Programação de chaves Fox 2015 painel VDO Imob6 T5";
const revCarga = "Rev. 6";
const dataManual = "Julho 2017";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Programação de até 8 chaves para o veículo com chave válida: Este procedimento é somente via diagnose. É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas, onde uma delas deve iniciar o procedimento. Caso as chaves que já funcionavam no veículo não sejam programadas, elas não funcionarão mais, necessitando fazer a programação novamente.`,
``,
`Programação de até 8 chaves para o veículo sem chave válida: É necessário ter em mãos todas as chaves a serem programadas e tentar realizar a programação utilizando a função "Programação de chaves com chave válida" (Página 07), se acusar "Chave inválida" será necessário desmontar o painel para fazer a liberação (Página 17). Todas as chaves serão apagadas, funcionando somente as programadas nesse procedimento.`,
``,
`Liberação do painel: Necessita desmontagem do painel e soldagem de 4 fios do cabo MCU para fazer a liberação do painel e programar qualquer chave. Esta função deve ser usada se não existir nenhuma chave válida do veículo.`,
``,
`Observação: Quando fizer uma Liberação do painel, mas ainda não estiver finalizada a Programação por diagnose no mesmo veículo, não é possível iniciar um novo procedimento de Programação sem chaves.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "VW",
model: "Fox 1.0",
years: "2015 a 2020"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "2015 a 2020"
},
{
manufacturer: "VW",
model: "Crossfox 1.6",
years: "2015 a 2018"
},
{
manufacturer: "VW",
model: "Spacefox 1.6",
years: "2015 a 2020"
},
{
manufacturer: "VW",
model: "Spacecross 1.6",
years: "2015 a 2017"
},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
{title: "", 
description: "Utilize o Transponder ID 48 NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "../public/images/Transponders/ID 48 NOVO_OBRIGATORIO.jpg"},

{title: "Acessórios utilizados:", 
description: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "../public/images/Acessórios/Cabo MCU.jpg"},

{title: "Acessórios utilizados:", 
description: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "../public/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Acessórios utilizados:", 
description: "Utilize o cabo universal + adaptador A3.", 
image: "../public/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Acessórios utilizados:", 
description: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "../public/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
image: "../public/images/Tomada de Diagnostico/Carro/C5.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "Visão frontal do painel do Fox.", 
image: "../public/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 1.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "Retire a peça mostrada ao lado.", 
image: "../public/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 2.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "Utilize chave Torx T15 para retirar os parafusos que prendem o painel.", 
image: "../public/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 3.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "Levante a trava de cor rosa para retirar o conector do painel.", 
image: "../public/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 4.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "Utilize a chave Torx T8 para desmontar o painel.", 
image: "../public/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 5.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Área de solda do cabo MCU no painel.", 
image: "../public/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Localizando os pontos de soldagem 1.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Identificando os pontos a serem soldados os fios do cabo MCU:", 
image: "1 => Fio Vermelho"},

{title: "3 => Fio Verde", 
description: "4 => Fio Cinza", 
image: "../public/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Localizando os pontos de soldagem 2.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Soldado os fios do cabo MCU na placa do painel.", 
image: "../public/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Localizando os pontos de soldagem 3.jpg"},
];
const local = 
{title: "Localizando a tomada de diagnóstico do veículo:", 
description: "A tomada de diagnóstico fica localizada na posição A5.", 
image: "../public/images/Tomada de Diagnostico/Carro/A5.jpg"}

const instruction = [{title: `Web Service`,
description: `
Durante a execução das funções Web Service, existem diversas mensagens que apresentam informações sobre as possíveis condições do usuário no sistema. 
Reforçando que as funções agendadas não possuem parcelas e sempre serão cobradas. 
<br /><br /><span class="bold">Saldo:***.***c:</span> Informa o saldo total disponível para realização de qualquer função. 
<br /><br /><span class="bold">Parcelas:**/**:</span> Informa a parcela atual de uso da função, e a quantidade total de parcelas, sendo que ao atingir a quantidade total de uso, o serviço será totalmente liberado. 
<br /><br /><span class="bold">Valor do servico ***c:</span> Informa o valor do serviço atual selecionado. 
<br /><br /><span class="bold">Serao debitados ***c do saldo:</span> Informa o valor a ser debitado dos créditos, pedindo a confirmação para a realização da cobrança. Caso não ocorra a confirmação, nada será debitado. 
<br /><br /><span class="bold">Servico Web Liberado!:</span> Informa que o serviço atual selecionado. 
<br /><br /><span class="bold">Conecte o mobile!:</span> Informa que o OBDMap está aguardando a conexão via bluetooth com o aplicativo no dispositivo mobile.
<br /><br /><span class="bold">Servico nao autorizado:</span> Contate o suporte técnico.`}
];
const services = [{
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
	}]
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
	}]
}
];
//Outras mensagens
const othersMessageTitle = `Outras Mensagens`;
const othersMessage = [{
	label: 'Acesso Negado',
	screen: `
		Acesso Negado!<br />
		     **<br />
		<br />
		Tecle (OK)`,
	cause: `
		<li>BCM não compatível com a aplicação, </li>
		<li>OBDMAP desatualizado</li>`,
	solution: `
		<li>Verificar aplicação (isso implica nos modelos, anos, sistemas e hardware)</li>
		<li>Verificar com suporte técnico uma possível atualização</li>`
},
{
	label: 'Erro de comunicação',
	screen: `
		Erro comunicacao <br/> 
		ou veiculo <br/> 
		incompativel! <br/>
		Tecle (OK) <br/>
		Tecle (OK) <br/>
		Tecle (OK) <br/>
		Tecle (OK)`,
	cause: `
		<li>Defeito no veículo, parte elétrica, </li>
		<li>Software do OBDMap desatualizado</li>`,
	solution: `
		<li>Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,</li>
		<li>Conferir parte elétrica do veículo, fusíveis, etc,</li>
		<li>Caso não esteja, fique atento as próximas atualizações </li>`
}
];
//footer
const foot = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
