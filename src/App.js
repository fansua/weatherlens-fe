import logo from './logo2.svg';
import './App.css';
import WeatherForm from './WeatherForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather App</h1>
        <section>
      <div class="main-content">
            <p>Use this site to get your weather</p>
            <WeatherForm />
            <p id="message-1"></p>
            <p id="message-2"></p>
        </div>
      </section>
      </header>
     
    </div>
  );
}

export default App;
