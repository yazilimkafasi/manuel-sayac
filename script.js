
let c = 0;
let count = document.querySelector(".count");
const box = document.querySelector(".box");

const incBtn = document.querySelector(".inc-btn");
const decBtn = document.querySelector(".dec-btn");
let countBtn = document.querySelectorAll(".count-btn");

countBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let classBtn = e.currentTarget.classList;
    console.log(classBtn);

    if (classBtn.contains("inc-btn")) {
      c++;
    } else if (classBtn.contains("dec-btn")) {
      c--;
    } else if (classBtn.contains("box")) {
      c = 0;
    }

    if (c < 0) {
      box.classList.add("minus-box");

      countBtn.forEach((e) => {
        e.classList.add("minus-btn");
      });
    } else {
      box.classList.remove("minus-box");
      countBtn.forEach((e) => {
        e.classList.remove("minus-btn");
      });
    }
    count.textContent = c;
  });
});

console.log(countBtn);




