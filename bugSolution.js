```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here. Check the value before updating it. 
    const id = setTimeout(() => {
      if (count > 5) {
        setCount(0);
      }
    }, 0);
    return () => clearTimeout(id);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```