s = '';
let nav2 = '';
lblOtherMessageTitle.innerHTML = othersMessageTitle;
othersMessage.forEach((message, i) => {
    nav2 += `<a class="dropdown-item" href="#errors${i}">${message.label}</a>`;
    s += `<div class="screen p-1 m-2" id="errors${i}"><div class="screenIn">${message.screen}</div></div>`;
    s += `Causas Prováveis`;
    s += `<ul>${message.cause}</ul>`;
    s += `Soluções`;
    s += `<ul>${message.solution}</ul>`;
})
divOthersMessage.innerHTML = s;
footer.innerHTML = foot;
