import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');


const createPromise = (delay, status) =>{
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise.then(val=>{
    iziToast.success({message:`Fulfilled promise in ${val} ms`});
  }).catch(err=>{
    iziToast.error({message:`Rejected promise in ${err} ms`});
  })

}

const isSuccess = true;






form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(e.target.delay.value >= 0){
    createPromise(e.target.delay.value, e.target.state.value);
  }else {
    iziToast.warning({message:'Delay must be positive value!'})
  }
  console.log(e.target.state.value);
  console.log(e.target.delay.value);
})


