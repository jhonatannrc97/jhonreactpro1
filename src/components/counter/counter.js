import { useState } from 'react'      


const Counter = () => {
    const [count, setCount] = useState(0)

    const decrement = () =>{
        setCount(prev => prev - 1)
    }
    const increment = () =>{
       for(let i = 0; i < 5; i++){
        console.log(count)
        setCount(prev =>{
            console.log(prev)
            return prev + 1
        })
        
       }
        
    }
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>decrementar</button>
            <button onClick={increment}>incrementar</button>
        </div>
    )    

}

export default Counter//