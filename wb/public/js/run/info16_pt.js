//Capa
const nomeCarga = "GM Immo 1 - OPEL 1 - Leitura de senha";
const revCarga = "Rev. 0";
const dataManual = "Maio 2017";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Realiza leitura de senha do imobilizador Opel 1 via Soquete S1 e via OBD.`,
`Faz uma leitura dos principais dados do imoblizador.`,
`Apaga todas as falhas do sistema.`,
`Adiciona e remove Chaves do sistema.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "GM",
model: "Corsa 1.0",
years: "1997 a 2003"
},
{
manufacturer: "GM",
model: "Corsa 1.0 16V",
years: "1997 a 1999"
},
{
manufacturer: "GM",
model: "Corsa 1.6",
years: "1997 a 2003"
},
{
manufacturer: "GM",
model: "Corsa 1.6 16V",
years: "1997 a 1999"
},
{
manufacturer: "GM",
model: "Corsa Pickup 1.6",
years: "1997 a 1999"
},
{
manufacturer: "GM",
model: "Omega 2.2 E020",
years: "1995 a 1999"
},
{
manufacturer: "GM",
model: "Omega 2.2 IMMO",
years: "1995 a 1999"
},
{
manufacturer: "GM",
model: "Omega 4.1",
years: "1995 a 1999"
},
{
manufacturer: "GM",
model: "Vectra B 2.0",
years: "1996 a 1999"
},
{
manufacturer: "GM",
model: "Vectra B 2.0 16V",
years: "1997 a 1999"
},
{
manufacturer: "GM",
model: "Vectra B 2.2",
years: "1997 a 1999"
},
{
manufacturer: "GM",
model: "Vectra B 2.2 16V",
years: "1997 a 1999"
},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
{title: "Identificando o imobilizador Opel 1:", 
description: "Identificando o imobilizador Opel 1:", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Immo Opel1.jpg"},

{title: "Identificando o imobilizador Opel 1:", 
description: "Identificando o imobilizador Opel 1:", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Immo Opel1_2.jpg"},

{title: "Identificando o imobilizador Opel 1:", 
description: "Identificando o imobilizador Opel 1:", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Immo Opel1_3.jpg"},

{title: "Desmontando o imobilizador:", 
description: "Desmontando o imobilizador:", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Desmontando Immo.jpg"},

{title: "Desmontando o imobilizador:", 
description: "Desmontando o imobilizador:", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Desmontando Immo2.jpg"},

{title: "Desmontando o imobilizador:", 
description: "Desmontando o imobilizador:", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Desmontando Immo3.jpg"},

{title: "Retirando a antena do imobilizador:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando a Antena.jpg"},

{title: "Retirando a antena do imobilizador:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando a Antena2.jpg"},

{title: "Retirando a antena do imobilizador:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando a Antena3.jpg"},

{title: "Retirando a antena da placa:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Tirar Antena.jpg"},

{title: "Retirando a antena da placa:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Tirar Antena2.jpg"},

{title: "Retirando o cristal da placa:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando oCristal da placa.jpg"},

{title: "Retirando o cristal da placa:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando oCristal da placa2.jpg"},

{title: "Cortando o pino 11 do microcontrolador:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Cortando Pino 11.jpg"},

{title: "Cortando o pino 11 do microcontrolador:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Cortando Pino 11_2.jpg"},

{title: "Cortando o pino 11 do microcontrolador:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Cortando Pino 11_3.jpg"},

{title: "Cortando o pino 11 do microcontrolador:", 
description: "Identificando os pinos do microcontrolador Em destaque o pino 11, que deverá ser cortado", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Identificando os pinos.jpg"},

{title: "Cortando a trilha da placa do imobilizador:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Cortando a Trila.jpg"},

{title: "Conectaando o soquete S1", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Conector S1.jpg"},

{title: "Conectaando o soquete S1", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Conector S1_2.jpg"},

{title: "Conectaando o soquete S1", 
description: "", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Conector S1_3.jpg"},

{title: "Ressoldando o imobilizador Opel 1:", 
description: "Soldar o pino cortado (pino 11) com o pino ao lado (pino 12) conforme a figura.", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Soldar Pino.jpg"},

{title: "Ressoldando o imobilizador Opel 1:", 
description: "Passe o estilete sobre a trilha cortada para voltá-la na posição original, retire o verniz do local para permitir a soldagem.", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Ressoldando.jpg"},

{title: "Ressoldando o imobilizador Opel 1:", 
description: "Soldar o pino cortado (pino 11) com o pino ao lado (pino 12) conforme mostrado abaixo:", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Soldar Pino2.jpg"},

{title: "Ressoldando o imobilizador Opel 1:", 
description: "Detalhe dos pinos soldados", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Soldar Pino3.jpg"},

{title: "Ressoldando o imobilizador Opel 1:", 
description: "Solde a trilha cortada utilizando um soldador e um pouco de solda.", 
image: "../public/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Ressoldando_2.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
image: "../public/images/Tomada de Diagnostico/Carro/A4-D6-F9.jpg"},
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
