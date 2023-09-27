import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const onIncrement = useCallback(function onIncrement() {
    setCount((c) => c + 1);
  }, []);

  const onDecrement = useCallback(function onDecrement() {
    setCount((c) => c - 1);
  }, []);

  const onReset = useCallback(
    function onReset() {
      setCount((c) => (c = initialValue));
    },
    [initialValue]
  );

  return { count, onIncrement, onDecrement, onReset };
}
