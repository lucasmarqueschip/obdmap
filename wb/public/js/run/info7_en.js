//Capa
const nomeCarga = "PIN Code Reading and Key Programming Peugeot 206 - 207 - C3";
const revCarga = "Rev. 2";
const dataManual = "January 2016";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = "Introdution";
const introSubtitle = "This software is possible";
const lstFunc = [
"PIN code reading BSI by clip.",
"Key programming by OBDII.",

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplication";
const applicationTable = "<th>Manufacturer</th><th>Model</th><th>Year</th>";
const models = [
{
manufacturer: "Peugeot",
model: "206 1.4",
years: "2004 a 2010"
},
{
manufacturer: "Peugeot",
model: "207 1.4",
years: "2007 a 2015"
},
{
manufacturer: "Citroen",
model: "C3 1.4",
years: "2002 a 2012"
},
{
manufacturer: "Citroen",
model: "C3 1.5",
years: "2002 a 2012"
},
{
manufacturer: "Citroen",
model: "C3 1.5",
years: "2002 a 2012"
},
{
manufacturer: "Citroen",
model: "Picasso 1.6",
years: "2006 a 2006"
},
{
manufacturer: "Citroen",
model: "Picasso 2.0",
years: "2006 a 2006"
},
];
const applicationObs = createObs("Observation:", "The vehicle must have the BSI hardware as shown in the Page 6.", undefined)



const resources = [
{title: "Transponder used:", 
description: "O transponder utilizado no sistema, pode ser tanto o <br /> ID 4D63 como o ID 4D63 DST+.<br /> <br /> A dedicação pode ser feita com a carga OBD0206.<br />", 
image: "../public/images/Transponders/ID 4D63 DST Dedicado para Ford.jpg"},

{title: "Acessories used:", 
description: "Utilize o cabo universal <br />  + adaptador A3.<br />", 
image: "../public/images/acessory/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "All acessory connected:", 
description: "All acessory connected <br /> to procedure by OBD. <br />", 
image: "../public/images/acessory/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},
];
const local = 
{title: "Finding the obd connector:", 
description: "A tomada de diagnóstico fica localizada na posição A5.", 
image: "../public/images/obdConnector/Car/A5.jpg"}

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
const othersMessageTitle = `Other messages`;
const othersMessage = [{
	label: 'Acess Denied',
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
const foot = `(I) Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
