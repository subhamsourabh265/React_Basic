import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainDesc from './components/MainDesc/MainDesc';
import Examples from './components/Examples/Examples';

function App() {
  console.log('App');
 
  return (
    <div className="App">
      <Header />
      <main>
        <MainDesc />
        <Examples />
      </main>
      <Footer />
    </div>
  );
}

export default App;
