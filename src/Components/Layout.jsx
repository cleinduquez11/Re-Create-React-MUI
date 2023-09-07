import { Grid, Button } from "@mui/material";
import './App.css';

const Layout = () => {
    return ( <>
    <div className="App">
    <Grid container spacing={3}>
  <Grid xs={4}>

    <Button variant="contained">My Button</Button>
    
   
  </Grid>

  <Grid xs={4}>
   <Button variant="contained">My Button</Button>
  </Grid>
  <Grid xs={4}>
   <Button variant="contained">My Button</Button>
  </Grid>

  <Grid xs={4}>
   <Button variant="contained">My Button</Button>
  </Grid>

  <Grid xs={4}>
   <Button variant="contained">My Button</Button>
  </Grid>

  <Grid xs={4}>
   <Button variant="contained">My Button</Button>
  </Grid>


</Grid>
    
    </div>

    </> );
}
 
export default Layout;