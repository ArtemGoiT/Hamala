const timerBlock = document.querySelector('.timer-time');
const deadline = '14 April 2024';
let interval;

const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadline = new Date(deadline).getTime();
  const timeRemaining = (dateDeadline - date) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);

  timerBlock.innerHTML = `
    <div class="timer-count">${days}<span>дней</span></div>
    <div class="timer-sep">:</div>
    <div class="timer-count">${('' + hours).padStart(
      2,
      '0'
    )}<span>часов</span></div>
    <div class="timer-sep">:</div>
    <div class="timer-count">${('' + minutes).padStart(
      2,
      '0'
    )}<span>минут</span></div>`;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = `акция закончилась`;
  }
};

updateClock();

interval = setInterval(updateClock, 500);
