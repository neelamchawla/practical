import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Category from './Component/Category/Category';
import Sellers from './Component/Sellers/Sellers';
import bgImg from './Component/img/banner.webp';
import Deal from './Component/Deal/Deal';

function App() {
  console.log(`${process.env.REACT_APP_API_URL}`);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Category />
      <Sellers />
      <img
        src={bgImg}
        style={{ marginTop: '10%' }}
        />
      <Deal />
    </div>
  );
}

export default App;
