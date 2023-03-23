import Countries from './components/Countries';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='p-4 bg-sky-400 text-white'>
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;