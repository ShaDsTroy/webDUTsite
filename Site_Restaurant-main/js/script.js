"use strict";

//Скрипт для меню
const btn = document.querySelector("#menu_ori_phone");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("disp");
});

//Скрипт для якорей
const anchors = document.querySelectorAll('a[href*="#menu_"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector("" + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

//Скрипт для кнопки в меню
const cards = document.querySelectorAll(".menu_btn");

cards.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.innerHTML = "У КОРЗИНІ";
        btn.style.backgroundColor = "#47a147";
    });
});




