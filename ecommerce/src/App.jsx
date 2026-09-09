import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage';
function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="checkout" element={<div>Checkout</div>}></Route>
        </Routes>
    );
}

export default App
