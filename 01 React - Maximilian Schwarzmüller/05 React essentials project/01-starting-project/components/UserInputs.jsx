const UserInputs = ({ inputs, setInputs }) => {

    const handleInputChange = (event) => {
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [event.target.id]: Number(event.target.value)
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initialInvestment">
                        initial investment
                    </label>
                    <input
                        type="number"
                        name="initialInvestment"
                        id="initialInvestment"
                        value={inputs.initialInvestment}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="annualInvestment">
                        annual investment
                    </label>
                    <input
                        type="number"
                        name="annualInvestment"
                        id="annualInvestment"
                        value={inputs.annualInvestment}
                        onChange={handleInputChange} />
                </div>
            </div>

            <div className="input-group">
                <div >
                    <label htmlFor="expectedReturn">
                        expected return
                    </label>
                    <input
                        type="number"
                        name="expectedReturn"
                        id="expectedReturn"
                        value={inputs.expectedReturn}
                        onChange={handleInputChange} />
                </div>

                <div >
                    <label htmlFor="duration">
                        duration
                    </label>
                    <input
                        type="number"
                        name="duration"
                        id="duration"
                        value={inputs.duration}
                        onChange={handleInputChange} />
                </div>
            </div>
        </section>
    )
}

export default UserInputs;