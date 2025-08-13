import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept"
import Section from "./Section"

const CoreConcepts = () => {

    const concepts = CORE_CONCEPTS.map((concept, index) => {
        return (<CoreConcept
            {...concept}
            key={index}
        />)
    })

    return (
        <>
            <Section id='core-concepts' title='Core concepts'>
                <ul>
                    {concepts}
                </ul>
            </Section>
        </>
    )
}

export default CoreConcepts