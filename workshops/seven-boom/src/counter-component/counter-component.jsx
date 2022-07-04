import "./counter-component.css";
import React, { useState } from "react";

const CounterComponent = (props) => {
    const [counterValue, setCounterValue] = useState(0);
    const [counterValueBoom, setCounterValueBoom] = useState("");

    React.useEffect(() => {checkSeven()}, [counterValue]);

    const checkSeven = () => {
        console.log(counterValue.toString().indexOf(7) !== -1)
        console.log(counterValue % 7 === 0)
        if (
            counterValue % 7 === 0 ||
            counterValue.toString().indexOf("7") !== -1
        ) {
            setCounterValueBoom("BOOM");
        } else {
            setCounterValueBoom(counterValue);
        }
    };

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
