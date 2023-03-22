import './App.css';
import Countries from './components/Countries';
import Header from './components/Header';

function App() {
  return (
    <div className='p-4 bg-sky-500 text-white'>
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

export default App;