let bluetooth
var div = document.getElementById('logs')
var btnReadService = document.getElementById('btnReadService')

function btnConnectBluetooth() {
  bluetooth = new Bluetooth()
  div.innerHTML += logHTML
  div.innerHTML += 'Device: ' + JSON.stringify(bluetooth)
  btnReadService.disabled = false
}


// div.innerHTML += bluetooth.Connect()




