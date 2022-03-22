let follows1 = document.querySelector(".follows1");
let follows2 = document.querySelector(".follows2");
let fans = document.querySelector(".fans");
let followers = 0;
let followers2 = 0;
let fanners = 0;
setTimeout(() => {
  setInterval(() => {
    if (followers < 750) {
      followers++;
    }
    if (fanners < 500) {
      fanners++;
    }
    if (followers2 < 250) {
      followers2++;
    }

    follows1.textContent = `${followers}+`;
    follows2.textContent = `${followers2}+`;
    fans.textContent = `${fanners}+`;
  }, 1);
}, 100);
