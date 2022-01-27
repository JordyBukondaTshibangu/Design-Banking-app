import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>} />
    </Routes>
  );
}

export default App;
