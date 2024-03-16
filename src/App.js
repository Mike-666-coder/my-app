import logo from './logo.svg';
import header from './header.jsx';
import navBar from './navBar.jsx';
import news from './news.jsx';
import product from './product.jsx';
import shop from './shop.jsx';
import solgan from './solgan.jsx';
import footer from './footer.jsx';
import styled from `@emotion/styled`;

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
        App.jsx
      </header>
    </div>
  );
}

export default App;

