const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

startBtn.addEventListener('click', handleClick);

function handleClick() {
  const promises = [...container.children].map(() => {
    return new Promise((resolve, reject) => {
      const random = Math.random();

      if (random > 0.5) {
        resolve('🤩');
      } else {
        reject('🤪');
      }
    });
  });

  Promise.allSettled(promises).then(data => {
    console.log(data);
    data.forEach((item, i) => {
      container.children[i].textContent = '';

      setTimeout(() => {
        container.children[i].textContent = item.value || item.r;
      });
    });
  });
}
