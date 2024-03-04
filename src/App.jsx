import './App.css';
import { LIST_DATA } from './data';
import Header from './components/Header';
import MainDescription from './components/MainDescription';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id='main-description'>
          <ul id="list-item">
            {
              LIST_DATA.map(data => (
                <MainDescription
                  title={data.title} 
                  description={data.description}
                  image={data.image}  
                />
              ))
            }
            <MainDescription {...LIST_DATA[0]}  />
          </ul>
        </section>    
      </main>

      <Footer />
    </div>
  );
}

export default App;
