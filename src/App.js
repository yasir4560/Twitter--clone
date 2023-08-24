
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="App">
      {/* sidebar */}
       <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets */}

      <Widgets />


    </div>
  );
}

export default App;
