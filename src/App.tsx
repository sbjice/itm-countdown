import './App.css';
import { GlobalStyle } from './components/GlobalStyle';
import { Timer } from './entities/Timer';


function App() {


  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <Timer />
      </header>
    </div>
  );
}

export default App;
