export default function throttle(func, delay) {
    let wait = false;
  
    return function(...args) {
      if(wait) {
        return;
      }
  
      func.apply(this, args);
      wait = true;
      setTimeout(() => {
        wailt = false;
      }, delay)
    }
}
