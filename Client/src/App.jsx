import Landing from './Pages/Landing';
import Repositories from './Pages/Repositories';
import { Navbar } from './Components/LandingPage/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div style={{padding: "0em "}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/repositories' element={<Repositories />}/>
          <Route path='*' element={<Navigate to='/' replace/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
