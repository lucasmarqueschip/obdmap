lblApplicationTitle.innerHTML = applicationTitle;
trApplicationTable.innerHTML = applicationTable;
tbCars.innerHTML = '';
models.forEach(e => tbCars.innerHTML += `<tr><td>${e.manufacturer}</td><td>${e.model}</td><td>${e.years}</td></tr>`);
divApplicationObs.innerHTML = applicationObs;