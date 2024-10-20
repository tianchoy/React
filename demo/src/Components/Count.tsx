import { useState } from "react";

function Count(){
    const [count,setCount] = useState(0)

    const addNumber =()=>setCount(count + 1)
    return(
        <div>
            <p>{count}</p>
            <button onClick={addNumber}>add</button>
        </div>
    )
}

export default Count