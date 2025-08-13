import { calculateInvestmentResults } from "../src/util/investment"
import { formatter } from "../src/util/investment";

const genOutput = (results) => {
    const { valueEndOfYear, annualInvestment, interest } = results[0]
    const initialInvestment = valueEndOfYear - annualInvestment - interest

    return results.map((result) => {

        const { year, interest, valueEndOfYear, annualInvestment } = result

        const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment

        const investedCapital = initialInvestment + annualInvestment * year

        return (
            <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
            </tr>
        )
    })
}


const Results = ({ inputs }) => {

    const results = calculateInvestmentResults(inputs);

    let output;
    if (results.length > 0) {
        output = genOutput(results)
    }

    return (
        <section >
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>
        </section>
    )
}

export default Results