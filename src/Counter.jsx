import { useState } from "react"



export default function Counter(){
    const [count, setCount] = useState(0);
    
    const handleAdd = () =>{
        let newCount = count + 1;
        setCount(newCount);
    }

    const handleRemove = () => {
        let newCount = count - 1;
        setCount(newCount);
    }

    return(
        <div style={{border: '2px solid yellow', borderRadius:'20px',padding:'25px'}}>
            <h3>this is counter function</h3>
            <h4>Count :{count} </h4>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}