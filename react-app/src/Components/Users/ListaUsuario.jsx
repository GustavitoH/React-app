import axios from "axios";
import Usuario from "./Usuario";
import { useState, useEffect } from "react";
import {TableContainer, Table, TableHead, TableRow, TableCell, tableCellClasses} from "@mui/material"
import { styled } from '@mui/material/styles';

function ListaUsuario() {

    const [state, setState] = useState([]);
    
    useEffect(() => {
      axios.get("http://localhost:3000/api/usuarios").then((res) => {
        setState(res.data.usuario);
      });
    }, []);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

    return (
        <TableContainer>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Apellido</StyledTableCell>
            <StyledTableCell align="right">Edad</StyledTableCell>
            <StyledTableCell align="right">Ciudad</StyledTableCell>
          </TableRow>
        </TableHead>
        <div>
        {state.map((e) => (
          <Usuario
            key={e._id}
            _id={e._id}
            nombre={e.nombre}
            cedula={e.cedula}
            edad={e.edad}
            apellido={e.apellido}
          />
        ))}
        </div>
      </Table>
    </TableContainer>
    )
}

export default ListaUsuario