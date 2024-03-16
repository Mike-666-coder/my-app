import logo from './logo.svg';
import haeder from './header.js';
import navBar from './navBar.js';
import news from './news.js';
import product from './product.js';
import shop from './shop.js';
import solgan from './solgan.js';
import footer from './footer.js';

function App() {
  return (
    <div className="App">
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

