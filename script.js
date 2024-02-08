const header1 = document.getElementById("header1");

console.log(header1.innerText);
header1.innerText = "Niklas";

const paragraph = document.getElementById("paragraph");
console.log(paragraph.innerText);
paragraph.innerText = "Lorem..";

const foot = document.getElementById("foot");

console.log(foot.innerHTML);

const links = [
  "http://google.com",
  "http://w3schools.com",
  "http://youtube.com",
  "https://iths.se",
];

const ul = document.createElement("ul");

for (const link of links) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link;
  a.innerText = link;
  li.appendChild(a);
  ul.appendChild(li);
}
foot.appendChild(ul);

const myClassDivs = document.getElementsByClassName("myClass");

console.log(myClassDivs);

const firstHeader = document.createElement("h2");
firstHeader.innerText = "Första";
const secondHeader = document.createElement("h2");
secondHeader.innerText = "Andra";

// myClassDivs[0].appendChild(firstHeader);
// myClassDivs[1].appendChild(secondHeader);

const firstP = myClassDivs[0].children[0];
const secondP = myClassDivs[1].children[0];

myClassDivs[0].insertBefore(firstHeader, firstP);
myClassDivs[1].insertBefore(secondHeader, secondP);

// for (const div of myClassDivs) {
//   for (const child of div.children) {
//     console.log(child);
//     child.innerText = "Tjohoooo";
//   }
// }

<<<<<<< HEAD
const animals = [
  "Hund",
  "Katt",
  "Kanin"
];

const div = document.createElement("div");

const djurUl = docuement.createElement("ul");

for (const animal of animals) {
    const li = document.createElement("li");
    li.innerText = animal;
    // const a = document.createElement("a");
    // li.appendChild(a);
    djurUl.appendChild(li);
}
div.appendChild(animals);

const magiskLåda = document.getElementsByClassName("magisk-låda")[0];
magiskLåda.addEventListener("mouseover", ()=>{});



=======
const djurArr = ["Hund", "Katt", "Kanin"];

const div = document.createElement("div");
const djurLista = document.createElement("ul");

for (const djur of djurArr) {
  const li = document.createElement("li");
  li.innerText = djur;
  djurLista.appendChild(li);
}

div.appendChild(djurLista);

console.log(div);

document.body.children[1].insertBefore(div, myClassDivs[0]);

const magiskLåda = document.getElementsByClassName("magisk-låda")[0];

magiskLåda.addEventListener("mouseover", () => {
  magiskLåda.classList.remove("magisk-låda-röd");
  magiskLåda.classList.add("magisk-låda-grön");
});

magiskLåda.addEventListener("mouseout", () => {
  magiskLåda.classList.remove("magisk-låda-grön");
  magiskLåda.classList.add("magisk-låda-röd");
});

console.log(magiskLåda.classList);
>>>>>>> 752bf0be94ddbce377c0cb119ff12a17d2741f8e
