//Capa
const nomeCarga = "Ford Pats 2 (chaves)";
const revCarga = "Rev. 0";
const dataManual = "Maio 2017";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Apagar chaves.`,
`Adicionar novas chaves: o número máximo de chaves permitidas nesse sistema é de 8 chaves.`,
`Mostrar o número de chaves programadas na ECU.`,
`Desbloqueio da Central EEC-V "ANIL".`,
``,
`Observações:`,
``,
`- Procedimentos via OBD em carros que possuem o módulo de injeção ECC-V, com sistema Pats 2.`,
`- O processo de novas chaves pode ser usado quando o cliente perdeu uma das chaves e está apenas com a reserva. Desse modo, a chave perdida não funcionará mais. Apenas as chaves gravadas através do processo de adicionar novas chaves estarão habilitadas.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "Ford",
model: "Courier 1.3",
years: "1998 a 1999"
},
{
manufacturer: "Ford",
model: "Courier 1.4 16v",
years: "1998 a 1999"
},
{
manufacturer: "Ford",
model: "Fiesta 1.0",
years: "1996 a 2002"
},
{
manufacturer: "Ford",
model: "KA 1.0",
years: "1999 a 2002"
},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
{title: "", 
description: "Utilize o transponder ID4C de vidro para adicionar novas chaves.", 
image: "../public/images/Transponders/ID4C.jpg"},

{title: "Acessórios utilizados:", 
description: "Utilize o cabo Ford conectado ao OBDMap para realizar os procedimentos via OBD.", 
image: "../public/images/Acessórios/cabo ford.jpg"},

{title: "Acessórios utilizados:", 
description: "Pinça soic 8. Conecta a memória ao OBDMap.", 
image: "../public/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Acessórios utilizados:", 
description: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "../public/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
image: "../public/images/Tomada de Diagnostico/Carro/A7.jpg"},

{title: "Luz de CODE:", 
description: "Quando a ignição é ligada, a luz de code se acende para verificar se o transponder é o codificado para o veículo em questão.", 
image: "../public/images/Funções Específicas/OBD0025 Ford Pats 2/Luz 1.jpg"},

{title: "Luz de CODE:", 
description: "Se o transponder é reconhecido, logo a luz de code se apaga.Caso contrário, a luz fica piscando.", 
image: "../public/images/Funções Específicas/OBD0025 Ford Pats 2/Luz 2.jpg"},

{title: "Identificando a Central", 
description: "", 
image: "../public/images/Funções Específicas/OBD0025 Ford Pats 2/Identificando a central.jpg"},

{title: "Localizando e conectando a pinça na memória :", 
description: "Pinça conectada na memória.", 
image: "../public/images/Funções Específicas/OBD0025 Ford Pats 2/pinça conectada.jpg"},

{title: "Localizando e conectando a pinça na memória :", 
description: "", 
image: "../public/images/Funções Específicas/OBD0025 Ford Pats 2/localizando a memória.jpg"},
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
