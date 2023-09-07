import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './Feed';
import NavBar from './NavBar';
import RightBar from './RightBar';
import SideBar from './SideBar';


function App() {
 
  return (

 
    <>
     <Box>

      
 <NavBar/> 
    <Stack direction="row" spacing={2} justifyContent="space-between" >

      <SideBar/>
      <Feed/>
      <RightBar/>
   

    </Stack>
    </Box>
    </>
 
      
     
     



  )
  }

export default App
