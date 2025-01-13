# Deep Clone

## JSON-Based Approach

```javascript
// Example input: { role: { user: 'John' } } or { foo: [{ bar: 'baz' }] }

export default function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
}
```

## Recursive Approach

```javascript
//Sometimes, the interviewer can't allow us to use JSON approach so we can try the recursive approach:

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
```

## Comparison Table

| Feature                        | JSON-Based Approach               | Recursive Approach               |
|--------------------------------|------------------------------------|----------------------------------|
| Handles `undefined` and `Symbol` | ❌                              | ✅                                |
| Handles `Date` objects         | Converts to ISO string            | ✅                                |
| Circular reference support     | ❌ Throws an error                | ❌ Throws an error               |
| Performance (simple objects)   | ✅ Faster                         | ❌ Slower                        |
