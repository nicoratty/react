import React, {useState} from 'react'

function useCounter() {
    let initialValue = 0;
    let initialCount = 0;
  let maxs = 0;

    const [count, setCount] = useState(initialValue);
    const [maxNum, setMax] = useState(100);
   

  
  
    const increment = () => { 
    if(count < maxNum)
        setCount(Number(count) + 1)
    }
  const maxVal = (e) => {
    let max = e.target.value;
    maxs = setMax(max);
}
    const decrement = () => {
      if (count > 0)
        setCount(prevCount => prevCount - 1)
    }
    const reset = () => {
        setCount(initialValue)
    }
    const setValue = (e) => {
        let inputText = e.target.value;
        initialCount = setCount(inputText)
    }

    return [count, increment, decrement, reset, setValue]
}
  export default useCounter;