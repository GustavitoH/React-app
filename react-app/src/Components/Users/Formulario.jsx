import {useState} from "react"
import { Button, TextField, Box } from "@mui/material";


function Formulario() {
    const [nombre, setNombre] = useState('');    
    const [apellido, setApellido] = useState('');    
    const [edad, setEdad] = useState('');    
    const [ciudad, setCiudad] = useState('');    
    
    const notificar = () => {
        alert(nombre + ' ' + apellido)
    }
    return (
       <div>
            <Box component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}>
                <TextField id="fullWidth" label="Nombre"size="small" margin="dense" value={nombre} onChange={(e) =>setNombre(e.target.value)}/>
                <TextField id="fullWidth" label="Apellido"size="small" margin="dense" value={apellido} onChange={(e) =>setApellido(e.target.value)}/>
            </Box>
            <Box component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}>
                <TextField id="fullWidth" label="Edad"size="small" margin="dense" type="number" value={edad} onChange={(e) =>setEdad(e.target.value)}/>
                <TextField id="fullWidth" label="Ciudad"size="small"  value={ciudad} onChange={(e) =>setCiudad(e.target.value)}/>
            </Box>
            <Box component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '56ch' },
            }}>
            <Button fullWidth  variant="contained" color="primary" onClick={notificar}>Crear</Button>
            </Box>

       </div>
    )
}

export default Formulario;
