// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person: "ABCD"
}, {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person: "FGGHJHK"
}, {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person: "ERTYYGH"
}, {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person: "VNBNM"
}, {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person: "GFJGKHJK"
}, {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person: "FHGJBNK"
}, {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person: "GGGGGGGG"
}, {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person:"FFFF"
}, {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, obcaecati.",
    person: "DDDD"
},
];

btn.addEventListener('click', function (){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});