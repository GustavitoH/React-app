import { useState, useEffect } from "react";
import axios from "axios";

const useInitialState = (API) =>{
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        axios.get(API).then((res) => {
        setUsuarios(res.data.usuario);
        });
    }, []);
    return usuarios
}

export default useInitialState;