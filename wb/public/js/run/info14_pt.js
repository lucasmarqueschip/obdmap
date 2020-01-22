//Capa
const nomeCarga = "TOYOTA Corolla - Programação de Chaves e Telecomandos";
const revCarga = "Rev. 1,10000002384186";
const dataManual = "Dezembro 2016";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Adicionar chaves.`,
`Apagar chaves.`,
`Programar telecomando.`,
`Apagar telecomando.`,
``,
``,
`Observações:`,
``,
`- A função de apagar as chaves no sistema imobilizador, preserva apenas a chave válida que efetuou o procedimento.`,
`- Durante o procedimento para apagar o telecomando, o telecomando que você utilizar para fazer o procedimento permanecerá programado.`,
`- Para testar o telecomando programado, é necessário retirar a chave do contato.`,
`- O telecomando programado em um carro pode ser programado em outro carro, ou seja, não bloqueia quando programado.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "Toyota",
model: "Corolla 1.6 (Chaves)",
years: "2009 a 2010"
},
{
manufacturer: "Toyota",
model: "Corolla 1.8 (Chaves)",
years: "2009 a 2012"
},
{
manufacturer: "Toyota",
model: "Corolla 2.0 (Chaves)",
years: "2011 a 2012"
},
{
manufacturer: "Toyota",
model: "Corolla 1.6 (Telecomando)",
years: "2009 a 2010"
},
{
manufacturer: "Toyota",
model: "Corolla 1.8 (Telecomando)",
years: "2009 a 2016"
},
{
manufacturer: "Toyota",
model: "Corolla 2.0 (Telecomando)",
years: "2011 a 2016"
},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
{title: "", 
description: "Para o veículo Corolla utilize o transponder ID 4D70.", 
image: "../public/images/Transponders/4D-70.jpg"},

{title: "", 
description: "Para veículos com essa chave, esta carga realiza a programação de chaves e telecomando.", 
image: "../public/images/Chaves e Telecomandos/Programação Telecomando.jpg"},

{title: "", 
description: "Para veículos com essa chave, esta carga realiza somente a programação do telecomando. Para programação de chaves, utilize a carga OBD0083.", 
image: "../public/images/Chaves e Telecomandos/Programação Telecomando 2.jpg"},

{title: "Acessórios utilizados:", 
description: "Utilize o cabo universal + adaptador A3.", 
image: "../public/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Acessórios utilizados:", 
description: "Utilize o cabo Universal + adaptador A1.", 
image: "../public/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "<<<<<<< .mine", 
image: "{\rtf1\ansi\ansicpg1252\deff0\deflang1046{\fonttbl{\f0\fswiss\fcharset0 Calibri-Bold;}{\f1\fnil\fcharset0 Calibri;}}"},

{title: "{\rtf1\ansi\ansicpg1252\deff0\deflang1046{\fonttbl{\f0\fnil\fcharset0 Calibri;}{\f1\fswiss\fcharset0 Calibri;}{\f2\fnil\fcharset2 Symbol;}}", 
description: ">>>>>>> .r5973", 
image: "{\colortbl ;\red31\green73\blue125;}"},

{title: "\viewkind4\uc1\pard\b\f0\fs26", 
description: "\par \cf1\b0\f1\fs24", 
image: "======="},

{title: "\par \pard", 
description: ">>>>>>> .r5973", 
image: "\par }"},

{title: "", 
, 

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
