let bluetooth
var div = document.getElementById('logs')
var btnReadService = document.getElementById('btnReadService')

function btnConnectClick() {
  let nameDevice = document.querySelector('#name').value;
  div.innerHTML += 'Botao pressionado<br/>'
  bluetooth = new Bluetooth(nameDevice, div, btnReadService)
}

function btnReadServiceClick() {

}




