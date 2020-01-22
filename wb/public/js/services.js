s = '';
services.forEach((service, nServico) => {
    nav += `<a class="dropdown-item" href="#service${nServico}">${service.title}</a>`;

    s += `<div class="row fz-14 bold under pt-1 text-center pt-5 newPageForce" id="service${nServico}">`;
    s += `<div class="col">${service.title}</div>`;
    s += `</div>`;
    s += `<div class="row fz-13">`;
    s += `<div class="col">${service.description}</div>`;
    s += `</div>`;
    s += `<div class="row ft-14 mt-3">`;
    s += `<div class="col">`;
    service.screens.forEach((screen, i) => {
        s += `<div class="screenHead newPage"><div class="baloon ballon-small d-inline-flex p-1">Passo ${i + 1}</div>`;
        s += `<div class="screen p-1 m-2 d-inline-flex" id="s${nServico}step${i}"><div>`;
        screen.lines.forEach(line => s += `<div class="screenIn d-block">${line}</div>`);
        s += `</div></div><div class="baloon ballon-auto d-inline-flex p-1">${screen.help}</div>`;
        s += `</div>`;
    });
    s += `</div>`;
    s += `</div>`;
});
divServices.innerHTML = s;