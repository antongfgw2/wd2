const fruits = ["Apple", "Mango", "Grapes"];
const div = document.createElement("div");

fruits.forEach((fruit, idx) => {
  const h1 = document.createElement("h1");

  h1.innerText = `${idx + 1}. ${fruit}`;

  div.appendChild(h1);
});

const body = document.querySelector("body");

body.appendChild(div);

const img = document.createElement("img");

img.setAttribute("src", "https://www.w3schools.com/js/pic_htmltree.gif");

img.setAttribute("alt", "lake");

div.appendChild(img);
