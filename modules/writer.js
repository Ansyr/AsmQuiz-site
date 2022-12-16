export const Writer = (ms, text, target, flag = true) => {
  try {
    let firstCall = flag;
    if (!firstCall) {
      target.innerHTML = '';
      firstCall = true;
    }
    let i = 0;
    if (i < text.length) {
      document.querySelector(target).innerHTML += text.charAt(i);
      i++;
      setTimeout(() => Writer(ms, text.slice(i), target, firstCall), ms);
    }
  } catch (e) {
    console.log(e);
    firstCall = false;
  }
};
