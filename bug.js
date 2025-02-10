```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition for updating the count
    if (count < 10) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```