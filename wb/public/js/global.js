const navSumary = document.getElementById('navSumary');
const navErrors = document.getElementById('navErrors');

const lblNomeCarga = document.getElementById('lblNomeCarga');
const lblRevCarga = document.getElementById('lblRevCarga');
const lbldataManual = document.getElementById('lblDataManual');
const imgTop = document.getElementById('imgTop');
const imgObd = document.getElementById('imgObd');
const imgChip = document.getElementById('imgChip');

const lblIntro = document.getElementById('lblIntro');
const ulListFunc = document.getElementById('lstFunc');
const divIntroObs = document.getElementById('divIntroObs');

const lblApplicationTitle = document.getElementById('lblApplicationTitle');
const trApplicationTable = document.getElementById('trApplicationTable');
const tbCars = document.getElementById('tbCars');
const divApplicationObs = document.getElementById('divApplicationObs');

const divResources = document.getElementById('divResources');

const lblLocalTitle = document.getElementById('lblLocalTitle');
const divLocalDesc = document.getElementById('divLocalDesc');
const imgLocalImage = document.getElementById('imgLocalImage');

const divInstruction = document.getElementById('divInstruction');

const divServices = document.getElementById('divServices');

const divOthersMessage = document.getElementById('divOthersMessage');
const lblOtherMessageTitle = document.getElementById('lblOtherMessageTitle');

const footer = document.getElementById('footer');

let s = ''; //usado para auxialiar as ancoras
let nav; //usado na navegação pelas ancoras

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top - 200 }, 1000);
            return false;
        }
    });
});

function createObs(title, description, imgPath) {
    if (title) {
        let res = `<div class="row mt-2">
                        <div class="col"><strong class="obs fz-13">${title}</strong></div>
                    </div>`;
        if (description) 
            res += `<div class="row"><div class="col">${description}</div></div>`;
        if (imgPath)
            res += `<div class="row text-center mt-2"><div class="col">
                        <img class="img-fluid imgShad" src="${imgPath}" alt="Painel Ecosport">
                    </div></div>`;

        return res;
    } else return '';
}