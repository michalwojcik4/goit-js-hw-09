import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] <= options.defaultDate){
        startBtn.setAttribute('disabled', 'disabled');
        return Notiflix.Notify.warning('Please choose a date in the future')
      }
      startBtn.removeAttribute('disabled')
    },
  };

const fp = flatpickr(datetimePicker, options);

startBtn.addEventListener('click', startTimer);

function startTimer(){
  const yourTime = fp.selectedDates[0].getTime();
  startBtn.setAttribute('disabled', 'disabled');
  datetimePicker.setAttribute('disabled', 'disabled');

  const interval = setInterval(()=>{
    const currentTime = new Date().getTime();
    const timeDifference = yourTime - currentTime;

    if(timeDifference <= 0){
      clearInterval(interval);
      datetimePicker.removeAttribute('disabled');
      return Notiflix.Notify.success('Sukces!');
    }

    days.textContent = addLeadingZero(convertMs(timeDifference).days);
    hours.textContent = addLeadingZero(convertMs(timeDifference).hours);
    minutes.textContent = addLeadingZero(convertMs(timeDifference).minutes);
    seconds.textContent = addLeadingZero(convertMs(timeDifference).seconds);
  }, 1000);
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
    
  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}