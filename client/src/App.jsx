import { BrowserRouter , Routes, Route } from 'react-router-dom' ;
import './App.css'
import Navbar from '../components/Navbar';
import { Homepage } from '../pages/Homepage';
import { Category } from '../pages/Category';
import { Response } from '../pages/Response' ;
import { MyAds } from '../pages/MyAds';
import { Login } from '../pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/market' element={<Category />} />
          <Route path='/myadsresponse' element={<Response />} />
          <Route path='/myads' element={<MyAds />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
