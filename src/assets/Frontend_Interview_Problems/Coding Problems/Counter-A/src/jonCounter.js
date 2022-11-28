//HTML:
// <button>Clicks: <span id="count"></span></button>

(() => {
  let count = 0;
  const countEl = document.querySelector("#count");

  document.querySelector('button').addEventListener("click", () => {
    count++;
    countEl.textContent = count;
  });
})();

