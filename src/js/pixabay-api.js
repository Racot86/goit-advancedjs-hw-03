import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css"

let selectedDate = new Date();

const timeElements = document.querySelectorAll('.value');
let btn = document.querySelector('button');
btn.disabled = true;

const dp = document.querySelector('#datetime-picker');
const fp = flatpickr(dp,
  {
    enableTime: true,
    dateFormat: "d-m-Y H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] > new Date()) {
        selectedDate = selectedDates[0];
        btn.disabled = false;
        btn.classList.remove('disabled');
      }else {
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
      }

    },
    onOpen(){
      fp.setDate(new Date());
    }
  });

const  convertMs = (ms) =>{
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
}

const convertDateObjToEl = (obj) =>{
  timeElements[0].innerHTML = obj.days.toString().padStart(2, '0');
  timeElements[1].innerHTML = obj.hours.toString().padStart(2, '0');
  timeElements[2].innerHTML = obj.minutes.toString().padStart(2, '0');
  timeElements[3].innerHTML = obj.seconds.toString().padStart(2, '0');
}


btn.addEventListener('click', (e) => {
  btn.disabled = true;
  btn.classList.add('disabled');
  dp.disabled = true;

  const count = setInterval(() => {
    let timeDiff = selectedDate - new Date();

    if (timeDiff < 0) {
      clearInterval(count);
      dp.disabled = false;
    }else{
      convertDateObjToEl(convertMs(timeDiff));
    }

  }, 1000);

})
