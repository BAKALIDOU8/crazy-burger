import "./App.css"
import LoginPage from "./components/pages/login/LoginPage"
import { Routes, Route } from "react-router-dom"
import  OrderPage  from "./components/pages/order/OrderPage"
import Erreurpage from "./components/pages/erreur/Erreurpage"

function App() {
return ( <Routes>
    <Route path="/" element= { <LoginPage/> } /> 
    <Route path="/order/:username" element= { <OrderPage/> } />  
    <Route path="*" element= { <Erreurpage/> } />  
</Routes>
)
}

export default App
