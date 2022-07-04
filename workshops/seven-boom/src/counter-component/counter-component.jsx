import "./counter-component.css";
import React, { useState } from "react";
import { checkSeven } from "../services/counter.service";

const CounterComponent = (props) => {
    const [counterValue, setCounterValue] = useState(1);
    const [counterValueBoom, setCounterValueBoom] = useState("");

    React.useEffect(() => {
        setCounterValueBoom(checkSeven(counterValue, 7))
    }, [counterValue]);


    return (
        <div className="counter-component">
            <button
                className="counter-component__button"
                onClick={() => setCounterValue(counterValue + 1)}
            >
                +
            </button>
            <div className="counter-component__value">{counterValueBoom}</div>
            <button
                className="counter-component__button"
                onClick={() => setCounterValue(counterValue - 1)}
            >
                -
            </button>
        </div>
    );
};

export default CounterComponent;
