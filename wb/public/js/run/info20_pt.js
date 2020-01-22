//Capa
const nomeCarga = "Fiat Code 2 Body Computer (senha e chaves)";
const revCarga = "Rev. 5";
const dataManual = "Julho 2017";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Gerar transponders.`,
`Adicionar chaves automaticamente em toda linha Fiat que utiliza Body Computer (BC).`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "Fiat",
model: "Doblo 1.6",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Doblo 1.8",
years: "2003 a 2007"
},
{
manufacturer: "Fiat",
model: "Idea 1.4",
years: "2004 a 2009"
},
{
manufacturer: "Fiat",
model: "Idea 1.8",
years: "2004 a 2009"
},
{
manufacturer: "Fiat",
model: "Marea 1.6",
years: "2005 a 2007"
},
{
manufacturer: "Fiat",
model: "Palio 1.6 16v",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Palio 1.8",
years: "2002 a 2004"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.0 16v",
years: "2001 a 2003"
},
{
manufacturer: "Fiat",
model: "Palio Fire 1.3 16v",
years: "2001 a 2003"
},
{
manufacturer: "Fiat",
model: "Punto 1.4",
years: "2007 a 2012"
},
{
manufacturer: "Fiat",
model: "Punto 1.8",
years: "2007 a 2009"
},
{
manufacturer: "Fiat",
model: "Siena 1.6 16v",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Siena 1.8",
years: "2002 a 2007"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.0 16v",
years: "2001 a 2003"
},
{
manufacturer: "Fiat",
model: "Stilo 1.8",
years: "2003 a 2012"
},
{
manufacturer: "Fiat",
model: "Stilo 2.4",
years: "2003 a 2012"
},
{
manufacturer: "Fiat",
model: "Strada 1.6",
years: "1999 a 2002"
},
{
manufacturer: "Fiat",
model: "Strada 1.8",
years: "2002 a 2007"
},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
{title: "", 
description: "O Transponder utilizado é o Megamos Crypto 48, tratado neste manual por T48.", 
image: "../public/images/Transponders/Megamus T48.jpg"},

{title: "Acessórios utilizados:", 
description: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "../public/images/Acessórios/Cabo MCU.jpg"},

{title: "Acessórios utilizados:", 
description: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "../public/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Acessórios utilizados:", 
description: "Módulo de transponder. Realiza a programação e geração de transponders.", 
image: "../public/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Acessórios utilizados:", 
description: "Conecte o cabo universal ao adaptador A3.", 
image: "../public/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "../public/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "../public/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
image: "../public/images/Tomada de Diagnostico/Carro/A4.jpg"},

{title: "Identificando e desmontando o BC Delphi 93LC66 sem trava elétrica:", 
description: "Detalhe deste Body Computer, a placa não ocupa toda a caixa.", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Sem Caixa.jpg"},

{title: "Identificando e desmontando o BC Delphi 93LC66 sem trava elétrica:", 
description: "Utilize uma chave de fenda para destravar o BC.", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Desmontando.jpg"},

{title: "Identificando e desmontando o BC Delphi 93LC66 sem trava elétrica:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Identificando o Body Computer.jpg"},

{title: "Identificando a memória 93LC66:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Identificando a memória soic 93LC66.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Atenção:", 
image: "Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap."},

{title: "2 => Fio Preto", 
description: "3 => Fio Vermelho", 
image: "4 => Fio Roxo"},

{title: "6 => Fio Cinza", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Localizando os pontos para soldar o cabo MCU.jpg", 
image: ""},

{title: "Utilize uma chave de fenda para destravar o BC.", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Desmontando o Body Computer.jpg", 
image: ""},

{title: "", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Identificando o Body Computer.jpg", 
image: ""},

{title: "", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Identificando a memória soic 93LC66.jpg", 
image: ""},

{title: "Identificando a região da placa onde serão soldados os fios.", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Localizando os pontos para soldagem 1.jpg", 
image: ""},

{title: "Atenção:", 
description: "Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.", 
image: "1 => Fio Verde"},

{title: "3 => Fio Vermelho", 
description: "4 => Fio Roxo", 
image: "5 => Fio Azul"},

{title: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Localizando os pontos para soldagem 2.jpg", 
description: "", 
image: "Identificando e desmontando o BC Marelli MC912DG128A:"},

{title: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Desmontando o Body Computer.jpg", 
description: "", 
image: "Identificando e desmontando o BC Marelli MC912DG128A:"},

{title: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Identificando o Body Computer.jpg", 
description: "", 
image: "Identificando o microcontrolador MC912DG128A:"},

{title: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Identificando o microcontrolador MC912DG128A.jpg", 
description: "", 
image: "Localizando os pontos de soldagem do cabo MCU:"},

{title: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Cabo MCU soldado na BC.jpg", 
description: "", 
image: "Localizando os pontos de soldagem do cabo MCU:"},

{title: "Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Soldando o Cabo MCU no BC.jpg", 
image: ""},

{title: "Identificando a região da placa onde serão soldados os fios.", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Localizando os pontos para soldagem.jpg", 
image: ""},

{title: "Identificando os pontos a serem soldados os fios do cabo MCU:", 
description: "1 => Fio Amarelo", 
image: "2 => Fio Preto"},

{title: "4 => Fio Verde", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Localizando os pontos para soldagem 2.jpg", 
image: ""},

{title: "Utilize uma chave de fenda para destravar o BC.", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Desmontando o Body Computer.jpg", 
image: ""},

{title: "", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Identificando o Body Computer.jpg", 
image: ""},

{title: "", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Identif o microcontrolador MC9S12DG256B.jpg", 
image: ""},

{title: "Atenção:", 
description: "Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Soldando o Cabo MCU no BC.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Cabo MCU soldado no Body Computer.", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Soldando o Cabo MCU no BC 2.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Identificando a região da placa onde serão soldados os fios.", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Localizando os pontos para soldagem.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Identificando os pontos a serem soldados os fios do cabo MCU:", 
image: "1 => Fio Amarelo"},

{title: "3 => Fio Vermelho", 
description: "4 => Fio Verde", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Localizando os pontos para soldagem 2.jpg"},

{title: "Identificando e desmontando o BC Marelli MC9S12DG256B (Linha Fiat):", 
description: "Utilize uma chave de fenda para destravar o BC.", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Desmontando o Body Computer.jpg"},

{title: "Identificando e desmontando o BC Marelli MC9S12DG256B (Linha Fiat):", 
description: "", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Identificando o Body Computer.jpg"},

{title: "Identificando e desmontando o BC Marelli MC9S12DG256B (Linha Fiat):", 
description: "", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Identificando o Body Computer2.jpg"},

{title: "Identificando o microcontrolador MC9S12DG256B:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Identif o microcontrolador MC9S12DG256B.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Atenção:", 
image: "Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap."},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
image: "Cabo MCU soldado no Body Computer."},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
image: "Identificando a região da placa onde serão soldados os fios."},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
image: "Identificando os pontos a serem soldados os fios do cabo MCU:"},

{title: "2 => Fio Preto", 
description: "3 => Fio Vermelho", 
image: "4 => Fio Verde"},

{title: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Localizando os pontos para soldagem 2.jpg", 
description: "", 
image: "Localizando os pontos de soldagem do cabo MCU:"},

{title: "Algumas placas tem desenho um pouco diferente da anterior. Ao lado é mostrado outro modelo, muda principalmente os pontos de referência em volta do ponto 1.", 
description: "1 => Fio Amarelo", 
image: "2 => Fio Preto"},

{title: "4 => Fio Verde", 
description: "5 => Fio Azul", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Localizando os pontos para soldagem 3.jpg"},

{title: "Identificando e desmontando o BC Marelli 95160:", 
description: "Utilize uma chave de fenda para destravar o BC.", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Desmontando o Body Computer.jpg"},

{title: "Identificando e desmontando o BC Marelli 95160:", 
description: "", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Identificando o Body Computer.jpg"},

{title: "Identificando a memória 95160 (516WP):", 
description: "", 
image: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Identificando a memória 95160 (516WP).jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "Atenção:", 
image: "Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap."},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
image: "Cabo MCU soldado no Body Computer."},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
image: "Identificando a região da placa onde serão soldados os fios."},

{title: "", 
description: "Localizando os pontos de soldagem do cabo MCU:", 
image: "Identificando os pontos a serem soldados os fios do cabo MCU:"},

{title: "2 => Fio Preto", 
description: "3 => Fio Vermelho", 
image: "4 => Fio Verde"},

{title: "6 => Fio Cinza", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Localizando os pontos para soldagem 2.jpg", 
image: ""},

{title: "BC Marelli MC912DG128A (Stilo 2003):", 
description: "", 
image: "Conecte o fio branco do cabo MCU no local indicado na foto."},

{title: "", 
description: "Procedimento para evitar interferência na comunicação do cabo MCU com a BC", 
image: "BC Marelli MC9S12DG256B (Linha FIAT 2004 a 2007):"},

{title: "Conecte o fio branco do cabo MCU no local indicado na foto.", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Fio Branco/BC Marelli MC9S12DG256B (Linha FIAT 2004 a 2007).jpg", 
image: ""},

{title: "BC Marelli MC9S12DG256B (Stilo 2004 a 2007)  Modelo A:", 
description: "", 
image: "Conecte o fio branco do cabo MCU no local indicado na foto."},

{title: "", 
description: "Procedimento para evitar interferência na comunicação do cabo MCU com a BC", 
image: "BC Marelli MC9S12DG256B (Stilo 2004 a 2007)  Modelo B:"},

{title: "Conecte o fio branco do cabo MCU no local indicado na foto.", 
description: "../public/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Fio Branco/BC Marelli MC9S12DG256B (Stilo 2004 a 2007) Modelo B.jpg", 
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
