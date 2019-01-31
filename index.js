var log = document.getElementById('logs')
var divBtn = document.getElementById('btnDiv')
var vs = document.getElementById('VersionBluetooth')
var btnConnect = document.getElementById('btnConnect')
var btnDisconnect = document.getElementById('btnDisConnect')
var btnReconnect = document.getElementById('btnReconnect')

function btnConnectClick() {

  let nameDevice = document.querySelector('#name').value;
  // Nome do dispositivo para filtrar, div para logs e botao para habilitar no fim da promisse

// teste
  // let characteristics = [{ uuid: '01 [igora]' }, { uuid: '02 [igora]' }]
  // characteristics.forEach((characteristic, id) => {
  //   let element = characteristic.uuid + ' ' + '<br/>'
  //   divBtn.innerHTML += `<button class = 'btn btnRX' id='btnChar${id}' onclick=
  //       'ServiceOf("${element.split(' ')[0]}")'>${element}</button>`
  // })
// fim teste


  ConnectBluetooth(nameDevice, 'btn', [btnDisconnect])
}

function btnDisconnectClick() {
  DisconnectBluetooth('btn', [btnReconnect])
}

function btnReconnectClick() {

  ReconnectBluetooth('btn', [btnDisconnect])
}

function btnReadServiceClick() {

}




