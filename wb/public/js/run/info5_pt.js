//Capa
const nomeCarga = "IMMO 3 GM - Valeo Leitura da Senha e Programação de Chaves";
const revCarga = "Rev. 0";
const dataManual = "Agosto 2016";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Leitura da senha do imobilizador IMMO3 GM em bancada.`,
`Leitura da senha do imobilizador IMMO3 GM no veículo.`,
`Programação de chaves do imobilizador IMMO3 GM (Valeo).`,
`Apagar chaves do imobilizador IMMO3 GM (Valeo).`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "GM",
model: "Blazer 2.4",
years: "2002 a 2007"
},
{
manufacturer: "GM",
model: "Blazer 2.8",
years: "2002 a 2012"
},
{
manufacturer: "GM",
model: "S10 2.4",
years: "2002 a 2007"
},
{
manufacturer: "GM",
model: "S10 2.8",
years: "2002 a 2012"
},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
{title: "", 
description: "Transponder PCF7936 (ID46) virgem.", 
image: "../public/images/Transponders/PCF7936 (ID46) Crypto 2 virgem.jpg"},

{title: "Acessórios utilizados:", 
description: "Pinça soic 8. Conecta a memória ao OBDMap.", 
image: "../public/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Acessórios utilizados:", 
description: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "../public/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Acessórios utilizados:", 
description: "Cabo universal + adaptador A2.", 
image: "../public/images/Acessórios/Cabo Universal mais Adaptador A2 DESCONECTADOS.jpg"},

{title: "Identificando e desmontando o imobilizador IMMO3", 
description: "", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/ID IMOB.jpg"},

{title: "Identificando e desmontando o imobilizador IMMO3", 
description: "", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Desmontando o imob IMMO3.jpg"},

{title: "Localizando e conectando a pinça soic na memória:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Conectando a pinça no IMMO3.jpg"},

{title: "Identificando e desmontando o imobilizador no veículo", 
description: "Vista do chicote já retirado.", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Chicote já retirado.jpg"},

{title: "Identificando e desmontando o imobilizador no veículo", 
description: "Atenção: É necessário retirar o chicote do imobilizador pois se a pinça soic for conectada no imobilizador com o chicote também conectado, pode danificar o imobilizador e o Obdmap. Pressionar as travas indicadas na foto para retirar o chicote.", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Retirando o chicote.jpg"},

{title: "Identificando e desmontando o imobilizador no veículo", 
description: "Para o acesso ao imobilizador deve-se retirar a tampa de proteção que se encontra debaixo do volante. Para soltar os dois parafusos que a prendem, utilizar chave Torks 20.", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando o imobilizador.jpg"},

{title: "Identificando e desmontando o imobilizador no veículo", 
description: "Puxar a tampa de proteção para baixo para acesso ao imobilizador.", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando o imobilizador1.jpg"},

{title: "Identificando e desmontando o imobilizador no veículo", 
description: "Com uma chave de fenda levante a tampa de proteção do imobilizador.", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Desmontando o imobilizador 2 imagens.jpg"},

{title: "Localizando e conectando a pinça na memória :", 
description: "Localização da memória a ser lida.", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 1.jpg"},

{title: "Localizando e conectando a pinça na memória :", 
description: "Posição do pino '1' da memória indicado pela seta.", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 2.jpg"},

{title: "Localizando e conectando a pinça na memória :", 
description: "Conectando a pinça na memória.", 
image: "../public/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 3.jpg"},
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
