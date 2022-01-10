import Cadastro from "./Cadastro";
import Historico from "./Historico";
import Hoje from "./Hoje";
import Login from "./Login";
import Menu from "./Menu";
import Topo from "./Topo";
import Habitos from "./Habitos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/habitos' element={<Habitos />} />
                <Route path='/hoje' element={<Hoje />} />
                <Route path='/historico' element={<Historico />} />
            </Routes>
            <Menu />
        </BrowserRouter>
    )
}