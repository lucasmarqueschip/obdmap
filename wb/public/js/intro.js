lblIntroTitle.innerHTML = introTitle;
nav = `<a class="dropdown-item" href="#intro">${introTitle}</a>`;
lblIntroSubtitle.innerHTML = introSubtitle;

ulListFunc.innerHTML = '';
lstFunc.forEach(e => {
    if (e !== '') ulListFunc.innerHTML += `<li>${e}</li>`;
    else  ulListFunc.innerHTML += `<br />`;
});
divIntroObs.innerHTML = introObs;