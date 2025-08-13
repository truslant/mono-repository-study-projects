import { useState } from "react";

import { EXAMPLES } from "../data";

import TabButton from '../components/TabButton'
import Section from "./Section";
import Tabs from "./Tabs";



const Examples = () => {

    const [selectedTopic, setSelectedTopic] = useState('');

    const handleSelect = (selectedButton) => {
        setSelectedTopic(selectedButton)
    }

    let content = <p>Please select a topic</p>
    if (selectedTopic) {
        content = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic]?.title}</h3>
                <p>{EXAMPLES[selectedTopic]?.description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic]?.code}
                    </code>
                </pre>
            </div>
        );
    }

    const buttons = (
        <>
            <TabButton
                onSelect={handleSelect}
                selectedButton='components'
                isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton
                onSelect={handleSelect}
                selectedButton='jsx'
                isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton
                onSelect={handleSelect}
                selectedButton='props'
                isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton
                onSelect={handleSelect}
                selectedButton='state'
                isSelected={selectedTopic === 'state'}>State</TabButton>
        </>
    )

    return (
        <>
            <Section id='examples' >
                <Tabs buttons={buttons} ButtonsContainer='menu'>
                    {content}
                </Tabs>
            </Section>
        </>
    )
}

export default Examples