import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './router';
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {router}
      </Router>
    </div>
  );
}

export default App;
