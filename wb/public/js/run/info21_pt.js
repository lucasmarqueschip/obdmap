//Capa
const nomeCarga = "Geração de Chaves Code 1 702 / 704";
const revCarga = "Rev. 2";
const dataManual = "Agosto 2016";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Geração de transponders a partir do Imobilizador.`,
`Adicionar transponders ao Imobilizador.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "Fiat",
model: "Brava 1.6",
years: "2001 a 2003"
},
{
manufacturer: "Fiat",
model: "Fiorino 1.5",
years: "1997 a 2000"
},
{
manufacturer: "Fiat",
model: "Palio 1.0",
years: "1998 a 2000"
},
{
manufacturer: "Fiat",
model: "Palio 1.5",
years: "1997 a 2001"
},
{
manufacturer: "Fiat",
model: "Palio 1.6",
years: "1999 a 2000"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.0 8V",
years: "2001 a 2005"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.3 8V",
years: "2002 a 2005"
},
{
manufacturer: "Fiat",
model: "Siena 1.0",
years: "1997 a 2000"
},
{
manufacturer: "Fiat",
model: "Siena 1.5",
years: "1997 a 2001"
},
{
manufacturer: "Fiat",
model: "Siena 1.6",
years: "1999 a 2000"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.0",
years: "2000 a 2005"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.3",
years: "2003 a 2005"
},
{
manufacturer: "Fiat",
model: "Strada 1.5",
years: "1999 a 2004"
},
{
manufacturer: "Fiat",
model: "Strada Fire 1.3",
years: "2003 a 2005"
},
{
manufacturer: "Fiat",
model: "Uno 1.5",
years: "1996 a 2003"
},
{
manufacturer: "Fiat",
model: "Uno Mille Fire 1.0",
years: "2001 a 2005"
},
{
manufacturer: "Fiat",
model: "Uno Fire 1.3",
years: "2003 a 2005"
},
];
const applicationObs = createObs("Observação: Existem imobilizadores do sistema CODE 1 que tem numeração final diferente de 702 e 704, porém todos os Imobilizadores deste sistema são abrangidos por esta carga.", undefined, undefined)



const resources = [
{title: "", 
description: "Utilize o transponder T5/NOVA (Epóxi).", 
image: "../public/images/Transponders/Transponder T5 como ID20.jpg"},

{title: "", 
description: "O Imobilizador 702, do sistema CODE 1, utiliza o microcontrolador com máscara IM106.OOC.", 
image: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/702.jpg"},

{title: "", 
description: "O Imobilizador 704, do sistema CODE 1, utiliza o microcontrolador com máscara 1K59H.", 
image: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/704.jpg"},

{title: "Acessórios utilizados:", 
description: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "../public/images/Acessórios/Cabo MCU.jpg"},

{title: "Acessórios utilizados:", 
description: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "../public/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Acessórios utilizados:", 
description: "Módulo de transponder. Realiza a programação e geração de transponders.", 
image: "../public/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "../public/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "../public/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "Conectando o Imobilizador 702 no OBDMap:", 
description: "Identificando o Imobilizador.", 
image: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/i702.jpg"},

{title: "Conectando o Imobilizador 702 no OBDMap:", 
description: "Identificando os pontos a serem soldados os fios do cabo MCU:", 
image: "1 => Fio Amarelo"},

{title: "3 => Fio Vermelho", 
description: "4 => Fio Azul", 
image: "5 => Fio Roxo"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Pontos solda.jpg", 
description: "", 
image: "Conectando o Imobilizador 702 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Soldando Fios.jpg", 
description: "", 
image: "Conectando o Imobilizador 702 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Retirando Resina.jpg", 
description: "", 
image: "Conectando o Imobilizador 702 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Cabo MCU Soldado.jpg", 
description: "", 
image: "Conectando o Imobilizador 702 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Imobilizador Desmontado.jpg", 
description: "", 
image: "Conectando o Imobilizador 702 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Desmontando imobilizador.jpg", 
description: "", 
image: "Conectando o Imobilizador 704 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/i704.jpg", 
description: "", 
image: "Conectando o Imobilizador 704 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/704 desmontada.jpg", 
description: "", 
image: "Conectando o Imobilizador 704 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Soldando Fios 704.jpg", 
description: "", 
image: "Conectando o Imobilizador 704 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Fios Soldados 704.jpg", 
description: "", 
image: "Conectando o Imobilizador 704 no OBDMap:"},

{title: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Retirando Resina 704.jpg", 
description: "", 
image: "Conectando o Imobilizador 704 no OBDMap:"},

{title: "1 => Fio Amarelo", 
description: "2 => Fio Preto", 
image: "3 => Fio Vermelho"},

{title: "5 => Fio Verde", 
description: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Pontos de soldagem 704.jpg", 
image: ""},

{title: "Utilize uma chave de fenda para destravar o Imobilizador.", 
description: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Desmontando imobilizador.jpg", 
image: ""},

{title: "É importante apertar bem os parafusos fixadores de todos os conectores para evitar possível mau contato.", 
description: "../public/images/Funções Específicas/OBD0021 Geração de Chaves Code 1 702  704/Equipamentos Conectados.jpg", 
image: ""},
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
