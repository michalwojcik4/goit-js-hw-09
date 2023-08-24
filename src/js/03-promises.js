import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
  e.preventDefault();
  const delay = parseFloat(form.elements.delay.value);
  const step = parseFloat(form.elements.step.value);
  const amount = parseFloat(form.elements.amount.value);
  
  for(let i = 0; i < amount; i++){
    const position = i + 1;
    const nextDelay = delay + i * step;
    createPromise(position, nextDelay).then(({position, delay}) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({position, delay}) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
  };

};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {  
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}