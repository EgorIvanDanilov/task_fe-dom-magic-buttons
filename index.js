// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Я изменю тебя";
console.log(clonedBtn);
// Способ через
clonedBtn.style.backroundColor = "#a78b71";
clonedBtn.style.color = "white";
// First method
// clonedBtn.className = "second-btn"
// second method
clonedBtn.setAttribute("class", "second-btn new class");
btn.addEventListener("click", () => {
  document.body.appendChild(clonedBtn);
});
clonedBtn.addEventListener("click", () => {
  clonedBtn.style.backroundColor = "#9c4a1a";
  clonedBtn.style.color = "black";
});

// здесь можете создать EventListener для второй кнопки
