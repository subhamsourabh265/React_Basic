import './App.css';
import { EXAMPLES, LIST_DATA } from './data';
import Header from './components/Header/Header';
import MainDescription from './components/MainDescription/MainDescription';
import Footer from './components/Footer/Footer';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';

function App() {
  // let tabContent = 'Please click a button'; // executes only first time
  // const stateArray = useState('Please click a button...');
  const [selectedTopic, setSelectedTopic] = useState(null)
  console.log('App');
  const handleSelect = (selectedButton) => {
    
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
    // tabContent = selectedButton;
  }
  return (
    <div className="App">
      <Header />
      <main>
        <section id="main-description">
          <ul id="list-item">
            {LIST_DATA.map((data) => (
              <MainDescription key={data.title} {...data} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2 id="examples">Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "animals"}
              onSelect={() => handleSelect("animals")}
            >
              Animals
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "birds"}
              onSelect={() => handleSelect("birds")}
            >
              Birds
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "plants"}
              onSelect={() => handleSelect("plants")}
            >
              Plants
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "reptiles"}
              onSelect={() => handleSelect("reptiles")}
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
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
