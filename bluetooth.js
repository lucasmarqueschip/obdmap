"use strict";

var bluetoothDevice
let queueServices = []

function ConnectBluetooth(name) {
    
    vs.innerHTML = 'Version: 0.0.43 - ok'



    log.innerHTML = `Criando conexao: ${name} <br/>`
    let serviceUUiD = '0000fefb-0000-1000-8000-00805f9b34fb'
    let optionalServices = serviceUUiD
        .split(/, ?/).map(s => s.startsWith('0x') ? parseInt(s) : s)
        .filter(s => s && BluetoothUUID.getService);

    // let options = { filters: [] }
    let options = { filters: [], optionalServices: optionalServices }
    if (name) {
        options.filters.push({ name })
    }
    // let opt2 = { acceptAllDevices: true, optionalServices: optionalServices }

    log.innerHTML += 'Request Device...' + JSON.stringify(options) + '</br>'
    navigator.bluetooth.requestDevice(options)
        // navigator.bluetooth.requestDevice()
        .then(device => {
            bluetoothDevice = device;
            log.innerHTML += 'Conectando: ' + bluetoothDevice.name + '</br>'
            return bluetoothDevice.gatt.connect()
        })
        .then(server => {
            log.innerHTML += 'Conectado: ' + bluetoothDevice.name + '</br>'
            log.innerHTML += 'ID: ' + bluetoothDevice.id + '</br>'
            log.innerHTML += 'Pareado: ' + bluetoothDevice.gatt.connected + '</br>'
            log.innerHTML += 'Get services...' + '</br>'
            return server.getPrimaryServices()
        })
        .then(services => {
            let queue = Promise.resolve();
            services.forEach(service => {
                queue = queue.then(_ => service.getCharacteristics().then(characteristics => {
                    log.innerHTML += ('> Service: ' + service.uuid);
                    characteristics.forEach(characteristic => {
                        let sup = getSupportedProperties(characteristic)
                        log.innerHTML += ('>> Characteristic: ' + characteristic.uuid + ' ' + sup);
                        queueServices.push(characteristic.uuid + ' ' + sup + '<br/>')
                    });
                }));
            });

            queueServices.forEach((element) => {
                divBtn.innerHTML += `<button class = 'btn' id='btnRX' onclick=
                                'ServiceOf("${element.split(' ')[0]}")'>${element}</button>`
            })

            return queue;
        })
        .catch(error => {
            log.innerHTML += ('Argh! ' + error);
        })


}



// connect(bluetoothDevice, log, btn) {
//     log.innerHTML += 'Conectando em ' + bluetoothDevice.name + '</br>'
//     return bluetoothDevice.gatt.connect()
//         .then(server => {
//             log.innerHTML += 'Conectado: ' + bluetoothDevice.name + '</br>'
//             log.innerHTML += 'ID: ' + bluetoothDevice.id + '</br>'
//             log.innerHTML += 'Connected: ' + bluetoothDevice.gatt.connected + '</br>'
//             btnReadService.disabled = false

//         });
// }

// function ReadServices(bluetoothDevice) {
//     bluetoothDevice.gatt.connect()
//         .then(server => {
//             return server.getPrimaryServices();
//         })
//         .then(services => {
//             div.innerHTML += 'Lendo Serviços...' + '</br>'
//             let queue = Promise.resolve();
//             services.forEach(service => {
//                 queue = queue.then(_ => service.getCharacteristics().then(characteristics => {
//                     div.innerHTML += ('> Service: ' + service.uuid);
//                     characteristics.forEach(characteristic => {
//                         let sup = getSupportedProperties(characteristic)
//                         // div.innerHTML += ('>> Characteristic: ' + characteristic.uuid + ' ' + sup);
//                         queueServices.push(characteristic.uuid + ' ' + sup + '<br/>')
//                     });
//                 }));
//             });
//             document.getElementById('btnRX').disabled = false
//             return queue;
//         })
//         .catch(error => {
//             div.innerHTML += ('Argh! ' + error);
//         });

// });
// }





// let queueServices = []


// function ReadServices() {
//     // Validate services UUID entered by user first.
//     let service = '0000fefb-0000-1000-8000-00805f9b34fb'
//     let optionalServices = service
//         .split(/, ?/).map(s => s.startsWith('0x') ? parseInt(s) : s)
//         .filter(s => s && BluetoothUUID.getService);



//     div.innerHTML += 'Conectando...' + '</br>'
//     navigator.bluetooth.requestDevice({
//         // filters: [...] <- Prefer filters to save energy & show relevant devices.
//         acceptAllDevices: true,
//         optionalServices: optionalServices
//     })
//         .then(device => {
//             div.innerHTML += 'Conectando server...' + '</br>'
//             return device.gatt.connect();
//         })
//         .then(server => {
//             // Note that we could also get all services that match a specific UUID by
//             // passing it to getPrimaryServices().
//             div.innerHTML += 'Conectado!...' + '</br>'
//             return server.getPrimaryServices();
//         })
//         .then(services => {
//             div.innerHTML += 'Lendo Serviços...' + '</br>'
//             let queue = Promise.resolve();
//             services.forEach(service => {
//                 queue = queue.then(_ => service.getCharacteristics().then(characteristics => {
//                     div.innerHTML += ('> Service: ' + service.uuid);
//                     characteristics.forEach(characteristic => {
//                         let sup = getSupportedProperties(characteristic)
//                         // div.innerHTML += ('>> Characteristic: ' + characteristic.uuid + ' ' + sup);
//                         queueServices.push(characteristic.uuid + ' ' + sup + '<br/>')
//                     });
//                 }));
//             });
//             document.getElementById('btnRX').disabled = false
//             return queue;
//         })
//         .catch(error => {
//             div.innerHTML += ('Argh! ' + error);
//         });
// }

// function RX() {
//     // ReadServices()
//     //     .then(q =>{
//     //         div.innerHTML += 'RX INIT..</br>'
//     //          disabled
//     //     })

//     div.innerHTML += 'RX INIT..</br>'
//     div.innerHTML += 'Queue: ' + queueServices + '</br>'

//     var divBtn = document.getElementById('btnDiv')
//     queueServices.forEach((element, ind) => {
//         divBtn.innerHTML += `<button class = 'btn' id='btnRX' onclick=
//         'ServiceOf("${element.split(' ')[0]}")'>${element}</button>`
//     });

// }

// function ServiceOf(uuid) {
//     div.innerHTML += 'Servico ' + uuid + ' clickado</br>'
// }


// function Teste() {
//     let at = ["00000001-0000-1000-8000-00805f9b34fb [teste]",
//         "00000002-0000-1000-8000-00805f9b34fb [teste]",
//         "00000003-0000-1000-8000-00805f9b34fb [teste]"]
//     var divBtn = document.getElementById('btnDiv')
//     at.forEach((element, ind) => {
//         divBtn.innerHTML += `<button class = 'btn' id='btnRX' onclick=
//         'ServiceOf("${element.split(' ')[0]}")' >${element}'</button>'`
//     });

// }


// /* Utils */

function getSupportedProperties(characteristic) {
    let supportedProperties = [];
    for (const p in characteristic.properties) {
        if (characteristic.properties[p] === true) {
            supportedProperties.push(p.toUpperCase());
        }
    }
    return '[' + supportedProperties.join(', ') + ']';
}