
import './App.css';
import Articles from './Components/Articles';
import logo from './Assets/Img/xhockware.jpg';

function App() {
  return (
    <div className="App">
      {/* <header>
        <img src={logo}/>
      </header> */}
      <div className="App-header">
       <Articles/>
      </div>
      <footer>Fernando Martínez famartinez.ti@gmail.com</footer>
    </div>
    
  );
}

export default App;
