import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/component" />} />
        <Route path="/component" element={<>Nothing here</>} />
      </Routes>
    </div>
  );
}

export default App;
