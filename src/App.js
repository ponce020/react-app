import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>

      {/* Body */}
      <div className='app__body'>
      {/* Sidebar */}
      <Sidebar/>

      {/* Content */}
      </div>

      
    </div>
  );
}

export default App;
