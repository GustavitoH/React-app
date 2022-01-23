import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import { Outlet, Link } from 'react-router-dom';

const drawerWidth = 240;

export default function ClippedDrawer() {
return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Typography variant="h6" noWrap component="div">
            Bookin S.A
        </Typography>
        </Toolbar>
    </AppBar>
    <Drawer
        variant="permanent"
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
    >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <List>
            <ListItem button>
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <Link
                    style={{
                        textDecoration: 'none',
                        color: 'dimgray'
                    }}
                    to="/menu/dashboard">
                    <ListItemText primary= 'Dashboard' />
                </Link>
            </ListItem>

            <ListItem button>
                <ListItemIcon><PeopleRoundedIcon /></ListItemIcon>
                <Link 
                    style={{
                        textDecoration: 'none',
                        color: 'dimgray'
                    }}
                    to="/menu/usuarios">
                    <ListItemText primary= 'Usuarios' />
                </Link>
            </ListItem>
 
            <ListItem button>
                <ListItemIcon><BookRoundedIcon /></ListItemIcon>
                <ListItemText primary= 'Libros' />
            </ListItem>

            <ListItem button>
                <ListItemIcon><FactCheckRoundedIcon /></ListItemIcon>
                <ListItemText primary= 'Alquiler' />
            </ListItem>
        </List>
        <Divider />
        </Box>
    </Drawer>
    <Outlet/>
    </Box>
);
}