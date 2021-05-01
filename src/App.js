import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widgets';

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
      <Feed/>

      {/* widget */}
      <Widget/>
      </div>

      
    </div>
  );
}

export default App;
