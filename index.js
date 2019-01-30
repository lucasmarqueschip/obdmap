let bluetooth
var div = document.getElementById('logs')
var btnReadService = document.getElementById('btnReadService')

function btnConnectClick() {
  let nameDevice = document.querySelector('#name').value;
  div.innerHTML += 'Botao pressionado<br/>'
  // Nome do dispositivo para filtrar, div para logs e botao para habilitar no fim da promisse
  ConnectBluetooth(nameDevice, div, btnReadService)
}

function btnReadServiceClick() {

}




