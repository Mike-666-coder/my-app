import Header from './header.js';
import NavBar from './navBar.js';
import News from './news.js';
import Product from './product.js';
import Shop from './shop.js';
import Solgan from './solgan.js';
import Footer from './footer.js';
import NewsLetter from './newsletter.js';
// import styled from '@emotion/styled';

function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Solgan />
      <Shop />
      <Product />
      <NewsLetter/>
      <Footer />
    </div>
  );
}

export default App;

