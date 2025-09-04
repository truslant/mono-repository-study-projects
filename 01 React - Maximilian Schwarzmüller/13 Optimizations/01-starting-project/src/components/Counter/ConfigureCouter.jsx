import { useState } from "react";
import { log } from "../../log";

const ConfigureCounter = ({ handleSetCount }) => {
    log('<ConfigureCounter />', 1)

    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);

    }

    const handleClick = () => {
        setEnteredNumber(0);
        handleSetCount(enteredNumber);
    }

    return (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="number" onChange={handleChange} value={enteredNumber} />
            <button onClick={handleClick}>Set</button>
        </section>
    )
}
export default ConfigureCounter