import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 ,}}>
      <AppBar position="absolute" sx={{ backgroundColor: '#ffffffff' ,boxShadow:'none',top:'20px'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <CardMedia
        component="img"
        height="49"
        image="src\assets\img\logo.png"
        alt="logo"
      />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
        
            <Typography variant="h6" color="red"  border="solid red 2px" borderRadius='20px' padding={'0px 60px'} component="div">
      Already have a account
    </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
