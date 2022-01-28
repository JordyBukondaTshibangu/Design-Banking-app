import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<SignIn/>} />
    </Routes>
  );
}

export default App;
