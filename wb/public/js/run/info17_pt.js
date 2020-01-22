//Capa
const nomeCarga = "Golf Antigo Immo 1- Leitura de Senha";
const revCarga = "Rev. 1";
const dataManual = "Dezembro 2016";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Leitura da senha no imobilizador via soquete S1.`,
``,
`Observação: Esta carga realiza somente a leitura de senha. Para realizar a programação de chaves ou adaptação da ECU, utilize a carga OBD0069.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "VW",
model: "Golf 1.6",
years: "1995 a 1999"
},
{
manufacturer: "VW",
model: "Golf 1.8",
years: "1995 a 1999"
},
{
manufacturer: "VW",
model: "Golf 2.0",
years: "1995 a 1999"
},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
{title: "Acessórios utilizados:", 
description: "Soquete S1. Realiza leitura de senha em microcontroladores.", 
image: "../public/images/Acessórios/Soquete S1.jpg"},

{title: "Acessórios utilizados:", 
description: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "../public/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "O imobilizador deste veículo encontra-se em um lugar de difícil visualização como mostra a foto abaixo, remova o parafuso que o prende.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Local IMMO.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "Remova a capa que protege a caixa de direção.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Remova CAPA.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "Remova a moldura que esconde os parafusos 3 e 4.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Remova Moldura.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "Remova o parafuso 6.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Remova pafuso 4.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "Remova os parafusos 1 e 2.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Remova Parafusus.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "Remova o parafuso 5.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Remova parafuso 3.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "Remova os parafusos 3 e 4.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Remova parafusos 2.jpg"},

{title: "Desmontando as molduras do veículo:", 
description: "Remova a moldura.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Remova moldura inferior.jpg"},

{title: "Identificando e desmontando o imobilizador", 
description: "", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Immo.jpg"},

{title: "Identificando e desmontando o imobilizador", 
description: "Placa do imobilizador solta da caixa.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Placa IMMO.jpg"},

{title: "Identificando e desmontando o imobilizador", 
description: "A com auxílio de uma chave de fenda, faça uma alavanca na caixa do imobilizador para ter acesso à placa.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Desmontano IMMO.jpg"},

{title: "Localizando o microcontrolador:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/PIC immo.jpg"},

{title: "Conectando o Soquete S1 no microcontrolador:", 
description: "Observe que o soquete só se encaixa em uma posição.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Socket IMMO.jpg"},

{title: "Conectando o Soquete S1 no microcontrolador:", 
description: "Soquete S1 conectado. Se necessário, apoiar o dedo sobre o soquete para evitar mau contato.", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Socket Conectado.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0017 Golf 95/Todos os Equipamentos conectados.jpg"},
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
