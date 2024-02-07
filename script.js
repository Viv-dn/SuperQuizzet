const header1 = document.getElementById("header1");

console.log(header1.innerText);
header1.innerText = "Niklas";

const paragraph = document.getElementById("paragraph");
console.log(paragraph.innerText);
paragraph.innerText = "Lorem..";

const foot = document.getElementById("foot");

console.log(foot.innerHTML);

foot.innerHTML = `
<ul>
    <li><a href="http://google.com">Google</a></li>
    <li><a href="http://w3schools.com">W3Schools</a></li>
    <li><a href="http://youtube.com">YouTube</a></li>
</ul>
`;
