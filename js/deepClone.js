// Example input: { role: { user: 'John' } } or { foo: [{ bar: 'baz' }] }

export default function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
}

//If it's not allowed to use, we can use recursion approach:

export default function deepClone(value) {
    if (typeof value !== 'object' || value === null) {
      return value;
    }
  
    if (Array.isArray(value)) {
      return value.map((item) => deepClone(item));
    }
  
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => [key, deepClone(value)]),
    );
}
