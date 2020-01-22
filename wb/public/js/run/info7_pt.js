//Capa
const nomeCarga = "Leitura e Programação de Chaves Peugeot 206 - 207 - C3";
const revCarga = "Rev. 2";
const dataManual = "Abril 2016";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Leitura da Senha da BSI via Pinça.`,
`Programação de chaves via diagnostico.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
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
const applicationObs = createObs("Observação: O veículo deve utilizar o mesmo tipo de BSI com hardware igual o mostrado na página 6.", undefined, undefined)



const resources = [
{title: "", 
description: "Utilize transponder PCF7936 (ID46) virgem.", 
image: "../public/images/Transponders/PCF7936 Philips Virgem.jpg"},

{title: "Acessórios utilizados:", 
description: "Pinça soic 8. Conecta a memória ao OBDMap.", 
image: "../public/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Acessórios utilizados:", 
description: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "../public/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Acessórios utilizados:", 
description: "Utilize o cabo universal + adaptador A2. Conecta o OBDMap ao veículo para procedimento via diagnose.", 
image: "../public/images/Acessórios/Cabo Universal mais Adaptador A2 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
image: "../public/images/Tomada de Diagnostico/Carro/A4-B4-F6.jpg"},

{title: "Conectando a pinça no BSI:", 
description: "Identificando o pino 1 da memória.", 
image: "../public/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Identificando o pino 1.jpg"},

{title: "Conectando a pinça no BSI:", 
description: "Pinça conectada na memória. O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "../public/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Pinça conectada a memória.jpg"},

{title: "Conectando a pinça no BSI:", 
description: "Localizando a memória no BSI.", 
image: "../public/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Localizando a m emória no BSI.jpg"},
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
