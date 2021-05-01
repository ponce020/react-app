import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widget from "./Widgets";
import Login from './Login';

function App() {
  const user = null;

  return (
    <div className="App">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
