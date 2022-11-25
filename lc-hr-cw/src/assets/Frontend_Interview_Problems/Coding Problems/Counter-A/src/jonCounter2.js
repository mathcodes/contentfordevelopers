(() => {
  let count = 0;
  const elCount = document.querySelector('#count');

  document.querySelector('button').addEventListener('click', () => {
    count++;
    elCount.textContent = count;
  });
})();