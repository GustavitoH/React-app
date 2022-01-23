import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaUsuario from '../Components/Users/ListaUsuario';
import Login from '../containers/Login';
import SideBar from '../Components/SideBar/SideBar'
import Dashboard from '../Components/Dashboard/Dashboard';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route patch="/menu" element={<SideBar/>}>
                <Route path="/menu/dashboard" element={<Dashboard/>}/>
                <Route path="/menu/usuarios" element={<ListaUsuario/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default App;