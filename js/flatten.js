export default function flatten(value, arr = []) {
    if (!value) return;
  
    for (let i = 0; i < value.length; i++) {
      if (Array.isArray(value[i])) {
        flatten(value[i], arr);
      } else {
        arr.push(value[i]);
      }
    }
  
    return arr;
}
