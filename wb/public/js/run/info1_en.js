//Capa
const nomeCarga = "PIN Code Reading and Key Programming  VW Gol, Saveiro and Voyage 2009-2012";
const revCarga = "Rev. 1,5";
const dataManual = "January 2017";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/obdEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdution`;
const introSubtitle = `This software is possible`;
const lstFunc = [
`ECU PIN code reading: IAW 4GV and ME7.5.30.`,
`Programming utmost 8 keys:  It is necessary has in hand all keys will be programmed. The old keys must also be programmed, or them will not  work more. If it happen the programming must be done again. `,
`Add new keys: Add new keys and does't erase the keys already programmed in the vehicle.`,
``,
`Observations: `,
`- IAW 4GV ECU are used in the vehicles with 1.0 engine.`,
`- ME7.5.30 ECU are used in the vehicles with 1.6 engine.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplication";
const applicationTable = "<th>Manufacturer</th><th>Model</th><th>Year</th>";
const models = [
{
manufacturer: "VW",
model: "Gol 1.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Gol 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Saveiro 1.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Saveiro 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Voyage 1.0",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Voyage 1.6",
years: "2009 a 2012"
},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
{title: "Accessories used:", 
description: "Accessories used:", 
ballon: "Accessories used:", 
image: "Accessories used:"},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "All accessories connected:", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: "Locating the diagnosis connector in the vehicle:"},
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
