let count = 0;
let countH = 0;
let countT = 0;

function increaseNumber() {
  count++;
  document.getElementById("counter").innerText = count;
}

function resetCounter() {
  count = 0; // تصفير العداد فعليًا
  document.getElementById("counter").innerText = count;
}
function increaseNumberH() {
  countH++;
  document.getElementById("counter_h").innerText = countH;
}

function resetCounterH() {
  countH = 0; // تصفير العداد فعليًا
  document.getElementById("counter_h").innerText = countH;
}

function increaseNumberT() {
  countT++;
  document.getElementById("counter_t").innerText = countT;
}

function resetCounterT() {
  countT = 0; // تصفير العداد فعليًا
  document.getElementById("counter_t").innerText = countT;
}
