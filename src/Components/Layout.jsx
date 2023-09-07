import { Grid, Button, Box } from "@mui/material";
import './App.css';

const Layout = () => {
    return ( <>
    {/* <div className="App"> */}

    <section>
    <Grid container justifyContent="space-between" textAlign="center" gap={4}>
    <Grid xs={12} >

  <Box bgcolor="skyblue" height={70}>  NavBar</Box>
    
   
  </Grid>

  
  <Grid xs={2}>

  <Box bgcolor="pink" height={300}>  SideBar</Box>
    
   
  </Grid>

  <Grid  xs={6}>
   <Box bgcolor="red" height={500}>


   Feed</Box>
  </Grid>
  <Grid  xs={3}>
  <Box bgcolor="yellow" height={300}>  RightBar</Box>
  </Grid>

</Grid>
    
    </section>
 
    {/* </div> */}

    </> );
}
 
export default Layout;