import { useState } from "react"

const Counter = () => {
    const [value, setVlaue] = useState(0)

    const plusCounter = () => {
     setVlaue(value + 1)
    }

    const minusCounter =() => {
      setVlaue(!value ?  0 : value - 1)
    }

    const resetValue = () => {
     setVlaue(value * 0)
    }
    return(
        <div className="main_box">

{value}
<br/>
            <button className="btn1" onClick={() => plusCounter()}>Plus</button>
            <br/>
            <br/>
            <button className="btn2" onClick={() => minusCounter()}>Minus</button>
            <br/>
            <br/>
            <button className="btn3" onClick={() => resetValue()}>Reset Value</button>
        </div>
    )
}

export default Counter;