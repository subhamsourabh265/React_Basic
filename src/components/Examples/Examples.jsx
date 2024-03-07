import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from '../Section/Section';
import './Examples.css';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null)
    const handleSelect = (selectedButton) => {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }
        return (
        <Section title="Examples" id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === "animals"}
              onClick={() => handleSelect("animals")}
            >
              Animals
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "birds"}
              onClick={() => handleSelect("birds")}
            >
              Birds
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "plants"}
              onClick={() => handleSelect("plants")}
            >
              Plants
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "reptiles"}
              onClick={() => handleSelect("reptiles")}
            >
              Reptiles
            </TabButton>
          </menu>
          <div id="tab-content">
            {!selectedTopic ? (
              <p>Please select a topic.</p>
            ) : (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
              </>
            )}
          </div>
        </Section>
    );
}