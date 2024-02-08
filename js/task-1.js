`use strict`;

const listItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((list) => {
    console.log(`Category: ${list.firstElementChild.textContent}`);
    console.log(`Elements: ${list.lastElementChild.childElementCount}`)
})

