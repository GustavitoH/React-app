import Box from '@mui/material/Box';
import {TableContainer, Table, TableHead, TableRow, TableCell, tableCellClasses, TableBody} from "@mui/material"
import { styled } from '@mui/material/styles';
import useInitialState from "../../hooks/useInitialState";

const API = "http://localhost:3000/api/usuarios";

function ListaUsuario() {
    const initialState = useInitialState(API)
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    return (
      <Box component="main" sx={{ flexGrow: 1, p: 4, mt: 6 }}>
        <TableContainer>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Nombre</StyledTableCell>
                <StyledTableCell align="right">Deportes</StyledTableCell>
                <StyledTableCell align="right">Edad</StyledTableCell>
                <StyledTableCell align="right">Ciudad</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {initialState.map((e) => (
                <StyledTableRow key={e._id}>
                  <StyledTableCell component="th" scope="row">{e._id}</StyledTableCell>
                  <StyledTableCell align="right">{e.name}</StyledTableCell>
                  <StyledTableCell align="right">{e.deportes}</StyledTableCell>
                  <StyledTableCell align="right">{e.age}</StyledTableCell>
                  <StyledTableCell align="right">{e.ciudad}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
}

export default ListaUsuario