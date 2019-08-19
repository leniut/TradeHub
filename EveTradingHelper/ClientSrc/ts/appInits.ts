var personName: string;
var personAge: number;
var test: number = 2;

personName = "Berry Allen"; // kolejny testowy komentarz !!
personAge = 34;

let titleEl = document.querySelector('h2');
titleEl.innerText = 'Hello from TypeScript';

// Funkcja testowa + testowy komentarz !!
function GetPersonInfo() {
    console.log("Test TS:", `${personName} is ${personAge} yeras old !!`);

    return `${personName} is ${personAge} yeras old !!`;
}

// inicjalizacja
$(function () {
    $('[data-toggle="popover"]').popover();
})