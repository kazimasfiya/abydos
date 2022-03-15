import React,{useState,useMemo} from 'react';

function MemoExample() {

    const [count, setCount] = useState(0);
    const [item, setName] = useState(0);

    const memoName=useMemo(() => {
return <h1 style={{color:"red"}}>Rerender not every time {count}- {item}</h1>
    },[item]);

  
    

  return <div>

{memoName}

<h1>RE render again {count} - {item}</h1>


<button onClick={()=>{setCount(count+1)}}>Update Count</button>
<button onClick={()=>{setName(1);setCount(count+1)}}>Update Item</button>
  </div>;
}

export default MemoExample;

