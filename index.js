let bluetooth
var log = document.getElementById('logs')
var divBtn = document.getElementById('btnDiv')

function btnConnectClick() {
  let nameDevice = document.querySelector('#name').value;
  div.innerHTML += 'Botao pressionado<br/>'
  // Nome do dispositivo para filtrar, div para logs e botao para habilitar no fim da promisse
  ConnectBluetooth(nameDevice)
}

function btnReadServiceClick() {

}




