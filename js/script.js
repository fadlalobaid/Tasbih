let count = 0;

function increaseNumber() {
  count++;
  document.getElementById("counter").innerText = count;
}

function resetCounter() {
  count = 0; // تصفير العداد فعليًا
  document.getElementById("counter").innerText = count;
}
function increaseNumberH() {
  count++;
  document.getElementById("counter_h").innerText = count;
}

function resetCounterH() {
  count = 0; // تصفير العداد فعليًا
  document.getElementById("counter_h").innerText = count;
}

function increaseNumberT() {
  count++;
  document.getElementById("counter_t").innerText = count;
}

function resetCounterT() {
  count = 0; // تصفير العداد فعليًا
  document.getElementById("counter_t").innerText = count;
}
