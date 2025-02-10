```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (count < 10) {
      const id = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [count, intervalId]);

  return <div>Count: {count}</div>;
}
```