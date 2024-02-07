const header1 = document.getElementById("header1");

console.log(header1);
//console.log(header1.innerText); se ändringen i konsollen 
header1.innerText = "Niklas"

const paragraph = document.getElementById("paragraph");
console.log(paragraph.innerText); ////se ändringen i konsollen
paragraph.innerText = "Lorem.."

const foot = docment.getElementById("links");

console.log(foot.innerHTML);
foot.innerHTML = `
<ul>
        <li><a href="http://youtube.com">youtube</a></li>
        <li><a href="http://aftonbladet.se">aftonbladet</a></li>
</ul>`;

const links = [
    "http://youtube.com",
    "http://aftonbladet.se"
]
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

const lorems = document.getElementsByClassName("lorem");
// for (var i = 0; i < lorems.length; i++) {
//     lorems.innerHTML = "hej då";
// }

const firstHeader = document.createElement("h2");
firstHeader.innerText = "första";
const secondHeader = document.createElement("h2");
secondHeader.innerText = "andra";

// lorems[0].appendChild(firstHeader);
// lorems[1].appendChild(secondHeader);

const firstP = lorems[0].children[0];
const secondP = lorems[1].children[0];

lorems[0].insertBefore(firstHeader, firstP);
lorems[1].insertBefore(secondHeader, secondP);


for (const div of lorems) {
    //console.log(div);//se i konsollen vad jag får ut
    for (const child of div.children) {
        child.innerText = "Hejdå";
    }
}

