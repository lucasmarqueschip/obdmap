var log = document.getElementById('logs')
var divBtn = document.getElementById('btnDiv')
var vs = document.getElementById('VersionBluetooth')
var btnConnect = document.getElementById('btnConnect')
var btnDisconnect = document.getElementById('btnDisConnect')
var btnReconnect = document.getElementById('btnReconnect')

function btnConnectClick() {
  let nameDevice = document.querySelector('#name').value;
  // Nome do dispositivo para filtrar, div para logs e botao para habilitar no fim da promisse
  ConnectBluetooth(nameDevice, 'btn', [btnDisconnect, btnReconnect])
}

function btnDisconnectClick() {
  DisconnectBluetooth([btnReconnect], 'btn')
}

function btnReconnectClick(){
  
  ReconnectBluetooth([btnDisconnect], 'btn')
}

function btnReadServiceClick() {
  
}




