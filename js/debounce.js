export default function debounce(func, delay) {
    let timer;
  
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        return func.apply(this, args);
      }, delay)
    }
}
