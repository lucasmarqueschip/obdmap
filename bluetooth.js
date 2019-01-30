"use strict";

var logHTML = ''
// var bluetoothDevice;

class Bluetooth {

    constructor(name) {
        return this.ConnectBluetooth(name)
    }

    ConnectBluetooth(name) {
        logHTML = '';
        let options = { filters: [] };
        div.innerHTML += `Criando conexao: ${name} <br/>`

        // let filterService = document.querySelector('#service').value;
        // if (filterService.startsWith('0x')) {
        //     filterService = parseInt(filterService);
        // }
        // if (filterService) {
        //     options.filters.push({ services: [filterService] });
        // }

        // let filterName = document.querySelector('#name').value;
        if (name) {
            options.filters.push({ name });
        }

        // let filterNamePrefix = document.querySelector('#namePrefix').value;
        // if (filterNamePrefix) {
        //     options.filters.push({ namePrefix: filterNamePrefix });
        // }
        logHTML += 'Conectando...' + JSON.stringify(options) + '</br>'
        // bluetoothDevice = null;
        navigator.bluetooth.requestDevice(options)
            .then(device => {
                // bluetoothDevice = device;
                return connect(device);
            })
            .catch(error => {
                logHTML += 'Error: ' + error + '</br>'
            });
    }



    connect(bluetoothDevice) {
        logHTML += 'Conectando em ' + bluetoothDevice.name + '</br>'
        return bluetoothDevice.gatt.connect()
            .then(server => {
                logHTML += 'Conectado: ' + bluetoothDevice.name + '</br>'
                logHTML += 'ID: ' + bluetoothDevice.id + '</br>'
                logHTML += 'Connected: ' + bluetoothDevice.gatt.connected + '</br>'
            });
    }



}



let queueServices = []


function ReadServices() {
    // Validate services UUID entered by user first.
    let service = '0000fefb-0000-1000-8000-00805f9b34fb'
    let optionalServices = service
        .split(/, ?/).map(s => s.startsWith('0x') ? parseInt(s) : s)
        .filter(s => s && BluetoothUUID.getService);



    div.innerHTML += 'Conectando...' + '</br>'
    navigator.bluetooth.requestDevice({
        // filters: [...] <- Prefer filters to save energy & show relevant devices.
        acceptAllDevices: true,
        optionalServices: optionalServices
    })
        .then(device => {
            div.innerHTML += 'Conectando server...' + '</br>'
            return device.gatt.connect();
        })
        .then(server => {
            // Note that we could also get all services that match a specific UUID by
            // passing it to getPrimaryServices().
            div.innerHTML += 'Conectado!...' + '</br>'
            return server.getPrimaryServices();
        })
        .then(services => {
            div.innerHTML += 'Lendo Serviços...' + '</br>'
            let queue = Promise.resolve();
            services.forEach(service => {
                queue = queue.then(_ => service.getCharacteristics().then(characteristics => {
                    div.innerHTML += ('> Service: ' + service.uuid);
                    characteristics.forEach(characteristic => {
                        let sup = getSupportedProperties(characteristic)
                        // div.innerHTML += ('>> Characteristic: ' + characteristic.uuid + ' ' + sup);
                        queueServices.push(characteristic.uuid + ' ' + sup + '<br/>')
                    });
                }));
            });
            document.getElementById('btnRX').disabled = false
            return queue;
        })
        .catch(error => {
            div.innerHTML += ('Argh! ' + error);
        });
}

function RX() {
    // ReadServices()
    //     .then(q =>{
    //         div.innerHTML += 'RX INIT..</br>'
    //          disabled
    //     })

    div.innerHTML += 'RX INIT..</br>'
    div.innerHTML += 'Queue: ' + queueServices + '</br>'

    var divBtn = document.getElementById('btnDiv')
    queueServices.forEach((element, ind) => {
        divBtn.innerHTML += `<button class = 'btn' id='btnRX' onclick=
        'ServiceOf("${element.split(' ')[0]}")'>${element}</button>`
    });

}

function ServiceOf(uuid) {
    div.innerHTML += 'Servico ' + uuid + ' clickado</br>'
}


function Teste() {
    let at = ["00000001-0000-1000-8000-00805f9b34fb [teste]",
        "00000002-0000-1000-8000-00805f9b34fb [teste]",
        "00000003-0000-1000-8000-00805f9b34fb [teste]"]
    var divBtn = document.getElementById('btnDiv')
    at.forEach((element, ind) => {
        divBtn.innerHTML += `<button class = 'btn' id='btnRX' onclick=
        'ServiceOf("${element.split(' ')[0]}")' >${element}'</button>'`
    });

}


/* Utils */

function getSupportedProperties(characteristic) {
    let supportedProperties = [];
    for (const p in characteristic.properties) {
        if (characteristic.properties[p] === true) {
            supportedProperties.push(p.toUpperCase());
        }
    }
    return '[' + supportedProperties.join(', ') + ']';
}