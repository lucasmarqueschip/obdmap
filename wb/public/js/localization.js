lblLocalTitle.innerHTML = local.title;
divLocalDesc.innerHTML = local.description;
imgLocalImage.setAttribute('src', local.image);

nav += `<a class="dropdown-item" href="#obdLocal">${local.title}</a>`;