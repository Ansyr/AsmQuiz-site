// export function Writer(selector, strText, ms, sleepMs) {
//   const sleep = (ms, cb) => {
//     setTimeout(cb, ms);
//   };
//   const writer = () => {
//     let i = 0;
//     if (i < strText.length) {
//       document.querySelector(selector).innerHTML += strText.charAt(i);
//       i++;
//       setTimeout(() => writer(ms, strText.slice(i), selector), ms);
//     }
//   };

//   sleep(sleepMs, () => writer(200, strText, selector));
// }
