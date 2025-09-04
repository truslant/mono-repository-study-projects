import { useState } from "react"

export function useInput(defaultValue, validationFn) {

    const [enteredValue, setEnteredValue] = useState(defaultValue)
    const [didEdit, setDidEdit] = useState(false)

    const valueIsValid = validationFn(enteredValue)

    const handleValueChange = (event) => {
        setEnteredValue(event.target.value)
        setDidEdit(false)
    }

    const handleInputBlur = () => {
        setDidEdit(true)
    }
    return {
        value: enteredValue,
        handleValueChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}