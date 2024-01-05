import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './router';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {router.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
