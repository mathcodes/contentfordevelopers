(() => {
  let count = 0;
const $countEl = document.querySelector('#count');

document
.querySelector('button')
.addEventListener('click', () => {
  count++;
$countEl.textContent = count;
});
})();

// REACT VERSION IN ONE COMPONENT:

// import { useState } from 'react';

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Clicks: {count}
//       </button>
//     </div>
//   );
// }
