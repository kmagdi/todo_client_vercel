import  React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const MyHeader=({isloggedIn,setisloggedIn})=> {
  console.log(process.env.REACT_APP_PASSWORD)
 const [pw,setPw]=useState('')
 const [error,setError]=useState(false)

  const handleLogin=()=> {
    if(pw==process.env.REACT_APP_PASSWORD)
      setisloggedIn(true)
    else
      setError(true)
  }

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuBookIcon />
            
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Tennivalóim
          </Typography>
          {!isloggedIn && <Search>
              <StyledInputBase className={error? "border border-danger":""}
                type="password"
                placeholder="password"
                inputProps={{ 'aria-label': 'search' }} onChange={(e)=>setPw(e.target.value)}
              />
          </Search>}
          {!isloggedIn && <Button sx={{color:'white',border:'1px solid white'}} onClick={handleLogin}>login</Button>}
          {isloggedIn && <Button sx={{color:'white',border:'1px solid white'}} onClick={()=>setisloggedIn(false)}>logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
