import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widget from "./Widgets";
import Login from './Login';
import { useStateValue } from "./StateProvider";

function App() {
  //const user = null;
  const [{user}, dispatch] = useStateValue();

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
