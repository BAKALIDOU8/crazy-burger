import "./App.css"
import LoginPage from "./components/pages/login/LoginPage";
import { Route, Routes } from "react-router-dom";
import { OrderPage } from "./components/pages/order/OrderPage";
import { ErreurPage } from "./components/pages/erreur/Erreurpage";

function App() {
return <Routes>
    <Route path="/" element={<LoginPage/>} />
    <Route path="/order" element={<OrderPage/>} />
    <Route path="*" element={<ErreurPage/>} />
</Routes>

}

export default App
